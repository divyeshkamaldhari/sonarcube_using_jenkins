import { Button, Col, Form, Input, Row, Space, Table } from "antd";
import React, { useState } from "react";
import "./style.scss";

const WeedTemplate = ({
  form,
  onValuesChange,
  formData,
  tableData,
  setTableData,
  removeTableRow,
}) => {
  //For store data of cannabinoidsRow
  const [cannabinoidsRow, setCannabinoidsRow] = useState({
    analyte: "",
    loqpercent: "",
    lodpercent: "",
    resultpercent: "",
    resultquantity: "",
  });
  //For store data of residualRow
  const [residualRow, setResidualRow] = useState({
    analyteResidual: "",
    loqppm: "",
    lodppm: "",
    resultppm: "",
  });
  //For store data of heavyRow
  const [heavyRow, setHeavyRow] = useState({
    analyteHeavy: "",
    loqppb: "",
    lodppb: "",
    resultpercentHeavy: "",
    resultquantityHeavy: "",
  });

  const firstColumn = [
    {
      title: "Analyte",
      dataIndex: "analyte",
      key: "analyte",
    },
    {
      title: "LOD (%)",
      dataIndex: "lodpercent",
      key: "lodpercent",
    },
    {
      title: "LOQ (%)",
      dataIndex: "loqpercent",
      key: "loqpercent",
    },
    {
      title: "Result (%)",
      dataIndex: "resultpercent",
      key: "resultpercent",
    },
    {
      title: "Result (mg/g)",
      dataIndex: "resultquantity",
      key: "resultquantity",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => removeTableRow(tableData, record.id)}>
            -
          </Button>
        </Space>
      ),
    },
  ];

  const secondColumn = [
    {
      title: "Analyte",
      dataIndex: "analyteResidual",
      key: "analyteResidual",
    },
    {
      title: "LOD (%)",
      dataIndex: "lodppm",
      key: "lodppm",
    },
    {
      title: "LOQ (%)",
      dataIndex: "loqppm",
      key: "loqppm",
    },
    {
      title: "Result (ppm)",
      dataIndex: "resultppm",
      key: "resultppm",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => removeTableRow(tableData, record.id)}>
            -
          </Button>
        </Space>
      ),
    },
  ];

  const thirdColumn = [
    {
      title: "Analyte",
      dataIndex: "analyteHeavy",
      key: "analyte",
    },
    {
      title: "LOD (ppb)",
      dataIndex: "lodppb",
      key: "lodppb",
    },
    {
      title: "LOQ (ppb)",
      dataIndex: "loqppb",
      key: "loqppb",
    },
    {
      title: "Result (%)",
      dataIndex: "resultpercentHeavy",
      key: "resultpercentHeavy",
    },
    {
      title: "Result (mg/g)",
      dataIndex: "resultquantityHeavy",
      key: "resultquantityHeavy",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => removeTableRow(tableData, record.id)}>
            -
          </Button>
        </Space>
      ),
    },
  ];

  // For add  cannabinoidsRow
  const addcannabinoidsRow = () => {
    const hasValue = Object.values(cannabinoidsRow).some((value) => !!value);
    if (hasValue) {
      cannabinoidsRow.id = Math.random().toString(36).substring(7);
      cannabinoidsRow.key = cannabinoidsRow.id;

      setTableData({
        ...tableData,
        tableData1: [...tableData.tableData1, cannabinoidsRow],
      });
      setCannabinoidsRow([]);
      form.setFieldsValue({
        analyteCannabinoid: "",
        lodpercent: "",
        loqpercent: "",
        resultpercent: "",
        resultquantity: "",
      });
    }
  };

  // For add residualRow
  const addresidualRow = () => {
    const hasValue = Object.values(residualRow).some((value) => !!value);
    if (hasValue) {
      residualRow.id = Math.random().toString(36).substring(7);
      residualRow.key = residualRow.id;
      setTableData({
        ...tableData,
        tableData2: [...tableData.tableData2, residualRow],
      });
      setResidualRow([]);
      form.setFieldsValue({
        analyteResidual: "",
        lodppm: "",
        loqppm: "",
        resultppm: "",
      });
    }
  };

  // For add heavyRow
  const addheavyRow = () => {
    const hasValue = Object.values(heavyRow).some((value) => !!value);
    if (hasValue) {
      heavyRow.id = Math.random().toString(36).substring(7);
      heavyRow.key = heavyRow.id;
      setTableData({
        ...tableData,
        tableData3: [...tableData.tableData3, heavyRow],
      });
      setHeavyRow([]);
      form.setFieldsValue({
        analyteHeavy: "",
        lodppb: "",
        loqppb: "",
        resultpercentHeavy: "",
        resultquantityHeavy: "",
      });
    }
  };

  return (
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
        {/* <Col span={8}>
          <Form.Item
            name="productID"
            label="Product ID"
            rules={[{ required: true, message: "Please enter product id" }]}
          >
            <Input />
          </Form.Item>
        </Col> */}
        <Col span={8}>
          <Form.Item
            name="productName"
            label="Product Name"
            rules={[{ required: true, message: "Please enter product name" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            name="productPrice"
            label="Product Price"
            rules={[{ required: true, message: "Please enter product price" }]}
          >
            <Input type="number" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item
            name="sku"
            label="SKU"
            rules={[{ required: true, message: "Please enter sku" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name="weight"
            label="Weight(kg)"
            rules={[{ required: true, message: "Please enter weight" }]}
          >
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name="stockCount"
            label="Stock Count"
            rules={[{ required: true, message: "Please enter stock count" }]}
          >
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name="deliveryDate"
            label="Delivery Date"
            rules={[{ required: true, message: "Please enter delivery date" }]}
          >
            <Input type="date" min={new Date().toISOString().split("T")[0]} />
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
            <Input type="date" min={new Date().toISOString().split("T")[0]} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="delta9THC" label="Δ9-THC">
            <Input type="string" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="HHCAcetate" label="(6aR,9R,10aR)-HHC acetate">
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
          <Form.Item name="moistureContent" label="Moisture Content">
            <Input type="string" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="foreignMatter" label="Foreign Matter">
            <Input type="string" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="internalStandardNormalization"
            label="Internal Standard Normalization"
          >
            <Input type="string" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <h4>Cannabinoids by HPLC-PDA, LC-MS/MS, and/or GC-MS/MS</h4>
      </Row>
      <Row gutter={16}>
        <Col span={4}>
          <Form.Item name="analyteCannabinoid" label="Analyte">
            <Input
              type="string"
              onChange={(e) =>
                setCannabinoidsRow({
                  ...cannabinoidsRow,
                  analyte: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="lodpercent" label="LOD (%)">
            <Input
              type="string"
              onChange={(e) =>
                setCannabinoidsRow({
                  ...cannabinoidsRow,
                  lodpercent: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="loqpercent" label="LOQ (%)">
            <Input
              type="string"
              onChange={(e) =>
                setCannabinoidsRow({
                  ...cannabinoidsRow,
                  loqpercent: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="resultpercent" label="Result (%)">
            <Input
              type="string"
              onChange={(e) =>
                setCannabinoidsRow({
                  ...cannabinoidsRow,
                  resultpercent: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="resultquantity" label="Result (mg/g)">
            <Input
              type="string"
              onChange={(e) =>
                setCannabinoidsRow({
                  ...cannabinoidsRow,
                  resultquantity: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label=" ">
            <Button onClick={() => addcannabinoidsRow()}>Add Analyte</Button>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={16}>
          <Table
            dataSource={tableData.tableData1}
            columns={firstColumn}
            style={{ width: "1200px" }}
            pagination={false}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <h4>Residual Solvents by HS-GC-MS/MS</h4>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="analyteResidual" label="Analyte">
            <Input
              type="string"
              onChange={(e) =>
                setResidualRow({
                  ...residualRow,
                  analyteResidual: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="lodppm" label="LOD (ppm)">
            <Input
              type="string"
              onChange={(e) =>
                setResidualRow({ ...residualRow, lodppm: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="loqppm" label="LOQ (ppm)">
            <Input
              type="string"
              onChange={(e) =>
                setResidualRow({ ...residualRow, loqppm: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="resultppm" label="Result (ppm)">
            <Input
              type="string"
              onChange={(e) =>
                setResidualRow({ ...residualRow, resultppm: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label=" ">
            <Button onClick={() => addresidualRow()}>Add Analyte</Button>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Table
          dataSource={tableData.tableData2}
          columns={secondColumn}
          pagination={false}
          // style={{ width: "1000px" }}
        />
      </Row>
      <Row gutter={16}>
        <h4>Heavy Metals by ICP-MS</h4>
      </Row>
      <Row gutter={16}>
        <Col span={4}>
          <Form.Item name="analyteHeavy" label="Analyte">
            <Input
              type="string"
              onChange={(e) =>
                setHeavyRow({ ...heavyRow, analyteHeavy: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="lodppb" label="LOD (ppb)">
            <Input
              type="string"
              onChange={(e) =>
                setHeavyRow({ ...heavyRow, lodppb: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="loqppb" label="LOQ (ppb)">
            <Input
              type="string"
              onChange={(e) =>
                setHeavyRow({ ...heavyRow, loqppb: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="resultpercentHeavy" label="Result (%)">
            <Input
              type="string"
              onChange={(e) =>
                setHeavyRow({ ...heavyRow, resultpercentHeavy: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="resultquantityHeavy" label="Result (mg/g)">
            <Input
              type="string"
              onChange={(e) =>
                setHeavyRow({
                  ...heavyRow,
                  resultquantityHeavy: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label=" ">
            <Button onClick={() => addheavyRow()}>Add Analyte</Button>
          </Form.Item>
        </Col>
      </Row>
      <Row className="hm_table_footer" gutter={16}>
        <Col span={16}>
          <Table
            dataSource={tableData.tableData3}
            columns={thirdColumn}
            pagination={false}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default WeedTemplate;

/*
Template for weed, what fields I am keeping there
Universal:  Product Id, Product Name, SKU, Category, 
Product Summary: Test, Test Status, Date Tested
*/
