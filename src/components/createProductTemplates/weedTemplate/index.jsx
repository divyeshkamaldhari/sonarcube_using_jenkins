import { Button, Col, Form, Input, Row } from "antd";
import React from "react";

const WeedTemplate = ({ form, onValuesChange, formData }) => {
  return (
    <>
      <Form
        form={form}
        name="custom-form"
        layout="vertical"
        onValuesChange={onValuesChange}
        initialValues={formData}
      >
        {/* General details Section */}
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
        {/* Product summary Section */}
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
            <Form.Item
              name="delta9THC"
              label="Δ9-THC"
              // rules={[{ required: false, message: 'Please enter Total Δ9-THC' }]}
            >
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="HHCAcetate"
              label="(6aR,9R,10aR)-HHC acetate"
              // rules={[{ required: false, message: 'Please enter amount of (6aR,9R,10aR)-HHC acetate' }]}
            >
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="cannabinoidsPercent"
              label="Total Cannabinoids"
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
            <Form.Item
              name="moistureContent"
              label="Moisture Content"
              // rules={[{ required: false, message: 'Please enter Total Δ9-THC' }]}
            >
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="foreignMatter"
              label="Foreign Matter"
              // rules={[{ required: false, message: 'Please enter amount of (6aR,9R,10aR)-HHC acetate' }]}
            >
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="internalStandardNormalization"
              label="Internal Standard Normalization"
              // rules={[{ required: true, message: 'Please enter Total Cannabinoids Percentage' }]}
            >
              <Input type="string" />
            </Form.Item>
          </Col>
        </Row>

        {/* Chemical components Sections  */}

        <Row gutter={16}>
          <h4>Cannabinoids by HPLC-PDA, LC-MS/MS, and/or GC-MS/MS</h4>
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="moistureContent"
              label="Moisture Content"
              // rules={[{ required: false, message: 'Please enter Total Δ9-THC' }]}
            >
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="foreignMatter"
              label="Foreign Matter"
              // rules={[{ required: false, message: 'Please enter amount of (6aR,9R,10aR)-HHC acetate' }]}
            >
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="internalStandardNormalization"
              label="Internal Standard Normalization"
              // rules={[{ required: true, message: 'Please enter Total Cannabinoids Percentage' }]}
            >
              <Input type="string" />
            </Form.Item>
          </Col>
        </Row>

        {/* Section for chemical percent */}
        <Row gutter={16}>
          <h4>Cannabinoids by HPLC-PDA, LC-MS/MS, and/or GC-MS/MS</h4>
        </Row>
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item name="analyte" label="Analyte">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="lodpercent" label="LOD (%)">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="loqpercent" label="LOQ (%)">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="resultpercent" label="Result (%)">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="resultquantity" label="Result (mg/g)">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label=" ">
              <Button>Add Analyte</Button>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <h4>Residual Solvents by HS-GC-MS/MS</h4>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="analyte" label="Analyte">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="lodppm" label="LOD (ppm)">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="loqppm" label="LOQ (ppm)">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="resultppm" label="Result (ppm)">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label=" ">
              <Button>Add Analyte</Button>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <h4>Heavy Metals by ICP-MS</h4>
        </Row>
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item name="analyte" label="Analyte">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="lodppb" label="LOD (ppb)">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="loqppb" label="LOQ (ppb)">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="resultppb" label="Result ()">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="resultquantity" label="Result (mg/g)">
              <Input type="string" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label=" ">
              <Button>Add Analyte</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default WeedTemplate;

/*
Template for weed, what fields I am keeping there
Universal:  Product Id, Product Name, SKU, Category, 
Product Summary: Test, Test Status, Date Tested
*/
