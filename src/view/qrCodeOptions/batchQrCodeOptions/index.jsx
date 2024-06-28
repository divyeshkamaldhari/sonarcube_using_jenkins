import { Button, Card, message } from "antd";
import {
  certificateIcon,
  distributorIcon,
  promotionIcon,
  qrcodeLogo,
} from "../../../assets/images";
import { useEffect, useState } from "react";
import { Footer } from "antd/es/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleBatch, scanBatchAction } from "../../../store/actions/batch";
import { PDFViewer } from "@react-pdf/renderer";
import Certificate from "../../certificate";

import jwt_decode from "jwt-decode";

const BatchQrCodeOptions = () => {
  const { batchList } = useSelector((state) => state.batch);
  //For dispatch
  const dispatch = useDispatch();
  //for pdf
  const [isPdf, setIsPdf] = useState(false);
  //For batch details
  const [batchDetails, setBatchDetails] = useState({});
  //For store user role
  const [userRole, setUserRole] = useState("");
  // For batchId
  const { batchId } = useParams();
  //For navigate
  const navigate = useNavigate();

  const options = [
    {
      icon: certificateIcon,
      heading: "View Certificate",
      description: "Click on continue View Product Certificate",
      action: "certificate",
    },
    {
      icon: promotionIcon,
      heading: "Product Promotion",
      description: "Click on continue for promotion of this product",
      action: "promotion",
    },
    {
      icon: distributorIcon,
      heading: "For Distributors",
      description: "Click on continue to track order and show travel count",
      action: "distributor",
    },
  ];

  // For store single batch data
  useEffect(() => {
    // setUserRole(jwtDecode(localStorage.getItem("access_token")));
setUserRole(jwt_decode(localStorage.getItem('access_token')))
    if (batchList.length > 0) {
      setBatchDetails(batchList.find((batch) => batch._id === batchId));
    } 
  }, []);

  useEffect(()=>{
dispatch(getSingleBatch({id:batchId})).then((res)=>{
  setBatchDetails(res?.payload)
})
  },[])

  //for handle redirect
  const handleRedirectPage = (action, role) => {
    const token = localStorage.getItem("access_token");
    switch (action) {
      case "certificate":
        if (token === null) {
          navigate(PATH_LIST.admin.login);
        } else {
          setIsPdf(true);
        }
        break;
      case "promotion":
        navigate(PATH_LIST.admin.promotion);
        break;
      case "distributor":
        const isScannerExist = batchDetails?.scanner_user?.some(
          (item) => item?._id === userRole?.userDataWithoutPassword?._id
        );

        if (isScannerExist) {
          message.error("You have already scanned this batch!");
        } else if (
          batchDetails?.scanner_user?.length === 0 &&
          userRole?.userDataWithoutPassword?.role === "Warehouse"
        ) {
          const nextScane = "Master_Distributor";
          const lastScane = "Warehouse";
          const scanCount = 1;
          scanneBatch(
            userRole?.userDataWithoutPassword?._id,
            batchId,
            nextScane,
            lastScane,
            scanCount,
            "wareHouse_Checked"
          );
        } else {
          checkRole(userRole?.userDataWithoutPassword?.role, batchId);
        }
        break;
      default:
        break;
    }
  };
  //For check role
  const checkRole = (role, batchId) => {
    if (
      role === "Master_Distributor" &&
      batchDetails?.nextScane === "Master_Distributor"
    ) {
      scanneBatch(
        userRole?.userDataWithoutPassword?._id,
        batchId,
        "Sub_Distributor",
        "Master_Distributor",
        2,
        "Master_Distributor_Checked"
      );
    } else if (
      role === "Sub_Distributor" &&
      batchDetails?.nextScane === "Sub_Distributor"
    ) {
      scanneBatch(
        userRole?.userDataWithoutPassword?._id,
        batchId,
        "Retailers",
        "Sub_Distributor",
        3,
        "Sub_Distributor_Checked"
      );
    } else if (
      role === "Retailers" &&
      batchDetails?.nextScane === "Retailers"
    ) {
      scanneBatch(
        userRole?.userDataWithoutPassword?._id,
        batchId,
        "Customers",
        "Retailers",
        4,
        "Retailers_Checked"
      );
    } else if (
      role === "Customers" &&
      batchDetails?.nextScane === "Customers"
    ) {
      scanneBatch(
        userRole?.userDataWithoutPassword?._id,
        batchId,
        "",
        "Customers",
        5,
        "Customer_Checked"
      );
    } else {
      message.error(
        `${
          batchDetails?.nextScane ? batchDetails?.nextScane : "Warehouse"
        } not scanned yet this batch.`
      );
    }
  };

  //For scan product
  const scanneBatch = (
    userId,
    batchId,
    nextScane,
    lastScane,
    scanCount,
    isChecked
  ) => {
    dispatch(
      scanBatchAction({
        userId,
        batchId,
        nextScane,
        lastScane,
        scanCount,
        isChecked,
      })
    ).then((res) => {
      navigate("/products");
    });
  };
  return (
    <div className="qr_code_options">
      <div>
        <button onClick={() => navigate("/products")}>Back to List</button>
        <span>{qrcodeLogo}</span>
      </div>
      <div>
        {options?.length > 0 &&
          options?.map((v, i) => {
            return (
              <div key={v.action}>
                <Card
                  hoverable
                  style={{ width: 300 }}
                  cover={<span>{v?.icon}</span>}
                >
                  <h3>{v?.heading}</h3>
                  <p>{v?.description}</p>
                </Card>
                <Button
                  onClick={() => {
                    handleRedirectPage(v?.action);
                  }}
                >
                  {v?.action}
                </Button>
              </div>
            );
          })}
      </div>
      {isPdf && (
        <div>
          <PDFViewer style={{width:'100vw',height:"100vh"}}>
            <Certificate batchDetails={batchDetails} />
          </PDFViewer>
          {/* <Button>
          <PDFDownloadLink
            document={<Certificate />}
            fileName={`${batchDetails?.productName}.pdf`}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
        </Button> */}
          <Button onClick={() => setIsPdf(!isPdf)}>Cancel</Button>
        </div>
      )}
      <Footer />
    </div>
  );
};
export default BatchQrCodeOptions;
