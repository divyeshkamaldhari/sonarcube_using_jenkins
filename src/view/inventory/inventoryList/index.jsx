import React from 'react'
import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { actionViewIcon,  actionArchiveIcon } from "../../../assets/images";

const InventoryList = ({ inventoryLists,access, scope,navigate,handleDeleteAction,handleDeleteInventory}) => {
  const [data, setData] = useState([]);
    const columns = [
        { title: "No", dataIndex: "no" },
        { title: "Product ID", dataIndex: "productId" },
        {
          title: "Product Name",
          dataIndex: "productName",
        },
        { title: "SKU", dataIndex: "sku" },
        
        { title: "Weight(kg)", dataIndex: "weight" },
        
        { title: "Current Status", dataIndex: "currentStatus" },
        { title: "Total Count", dataIndex: "totalCount" },
        {
          title: "Action",
          dataIndex: "action",    
          render: (_, record) => (
            <div className="action_wrap">
                <Space>
              {access?.permissions?.includes("View") || scope === "Super_Admin" ? (
                <span
                  className="action-btn view-btn"
                  onClick={() => navigate(`/products/${record.key}`)}
                >
                  {actionViewIcon}
                </span>
              ) : (
                ""
              )}
              </Space>
              {access?.permissions?.includes("Archive") ||
              scope === "Super_Admin" ? (
                <span
                  className="action-btn delete-btn"
                  onClick={() =>handleDeleteAction(record,true)}
                >
                  {actionArchiveIcon}
                </span>
              ) : (
                ""
              )}
            </div>
          ),
        },
      ];
      useEffect(() => {
        let arr = [];
        if (inventoryLists?.length > 0) {
          inventoryLists?.forEach((ele, i) => {
            let obj = { ...ele };
            let subObj = {
              no: i + 1,
              key: obj?._id,
              productId: obj?._id,
              productName: obj?.productName,
              sku: obj?.sku,
              weight: obj?.weight,
              totalCount: obj?.stockCount,
              scanCount: obj?.scanCount,
            };
            arr.push({ ...subObj });
          });
        }
        setData([...arr]);
      }, [inventoryLists]);
  return (
    <Table
      columns={columns}
      dataSource={data}  
      pagination={{
        total: inventoryLists?.length,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        // pageSizeOptions: [ 25, 50, 100],
        pageSize:25,
      }}
    />
  );
}

export default InventoryList;