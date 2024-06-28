import { Col, Form, Input, Modal, Row, Select } from "antd";
import { useState } from "react";

const CreateBatchModal = ({
  isOpen,
  setIsOpen,
  batchDetails,
  createAction,
  userOptions,
  loggedInUser,
  stockCount,
  handleStockCount,
  dispatchAction,
  modalAction,
  batchLists,
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={isOpen}
      onCancel={() => setIsOpen(!isOpen)}
      title={modalAction === "createBatch" ? "Create a batch" : "Update Batch"}
      okText={modalAction === "createBatch" ? "Create Batch" : "Update batch"}
      onOk={() =>
        form.validateFields().then((values) => {
          dispatchAction(modalAction, values, createAction ? "product" : "");
        })
      }
    >
      <div>
        <h2>General Product Details</h2>
        <div>
          <span>Product Name:</span>
          <span>{batchDetails?.productName}</span>
        </div>
        <div>
          <span>SKU:</span>
          <span>{batchDetails.sku}</span>
        </div>
        <div>
          <span>Price:</span>
          <span>{batchDetails.productPrice}</span>
        </div>
        <div>
          <span>Weight(kg):</span>
          <span>{batchDetails.weight}</span>
        </div>
        <div>
          <span>Delivery Date:</span>
          <span>{batchDetails?.deliveryDate?.slice(0, 10)}</span>
        </div>
        <div>
          <span>Stock Count:</span>
          <span>{stockCount}</span>
        </div>
        <Form layout="vertical" form={form} initialValues={batchDetails}>
          <Row gutter={16}>
            <Col span={16}>
              <Form.Item
                name="batchStockCount"
                label="Stock Count"
                rules={[
                  {
                    required: true,
                    validator: handleStockCount,
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item
                name="batchName"
                label="Batch Name"
                rules={[{ required: true, message: "Please enter batch name" }]}
              >
                <Input type="string" />
              </Form.Item>
            </Col>

            <Col span={16}>
              <Form.Item
                name="assign_to"
                label="Assign to user"
                rules={[
                  {
                    required: true,
                    message: "Please select at least one user",
                  },
                ]}
              >
                <Select placeholder="Select a user">
                  {userOptions?.map((user) => {
                    if (user?.role !== loggedInUser?.role) {
                      return (
                        <Select.Option key={user?._id} value={user?._id}>
                          {user?.firstName}
                        </Select.Option>
                      );
                    }
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};
export default CreateBatchModal;
