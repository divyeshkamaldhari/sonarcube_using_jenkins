import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleBatch } from "../../store/actions/batch";
import QRCode from "react-qr-code";

const BatchView = () => {
  //For reducer
  const { batchList } = useSelector((state) => state.batch);
  //For dispatch actions
  const dispatch = useDispatch();
  //for naivgate
  const navigate = useNavigate();
  // For batch details
  const [batchDetails, setBatchDetails] = useState();
  // For get batch id
  const { id } = useParams();
  //   For store batch details
  useEffect(() => {
    setBatchDetails(batchList?.find((v) => v?._id === id));
  }, []);
  //For get single batch
  useEffect(() => {
    dispatch(getSingleBatch({ id })).then((res) => {
      setBatchDetails(res?.payload);
    });
  }, []);
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back to list</button>
      <h1>Welcome to batch view</h1>
      <div style={{ width: "100px" }}>
        <QRCode
          size={256}
          style={{
            height: "auto",
            maxWidth: "100%",
            width: "100%",
          }}
          value={`${import.meta.env.VITE_APP_SERVICE_SCAN}/batch/options/${id}`}
          viewBox={`0 0 256 256`}
        />
      </div>
      <div>
        <h2>Batch Details</h2>
        <div>
          <span>Batch Name:</span>
          <span>{batchDetails?.batchName}</span>
        </div>
        <div>
          <span>Batch Id:</span>
          <span>{batchDetails?._id}</span>
        </div>
        <div>
          <span>Assing To:</span>
          <span>{batchDetails?.assign_to[0]?.firstName}</span>
        </div>
        <div>
          <h2>Product Details</h2>

          <div>
            <span>Product Name:</span>
            <span>{batchDetails?.productDetails?.productName}</span>
          </div>
          <div>
            <span>SKU:</span>
            <span>{batchDetails?.productDetails?.sku}</span>
          </div>
          <div>
            <span>Price:</span>
            <span>{batchDetails?.productDetails?.productPrice}</span>
          </div>
          <div>
            <span>Weight(kg):</span>
            <span>{batchDetails?.productDetails?.weight}</span>
          </div>
          <div>
            <span>Delivery date:</span>
            <span>
              {batchDetails?.productDetails?.deliveryDate?.slice(0, 10)}
            </span>
          </div>
          <div>
            <span>Stock Count:</span>
            <span>{batchDetails?.productDetails?.stockCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BatchView;
