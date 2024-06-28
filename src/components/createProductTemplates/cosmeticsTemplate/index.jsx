import { Col, Form, Input, Row } from 'antd';
import React from 'react'

const CosmeticsTemplate = ({form, onValuesChange, formData}) => {
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
                rules={[{ required: true, message: 'Please enter product id' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="productName"
                label="Product Name"
                rules={[{ required: true, message: 'Please enter product name' }]}
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
                rules={[{ required: true, message: 'Please enter sku'}]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="weight"
                label="Weight(kg)"
                rules={[{ required: true, message: 'Please enter weight' }]}
              >
                <Input type='number'/>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="stockCount"
                label="Stock Count"
                rules={[{ required: true, message: 'Please enter stock count' }]}
              >
                <Input type='number'/>
              </Form.Item>
            </Col>
      </Row>
      {/* Products summary section */}
      <Row gutter={16}>
        <h4>Product Summary</h4>
      </Row>      
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="test"
            label="Test"
            rules={[{ required: true, message: 'Please enter Test Name' }]}
          >
            <Input type='string'/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="testStatus"
            label="Status"
            rules={[{ required: true, message: 'Please enter status' }]}
          >
            <Input type='string'/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="testDate"
            label="Test Date"
            rules={[{ required: true, message: 'Please enter Test Date' }]}
          >
            <Input type='date'/>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="waterPercemt"
            label="Water Percentage"
            rules={[{ required: true, message: 'Please enter water percentage'}]}
          >
            <Input type='number'/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="origin"
            label="Cosmetic Origin"            
          >
            <Input type='string'/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="preservativeStatus"
            label="Contains Preservatives"            
          >
            <Input type='string'/>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="flamableSubstances"
            label="Contains Flamable Substances"            
          >
            <Input type='string'/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="Allergens"
            label="Contains Allergens"            
          >
            <Input type='string'/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="skinHealthTest"
            label="Skin Health Test Completion"            
          >
            <Input type='string'/>
          </Form.Item>
        </Col>
      </Row>      
    </Form>
    </>
  )
}

export default CosmeticsTemplate;