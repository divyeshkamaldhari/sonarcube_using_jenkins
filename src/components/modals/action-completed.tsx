import { Modal, Button } from 'antd';
import { ButtonProps } from 'antd/lib';
import { ActionCompletedSuccessIcon } from '../../assets/svg-images';
import './style.scss';

interface ActionCompletedProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  buttonProps?: ButtonProps;
}

export const ActionCompleted = ({
  isOpen,
  onClose,
  message,
  buttonProps,
}: ActionCompletedProps) => {
  return (
    <Modal
      className="regi-modal"
      open={isOpen}
      footer={null}
      onCancel={onClose}
      centered
    >
      <div className="regi-modal-wrap">
        <ActionCompletedSuccessIcon />
        <p>{message}</p>
        {buttonProps && (
          <Button {...buttonProps} ghost>
            {buttonProps.children}
          </Button>
        )}
      </div>
    </Modal>
  );
};
