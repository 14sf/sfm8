import React from 'react';
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell
} from '@novu/notification-center';
import { motion } from 'framer-motion';

interface NotificationCenterProps {
  subscriberId: string;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({ subscriberId }) => {
  return (
    <NovuProvider
      subscriberId={subscriberId}
      applicationIdentifier="CKpTOBcQ8Ou1"
    >
      <PopoverNotificationCenter>
        {({ unseenCount }) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <NotificationBell unseenCount={unseenCount} />
          </motion.div>
        )}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
};

export default NotificationCenter;