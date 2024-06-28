import React, { useEffect, useState } from "react";
import { Button, Card, Modal, message } from "antd";
import {
  certificateIcon,
  distributorIcon,
  promotionIcon,
  qrcodeLogo,
} from "../../assets/images";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer";
import { PATH_LIST } from "../../components/common/pathList";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleProductAction,
  scaneProductAction,
  updateProduct,
} from "../../store/actions/product";
import Geocode from "react-geocode";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Certificate from "../certificate";
import ProductCertificate from "../certificate/productCertificate";

import './style.scss';

const QrCodeOptions = () => {
  //For reducer
  const { productList } = useSelector((state) => state.product);

  //For dispatch
  const dispatch = useDispatch();

  //For navigate
  const navigate = useNavigate();

  //For product id
  const { productId } = useParams();

  //For user role
  const [userRole, setUserRole] = useState("");

  //For longitude
  const [longitude, setLongitude] = useState("");

  //For address
  const [adress, setAddress] = useState("");
  //For latitude
  const [latitude, setLatitude] = useState();

  // For pdf modal
  const [isPdf, setIsPdf] = useState(false);

  //For productdetail
  const [productDetail, setProductDetail] = useState({});
  const [record, setRecord] = useState([]);
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

  useEffect(() => {
    setUserRole(jwt_decode(localStorage.getItem("access_token")));

    if (productList.length) {
      setProductDetail(
        productList.find((product) => product._id === productId)
      );
    } else if (!productList.length) {
      dispatch(getSingleProductAction(productId)).then((res) =>
        setProductDetail(res.payload)
      );
    }
  }, []);

  useEffect(() => {
    if (Object.keys(productDetail).length !== 0) {
      setRecord([productDetail]);
    } else {
      console.log("empty object");
    }
  }, [productDetail]);
  // For date/time
  const date = new Date();

  // Extract date components
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // For latitude &longitude
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position?.coords?.latitude);
      setLongitude(position?.coords?.longitude);
    });
  }, []);

  // For handle redirect
  const handleRedirectPage = (action, role) => {
    const token = localStorage.getItem("access_token");
    switch (action) {
      case "certificate":
        if (token === null) {
          navigate(PATH_LIST.admin.login);
        } else {
          // navigate(`/certificate/${productId}`);
          // dispatch(getSingleProductAction(productId));
          setIsPdf(true);
        }
        break;
      case "promotion":
        navigate(PATH_LIST.admin.promotion);
        break;
      case "distributor":
        const isScannerExist = productDetail?.scanner_user?.some(
          (item) => item?._id === userRole?.userDataWithoutPassword?._id
        );
        if (isScannerExist) {
          message.error("You have already scanned this product !");
        } else if (
          productDetail?.scanner_user?.length === 0 &&
          userRole?.userDataWithoutPassword?.role === "Warehouse"
        ) {
          const nextScane = "Master_Distributor";
          const lastScane = "Warehouse";
          const scanCount = 1;
          scanneProduct(
            userRole?.userDataWithoutPassword?._id,
            productId,
            nextScane,
            lastScane,
            scanCount,
            "wareHouse_Checked"
          );
        } else {
          checkRole(userRole?.userDataWithoutPassword?.role, productId);
        }
        break;
      default:
        break;
    }
  };
  const checkRole = (role, productId) => {
    if (
      role === "Master_Distributor" &&
      productDetail?.nextScane === "Master_Distributor"
    ) {
      scanneProduct(
        userRole?.userDataWithoutPassword?._id,
        productId,
        "Sub_Distributor",
        "Master_Distributor",
        2,
        "Master_Distributor_Checked"
      );
    } else if (
      role === "Sub_Distributor" &&
      productDetail?.nextScane === "Sub_Distributor"
    ) {
      scanneProduct(
        userRole?.userDataWithoutPassword?._id,
        productId,
        "Retailers",
        "Sub_Distributor",
        3,
        "Sub_Distributor_Checked"
      );
    } else if (
      role === "Retailers" &&
      productDetail?.nextScane === "Retailers"
    ) {
      scanneProduct(
        userRole?.userDataWithoutPassword?._id,
        productId,
        "Customers",
        "Retailers",
        4,
        "Retailers_Checked"
      );
    } else if (
      role === "Customers" &&
      productDetail?.nextScane === "Customers"
    ) {
      scanneProduct(
        userRole?.userDataWithoutPassword?._id,
        productId,
        "",
        "Customers",
        5,
        "Customer_Checked"
      );
    } else {
      message.error(
        `${
          productDetail?.nextScane ? productDetail?.nextScane : "Warehouse"
        } not scanned yet this product.`
      );
    }
  };
  const scanneProduct = (
    userId,
    productId,
    nextScane,
    lastScane,
    scanCount,
    isChecked
  ) => {
    dispatch(
      scaneProductAction({
        userId,
        productId,
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
      <div className="qr_scan_header">
        <button className="ar_scan_btn" onClick={() => navigate("/products")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M10.7066 1.63556C10.894 1.82309 10.9993 2.0774 10.9993 2.34256C10.9993 2.60772 10.894 2.86203 10.7066 3.04956L5.75656 7.99956L10.7066 12.9496C10.8887 13.1382 10.9895 13.3908 10.9872 13.653C10.985 13.9152 10.8798 14.166 10.6944 14.3514C10.509 14.5368 10.2582 14.642 9.99596 14.6442C9.73376 14.6465 9.48116 14.5457 9.29256 14.3636L3.63556 8.70656C3.44809 8.51903 3.34277 8.26472 3.34277 7.99956C3.34277 7.7344 3.44809 7.48009 3.63556 7.29256L9.29256 1.63556C9.48009 1.44809 9.7344 1.34277 9.99956 1.34277C10.2647 1.34277 10.519 1.44809 10.7066 1.63556Z"
            fill="#C2C7CF"
          />
        </svg>
         <span><a href="#">Back to List</a></span></button>
        <div className="scan_logo"><span><a href="#">{qrcodeLogo}</a></span></div>
      </div>
      <div className="qr_code_section">  
        {options?.length > 0 &&
          options?.map((v, i) => {
            return (
              <div className="qr_code_wrap" key={v.action}>
                <Card
                  hoverable
                  style={{ width: 300 }}
                  cover={<span>{v?.icon}</span>}
                >
                  <h3>{v?.heading}</h3>
                  <p>{v?.description}</p>
                </Card>
                <Button
                className="scan_btn"
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
          <PDFViewer style={{width:'100vw'}}>
            <ProductCertificate productDetail={productDetail} />
          </PDFViewer>
          {/* <Button>
            <PDFDownloadLink
              document={<Certificate />}
              fileName={`${productDetail?.productName}.pdf`}
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

export default QrCodeOptions;
