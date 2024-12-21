import { Novu } from '@novu/node';

const novu = new Novu('2f3d7d1e849ebd0c0d59fc6db392ec9f');

export const sendNotification = async ({
  userId,
  type,
  data
}: {
  userId: string;
  type: 'transfer' | 'payment' | 'document' | 'system';
  data: Record<string, any>;
}) => {
  try {
    await novu.trigger('my-workflow', {
      to: {
        subscriberId: userId
      },
      payload: {
        type,
        ...data
      }
    });
    return true;
  } catch (error) {
    console.error('Failed to send notification:', error);
    return false;
  }
};

export const initializeNovuSubscriber = async (userId: string, email: string) => {
  try {
    await novu.subscribers.identify(userId, {
      email,
      firstName: email.split('@')[0]
    });
    return true;
  } catch (error) {
    console.error('Failed to initialize Novu subscriber:', error);
    return false;
  }
};