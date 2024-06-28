import { Button, Col, Form, Input, Row } from "antd";
import FormItemLabel from "antd/es/form/FormItemLabel";
import React from "react";

const ElectronicsTemplate = ({ form, onValuesChange, formData }) => {
  return (
    <>
      <Form
        form={form}
        name="custom-form"
        layout="vertical"
        onValuesChange={onValuesChange}
        initialValues={formData}
      >
        <Row gutter={16}>
          <h4>Product General Details</h4>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="productID"
              label="Product ID"
              rules={[{ required: true, message: "Please enter product id" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="productName"
              label="Product Name"
              rules={[{ required: true, message: "Please enter product name" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="sku"
              label="SKU"
              rules={[{ required: true, message: "Please enter sku" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="weight"
              label="Weight(kg)"
              rules={[{ required: true, message: "Please enter weight" }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="stockCount"
              label="Stock Count"
              rules={[{ required: true, message: "Please enter stock count" }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <h4>Product Summary</h4>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="test"
              label="Test"
              rules={[{ required: true, message: "Please enter Test Name" }]}
            >
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="testStatus"
              label="Status"
              rules={[{ required: true, message: "Please enter status" }]}
            >
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="testDate"
              label="Test Date"
              rules={[{ required: true, message: "Please enter Test Date" }]}
            >
              <Input type="date" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="totalResistors" label="Total Resistors">
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="operationalAmplifier"
              label="Operational Amplifier"
            >
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="totalConductors"
              label="Total Conductors"
              rules={[
                {
                  required: true,
                  message: "Please enter Total Cannabinoids Percentage",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="flamabilityTest" label="Flamability Testing">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="semiconductor" label="Semi Conductor">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="safetyMeasuresCompletion"
              label="Safety Measures Completion"
            >
              <Input type="string" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <h4>Product Specifications/Information</h4>
        </Row>
        <Row gutter={16}>
          <Col span={10}>
            <Form.Item name="specKey" label="Specification Key">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item name="specValue" label="Specification Value">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label=" ">
              <Button>Add Specification</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ElectronicsTemplate;
