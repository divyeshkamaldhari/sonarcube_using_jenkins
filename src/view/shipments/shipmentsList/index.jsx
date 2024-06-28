import { Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { actionViewIcon, actionDeleteIcon } from "../../../assets/images";

const ShipmentsList = ({ modalClickAction, shipmentData, access, scope }) => {
  const [data, setData] = useState([]);

  const columns = [
    { title: "No", dataIndex: "no" },
    { title: "Product ID", dataIndex: "productId" },
    { title: "Product Name", dataIndex: "productName" },
    { title: "SKU", dataIndex: "sku" },
    { title: "Weight(kg)", dataIndex: "weight" },
    { title: "Current Status", dataIndex: "currentStatus" },
    { title: "Next Status", dataIndex: "nextStatus" },
    { title: "Total Count", dataIndex: "totalCount" },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div className="action_wrap">
          <Space>
            {access?.permissions?.includes("View") ||
            scope === "Super_Admin" ? (
              <span
                className="action-btn view-btn"
                onClick={() => modalClickAction("view", true, record)}
              >
                {actionViewIcon}
              </span>
            ) : (
              ""
            )}
          </Space>
        </div>
      ),
    },
  ];

  //For Current Status
  const handleCurrentStatus = (obj) => {
    if (obj?.lastScane === "Ware_house") {
      return "Ware house";
    } else if (obj?.lastScane === "Master_Distributor") {
      return "Master_Distributor";
    } else if (obj?.lastScane === "Sub_Distributor") {
      return "Sub_Distributor";
    } else if (obj?.lastScane === "Retailers") {
      return "Retailers";
    } else {
      return "Warehouse";
    }
  };
  //For Next Status
  const handleNextStatus = (obj) => {
    if (obj?.nextScane === "Master_Distributor") {
      return "Master Distributor";
    } else if (obj?.nextScane === "Sub_Distributor") {
      return "Sub_Distributor";
    } else if (obj?.nextScane === "Retailers") {
      return "Retailers";
    } else if (obj?.nextScane === "Customers") {
      return "Customers";
    } else {
      return "Master_Distributor";
    }
  };

  useEffect(() => {
    let arr = [];
    if (shipmentData?.length > 0) {
      shipmentData?.forEach((ele, i) => {
        let obj = { ...ele };
        let subObj = {
          no: i + 1,
          key: i + 1,
          productId: obj?._id,
          productName: obj?.productName,
          sku: obj?.sku,
          weight: obj?.weight,
          currentStatus: handleCurrentStatus(obj),
          nextStatus: handleNextStatus(obj),
          totalCount: obj?.stockCount,
          scanCount: obj?.scanCount,
        };
        arr.push({ ...subObj });
      });
    }
    setData([...arr]);
  }, [shipmentData]);
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        total: shipmentData?.length,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        // pageSizeOptions: [ 25, 50, 100],
        pageSize: 25,
      }}
    />
  );
};

export default ShipmentsList;
