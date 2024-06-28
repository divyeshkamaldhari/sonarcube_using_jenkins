import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import {
  actionViewIcon,
  actionEditIcon,
  actionArchiveIcon,
  Batchicon,
} from "../../../assets/images";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useSelector } from "react-redux";
import BatchList from "../batchList";

const ProductList = ({
  productLists,
  modalClickAction,
  batchData,
  loading,
  setTemplate,
  access,
  scope,
}) => {
  const { loggedInUser } = useSelector((state) => state.auth);
  // For store product  data
  const [productData, setProductData] = useState([]);
  //For navigate
  const navigate = useNavigate();

  //for set product data
  useEffect(() => {
    let arr = [];
    if (productLists?.length > 0) {
      productLists?.forEach((ele, i) => {
        let obj = { ...ele };
        let subObj = {
          no: i + 1,
          key: obj._id,
          // productId: obj?.productId,
          productId: obj?._id,
          productName: obj?.productName,
          productPrice: obj?.productPrice,
          sku: obj?.sku,
          category: obj?.category,
          weight: obj?.weight,
          stockCount: obj?.stockCount,
          createdDate: obj?.createdAt?.slice(0, 10),
          lastModifiedDate: obj?.updatedAt?.slice(0, 10),
          test: obj?.test,
          testStatus: obj?.testStatus,
          testDate: obj?.testDate,
          delta9THC: obj?.delta9THC ? obj?.delta9THC : "",
          HHCAcetate: obj?.HHCAcetate ? obj?.HHCAcetate : "",
          cannabinoidsPercent: obj?.cannabinoidsPercent,
          moistureContent: obj?.moistureContent ? obj?.moistureContent : "",
          deliveryDate: obj?.deliveryDate,
          foreignMatter: obj?.foreignMatter ? obj?.foreignMatter : "",
          internalStandardNormalization: obj?.internalStandardNormalization
            ? obj?.internalStandardNormalization
            : "",
          cannabinoids: obj?.cannabinoids,
          residualSolvents: obj?.residualSolvents,
          heavyMetals: obj?.heavyMetals,
        };
        arr.push({ ...subObj });
      });
    }
    setProductData([...arr]);
  }, [productLists]);

  const productColumns = [
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
          {/* {access?.permissions?.includes("View") || scope === "Super_Admin" ? ( */}
          <span
            className="action-btn view-btn"
            onClick={() => navigate(`/products/${record.key}`)}
          >
            {actionViewIcon}
          </span>
          {/* ) : (
            ""
          )} */}
          {access?.permissions?.includes("Update") ||
          scope === "Super_Admin" ? (
            <span
              className="action-btn edit-btn"
              onClick={() => {
                modalClickAction("editProduct", true, record);
                setTemplate(record.category);
              }}
            >
              {actionEditIcon}
            </span>
          ) : (
            ""
          )}
          {/* {access?.permissions?.includes("Update") ||
          scope === "Super_Admin" ? ( */}
          <span
            className="action-btn batch-btn"
            onClick={() => {
              modalClickAction("createBatch", true, record, "product");
            }}
          >
            {Batchicon}
          </span>
          {/* ) : (
            ""
          )} */}
          {/* {access?.permissions?.includes("Archive") ||
          scope === "Super_Admin" ? ( */}
          <span
            className="action-btn delete-btn"
            onClick={() => modalClickAction("archiveProduct", true, record)}
          >
            {actionArchiveIcon}
          </span>
          {/* ) : (
            ""
          )} */}
        </div>
      ),
    },
  ];

  const handleBatchData = (record) => {
    const data = batchData?.filter((v) => v?.createdFrom === record?.key);
    if (data?.length > 0) {
      return <BatchList batchData={data} modalClickAction={modalClickAction} />;
    }
  };
  //For expand icon
  const handleExpandIcon = ({ record,onExpand ,expanded }) => {    
    const data = batchData?.filter((v) => v?.createdFrom === record?.key);
    if(data?.length>0){
      return <Button onClick={()=>onExpand(record)}>{expanded?"-":"+"}</Button>
    }else{
      return null
    }
  };

  return (
    <Table
      columns={productColumns}
      dataSource={productData}
      loading={loading}
      pagination={{
        total: productLists?.length,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        // pageSizeOptions: [25, 50, 100],
        pageSize: 25,
      }}
      expandable={{
        expandedRowRender: (record) => handleBatchData(record),
        expandIcon: ({ record,onExpand,expanded }) => handleExpandIcon({ record ,onExpand,expanded}),
        defaultExpandedRowKeys: ["0"],
      }}
    />
  );
};

export default ProductList;
