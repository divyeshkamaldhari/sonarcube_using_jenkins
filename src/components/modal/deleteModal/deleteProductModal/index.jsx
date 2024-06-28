import { Button, Modal } from "antd";
import React from "react";

const DeleteProductModal = ({
  open,
  setOpen,
  modalAction,
  dispatchAction,
  descriptionTitle,
  description,
}) => {
  //for close modal
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onCancel={onClose}
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
      <h1>{descriptionTitle}</h1>
      <p>{description}</p>
    </Modal>
  );
};

export default DeleteProductModal;
