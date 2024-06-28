import { Table } from "antd";
import { useEffect, useState } from "react";
import "./style.scss";
import {
  actionDeleteIcon,
  actionUnRchiveIcon,
  viewDeleteIcon,
} from "../../../assets/images";

const ArchiveProductList = ({
  archiveProductList,
  loading,
  modalClickAction,
  access,
  scope,
}) => {
  //For store data
  const [data, setData] = useState([]);

  useEffect(() => {
    let arr = [];
    if (archiveProductList?.length > 0) {
      archiveProductList?.forEach((ele, i) => {
        let obj = { ...ele };
        let subObj = {
          no: i + 1,
          key: obj._id,
          productId: obj?._id,
          productName: obj?.productName,
          sku: obj?.sku,
          category: obj?.category,
          weight: obj?.weight,
          stockCount: obj?.stockCount,
          createdDate: obj?.createdAt,
          lastModifiedDate: obj?.updatedAt,
          test: obj?.test,
          testStatus: obj?.testStatus,
          testDate: obj?.testDate,
          delta9THC: obj?.delta9THC,
          HHCAcetate: obj?.HHCAcetate,
          cannabinoidsPercent: obj?.cannabinoidsPercent,
          moistureContent: obj?.moistureContent,
          foreignMatter: obj?.foreignMatter,
          internalStandardNormalization: obj?.internalStandardNormalization,
          cannabinoids: obj?.cannabinoids,
          residualSolvents: obj?.residualSolvents,
          heavyMetals: obj?.heavyMetals,
        };
        arr.push({ ...subObj });
      });
    }
    setData([...arr]);
  }, [archiveProductList]);

  const columns = [
    { title: "No", dataIndex: "no" },
    { title: "Product ID", dataIndex: "productId" },
    {
      title: "Product Name",
      dataIndex: "productName",
      sorter: (a, b) => a.productName.localeCompare(b.productName),
    },
    { title: "SKU", dataIndex: "sku" },
    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.category.localeCompare(b.category),
    },
    { title: "Weight(kg)", dataIndex: "weight" },
    { title: "Stock Count", dataIndex: "stockCount" },
    { title: "Created Date", dataIndex: "createdDate" },
    { title: "Last Modified Date", dataIndex: "lastModifiedDate" },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div className="action_wrap">
          {access?.permissions?.includes("UnArchive") ||
          scope === "Super_Admin" ? (
            <span
              className="action-btn view-btn"
              onClick={() => modalClickAction("unArchiveProduct", true, record)}
              style={{ cursor: "default" }}
            >
              {actionUnRchiveIcon}
            </span>
          ) : (
            ""
          )}
          {access?.permissions?.includes("Delete") ||
          scope === "Super_Admin" ? (
            <span
             className="action-btn delete-btn"
              onClick={() => modalClickAction("deleteProduct", true, record)}
              style={{ cursor: "default" }}
            >
              {actionDeleteIcon}
            </span>
          ) : (
            ""
          )}
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={{
        total: archiveProductList?.length,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        // pageSizeOptions: [ 25, 50, 100],
        pageSize: 25,
      }}
    />
  );
};
export default ArchiveProductList;
