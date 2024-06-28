import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import {
  Batchicon,
  actionDeleteIcon,
  actionEditIcon,
  actionViewIcon,
} from "../../../assets/images";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ChildBatchList from "./childBatchList";

const BatchList = ({ batchData, modalClickAction }) => {
  const { loggedInUser } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const tableColumn = [
    { title: "No", dataIndex: "no" },
    { title: "Batch ID", dataIndex: "batchId" },
    { title: "Batch Name", dataIndex: "batchName" },
    { title: "Assign to", dataIndex: "assign_to" },
    { title: "Porudct Id", dataIndex: "productId" },
    { title: "Product Name", dataIndex: "productName" },
    { title: "SKU", dataIndex: "sku" },
    { title: "Product Price", dataIndex: "productPrice" },
    { title: "Weight(kg)", dataIndex: "weight" },
    { title: "Delivery Date", dataIndex: "deliveryDate" },
    { title: "Stcok Count", dataIndex: "stockCount" },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="action_wrap">
          <span
            className="action-btn batch-btn"
            onClick={() => modalClickAction("createBatch", true, record)}
          >
            {Batchicon}
          </span>
          <span
            className="action-btn view-btn"
            onClick={() => navigate(`/products/batch/${record.key}`)}
          >
            {actionViewIcon}
          </span>
          <span
            className="action-btn edit-btn"
            onClick={() => modalClickAction("editBatch", true, record)}
          >
            {actionEditIcon}
          </span>
          <span
            className="action-btn delete-btn"
            onClick={() => modalClickAction("deleteBatch", true, record)}
          >
            {actionDeleteIcon}
          </span>
        </div>
      ),
    },
  ];

  //For child batch
  const handleChildBatch=(record,tableColumn)=>{
    const data=batchData?.filter(v=>v?.createdFrom===record?.key)  
    if(data?.length>0)  {
      return <ChildBatchList batchData={data} tableColumn={tableColumn} loggedInUser={loggedInUser}/>
    }
  }
  //for expandIcon
  const handleExpandIcon=({record,onExpand,expanded})=>{
    const data=batchData?.filter(v=>v?.createdFrom===record?.key)
    if(data?.length>0){
      return <Button onClick={()=>onExpand(record)}>{expanded?"-":"+"}</Button>
    }else{
      return null
    }    
  }
  //For set table data
  useEffect(() => {
    let arr = [];
    if (batchData?.length > 0) {
      batchData?.forEach((ele, i) => {
        let obj = { ...ele };
        let subObj = {
          no: i + 1,
          key: obj?._id,
          batchId: obj?._id,
          assign_to: obj?.assign_to?.find((v) => v?._id === loggedInUser?._id)?.firstName
            ? obj?.assign_to?.find((v) => v?._id === loggedInUser?._id)
                ?.firstName
            : obj?.assign_to[0]?.firstName,
          batchName: obj?.batchName,
          productId: obj?.productId,
          createdFrom: obj?.createdFrom,
          productName: obj?.productDetails?.productName,
          sku: obj?.productDetails?.sku,
          productPrice: obj.productDetails?.productPrice,
          weight: obj?.productDetails?.weight,
          deliveryDate: obj?.productDetails?.deliveryDate?.slice(0, 10),
          stockCount: obj?.stockCount,
        };
        arr.push({ ...subObj });
      });
    }
    setData([...arr]);
  }, [batchData]);
  return (
    <Table
      columns={tableColumn}
      dataSource={data}
      pagination={{
        total: batchData?.length,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        pageSize: 25,
      }}
      expandable={{
        expandedRowRender: (record) => handleChildBatch(record,tableColumn),
        expandIcon: ({ record,onExpand,expanded }) => handleExpandIcon({ record ,onExpand,expanded}),
        defaultExpandedRowKeys: ["0"],
      }}
    />
  );
};
export default BatchList;
