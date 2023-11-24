import { NotificationMessage } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <div>
      <NotificationMessage>{message}</NotificationMessage>
    </div>
  );
};

export default Notification;
