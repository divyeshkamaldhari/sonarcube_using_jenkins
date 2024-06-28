import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { actionViewIcon } from "../../../assets/images";
import { useNavigate } from "react-router-dom";

const HistoryList = ({ historyData }) => {
  const [data, setData] = useState([]);

  // For navigate
  const navigate = useNavigate();

  // For table coloumn
  const columns = [
    { title: "No", dataIndex: "no" },
    { title: "Product ID", dataIndex: "productId" },
    { title: "Product Name", dataIndex: "productName" },
    { title: "SKU", dataIndex: "sku" },
    { title: "Master Distri.", dataIndex: "masterDistri" },
    { title: "Sub Distri.", dataIndex: "subDistri" },
    { title: "Retailers", dataIndex: "retailers" },
    { title: "Consumer", dataIndex: "consumer" },
    { title: "Total Count", dataIndex: "totalCount" },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div>
          <span onClick={() => navigate(`/products/${record?.key}+History`)}>
            {actionViewIcon}
          </span>
        </div>
      ),
    },
  ];

  //For set table data
  useEffect(() => {
    let arr = [];
    if (historyData?.length > 0) {
      historyData?.forEach((ele, i) => {
        let obj = { ...ele };
        let subObj = {
          no: i + 1,
          key: obj?._id,
          productId: obj?._id,
          productName: obj?.productName,
          sku: obj?.sku,
          masterDistri: obj?.createdAt?.slice(0, 10),
          subDistri: obj?.createdAt?.slice(0, 10),
          retailers: obj?.createdAt?.slice(0, 10),
          consumer: obj?.createdAt?.slice(0, 10),
          totalCount: obj?.stockCount,
        };
        arr.push({ ...subObj });
      });
    }
    setData([...arr]);
  }, [historyData]);

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        total: historyData?.length,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        // pageSizeOptions: [ 25, 50, 100],
        pageSize:25,
      }}
    />
  );
};

export default HistoryList;
