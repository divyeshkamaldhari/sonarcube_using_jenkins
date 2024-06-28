import React from "react";
import { Button, Col, Form, Modal, Row, Select, Space } from "antd";
import WeedTemplate from "./productCategoryTemplates/weedTemplate";
import { options } from "./templateOptions";
import ElectronicsTemplate from "./productCategoryTemplates/electronicsTemplate";
import CosmeticsTemplate from "./productCategoryTemplates/cosmeticsTemplate";

const ProductCreateAndEditModal = ({
  open,
  setOpen,
  template,
  setTemplate,
  removeTableRow,
  handleTemplateChange,
  formData,
  setFormData,
  onValuesChange,
  modalAction,
  dispatchAction,
  tableData,
  setTableData,
}) => {
  const [form] = Form.useForm();

  //for modal close
  const onClose = () => {
    setOpen(false);
  };

  const templeteList = (action) => {
    switch (action) {
      case "weed":
        return (
          <WeedTemplate
            form={form}
            formData={formData}
            setFormData={setFormData}
            onValuesChange={onValuesChange}
            tableData={tableData}
            setTableData={setTableData}
            removeTableRow={removeTableRow}
          />
        );
      case "electronics":
        return (
          <ElectronicsTemplate
            form={form}
            formData={formData}
            onValuesChange={onValuesChange}
            tableData={tableData}
          />
        );
      case "cosmetics":
        return (
          <CosmeticsTemplate
            form={form}
            formData={formData}
            onValuesChange={onValuesChange}
            tableData={tableData}
          />
        );
      default:
      // return "Choose a Category";
    }
  };

  return (
    <Modal
      open={open}
      title={
        modalAction === "addProduct" ? "Add New Product" : "Update Product"
      }
      rootClassName="new_product_modal"
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          key="add"
          type="primary"
          onClick={() => {
            form.validateFields().then((values) => {
              setFormData(values);
              dispatchAction(modalAction);
            });
          }}
        >
          {modalAction === "addProduct" ? "Add Product" : "Update Product"}
        </Button>,
      ]}
      width={1500}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form>
            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true, message: "Please select category" }]}
            >
              <Space direction="vertical" style={{ width: "100%" }}>
                <Select
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  onChange={handleTemplateChange}
                  value={template}
                >
                  {options.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      {templeteList(template)}
    </Modal>
  );
};

export default ProductCreateAndEditModal;
