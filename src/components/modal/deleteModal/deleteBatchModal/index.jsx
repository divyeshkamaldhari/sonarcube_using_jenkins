import { Button, Modal } from "antd";

const DeleteBatchModal = ({
  isOpen,
  setOpen,
  modalAction,
  dispatchAction,
  descriptionTitle,
  description,
}) => {
  // For close modal
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      title={descriptionTitle}
      footer={[
        <Button key="close" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          key="add"
          type="primary"
          onClick={() => dispatchAction(modalAction)}
        >
          Confirm
        </Button>,
      ]}
      width={500}
    >
      {description}
    </Modal>
  );
};
export default DeleteBatchModal;
