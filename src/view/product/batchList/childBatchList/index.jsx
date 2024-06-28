import { Table } from "antd";
import { useEffect } from "react";
import { useState } from "react";

const ChildBatchList = ({ batchData,tableColumn,loggedInUser }) => {
  const [data, setData] = useState([]);

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
          assign_to: obj?.assign_to?.find((v) => v?._id === loggedInUser?._id)
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
    />
  );
};
export default ChildBatchList;
