import { notification } from 'antd';
import PropTypes from 'prop-types';

const ShowNotification = ({
  message,
  type = 'info',
  placement = 'topRight',
  duration = 3,
  description = '',
}) => {
  if (!notification[type]) {
    return null;
  }

  notification[type]({ message, placement, duration, description });
  return null;
};

ShowNotification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  placement: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  duration: PropTypes.number,
  description: PropTypes.string,
};

export { ShowNotification };