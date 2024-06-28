import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import productImage from "../../assets/images/png/Product.png";
import { Button, Col, Row, Table, message } from "antd";
import {
  archiveProduct,
  getSingleProductAction,
  updateProduct,
} from "../../store/actions/product";
import "./style.scss";
import { setActiveSidebarValue } from "../../store/slices/toggleStates";
import { viewDeleteIcon, viewEditIcon } from "../../assets/images";
import ProductCreateAndEditModal from "../product/productCreateAndEditModal";
import {
  analyteResidualColumn,
  cannabinoidsColumn,
  heavyMetalsColumn,
} from "../../components/common/array";
import DeleteProductModal from "../../components/modal/deleteModal/deleteProductModal";

const ProductView = ({ permissions, scope }) => {
  // For reducer
  const { productList } = useSelector((state) => state.product);
  //For dispatch all actions
  const dispatch = useDispatch();
  //For navigate
  const navigate = useNavigate();
  //For id
  const { id } = useParams();
  //For store product details
  const [productDetail, setProductDetail] = useState({});
  const [cannabinoids, setCannabinoids] = useState([]);
  const [analyteResidual, setAnalyteResidual] = useState([]);
  const [heavyMetals, setHeavyMetals] = useState([]);

  const [isDelete, setIsDelete] = useState(false);
  const [modalAction, setModalAction] = useState("");
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [template, setTemplate] = useState();

  const [formData, setFormData] = useState({
    productID: "",
    productName: "",
    productPrice: "",
    sku: "",
    category: "",
    weight: "",
    stockCount: "",
    date: "",
  });

  const [tableData, setTableData] = useState({
    tableData1: [],
    tableData2: [],
    tableData3: [],
  });

  //For find prodcut detail from product list
  useEffect(() => {
    setProductDetail(productList.find((product) => product._id === id));
    dispatch(
      setActiveSidebarValue({ name: "Product View", heading: "Product View" })
    );
  }, []);

  //For single product
  useEffect(() => {
    dispatch(getSingleProductAction(id?.split("+")[0])).then((res) => {
      setProductDetail(res?.payload);
    });
  }, [id]);

  useEffect(() => {
    if (productDetail?.cannabinoids?.length > 0) {
      let tempArray = [];
      productDetail?.cannabinoids?.forEach((ele, i) => {
        let obj = { ...ele };
        let subObj = {
          no: i + 1,
          key: i,
          analyte: obj?.analyte,
          loqpercent: obj?.loqpercent,
          lodpercent: obj?.lodpercent,
          resultpercent: obj?.resultpercent,
          resultquantity: obj?.resultquantity,
        };
        tempArray.push({ ...subObj });
      });
      setCannabinoids(tempArray);
    }
  }, [productDetail?.cannabinoids]);
  useEffect(() => {
    if (productDetail?.residualSolvents?.length > 0) {
      let tempArray = [];
      productDetail?.residualSolvents?.forEach((ele, i) => {
        let obj = { ...ele };
        let subObj = {
          no: i + 1,
          key: i,
          analyteResidual: obj?.analyteResidual,
          lodppm: obj?.lodppm,
          loqppm: obj?.loqppm,
          resultppm: obj?.resultppm,
        };
        tempArray.push({ ...subObj });
      });
      setAnalyteResidual(tempArray);
    }
  }, [productDetail?.residualSolvents]);

  useEffect(() => {
    if (productDetail?.heavyMetals?.length > 0) {
      let tempArray = [];
      productDetail?.heavyMetals?.forEach((ele, i) => {
        let obj = { ...ele };
        let subObj = {
          no: i + 1,
          key: i,
          analyteHeavy: obj?.analyteHeavy,
          lodppb: obj?.lodppb,
          loqppb: obj?.loqppb,
          resultpercentHeavy: obj?.resultpercentHeavy,
          resultquantityHeavy: obj?.resultquantityHeavy,
        };
        tempArray.push({ ...subObj });
      });
      setHeavyMetals(tempArray);
    }
  }, [productDetail?.heavyMetals]);

  const totalLodPercent = productDetail?.cannabinoids?.reduce((total, v) => {
    return total + parseFloat(v?.lodpercent);
  }, 0);
  const totalLoqPercent = productDetail?.cannabinoids?.reduce((total, v) => {
    return total + parseFloat(v?.loqpercent);
  }, 0);

  const customFooter1 = () => {
    return (
      <div
        className="product_table_footer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>Total</div>
          <div>{totalLodPercent} </div>
          <div> {totalLoqPercent}</div>
      </div>
    );
  };

  const customFooter2 = () => {
    return (
      <div className="pd_tfoot_bg" style={{ display: "flex" }}>
        <div>
          <span>NO =</span>
          <span> Not Detected</span>,
        </div>
        <div>
          <span>NT =</span>
          <span> Not Tested</span>,
        </div>
        <div>
          <span>LOD =</span>
          <span> Limit of Detection</span>,
        </div>
        <div>
          <span>LOQ =</span>
          <span> Limit of Quantitation</span>,
        </div>
        <div>
          <span> p =</span>
          <span> Pass</span>,
        </div>
        <div>
          <span>F =</span>
          <span> Fail</span>,
        </div>
        <div>
          <span>RL =</span>
          <span> Reporting Limit</span>
        </div>
      </div>
    );
  };

  //reset all state
  const resetStates = () => {
    setFormData({
      productID: "",
      productName: "",
      productPrice: "",
      sku: "",
      category: "",
      weight: "",
      stockCount: "",
      date: "",
    });
    setProductName("");
    setProductId("");
  };

  //for open modals click action
  const modalClickAction = (action, isOpen, data) => {
    resetStates();
    setModalAction(action);
    switch (action) {
      case "editProduct":
        setIsModal(isOpen);
        setProductId(data?._id);
        const obj = { ...formData };
        obj["productID"] = data?.productId;
        obj["productName"] = data?.productName;
        obj["productPrice"] = data?.productPrice;
        obj["sku"] = data?.sku;
        obj["delta9THC"] = data?.delta9THC;
        setTemplate(data?.category);
        obj["weight"] = data?.weight;
        obj["stockCount"] = data?.stockCount;
        obj["date"] = data?.createdAt;
        obj["test"] = data?.test;
        obj["testStatus"] = data?.testStatus;
        obj["testDate"] = data?.testDate?.slice(0, 10);
        obj["HHCAcetate"] = data?.HHCAcetate;
        obj["cannabinoidsPercent"] = data?.cannabinoidsPercent;
        obj["moistureContent"] = data?.moistureContent;
        obj["foreignMatter"] = data?.foreignMatter;
        obj["internalStandardNormalization"] =
          data?.internalStandardNormalization;
        obj["deliveryDate"] = data?.deliveryDate?.slice(0, 10);
        tableData.tableData1 = data?.cannabinoids;
        tableData.tableData2 = data?.residualSolvents;
        tableData.tableData3 = data?.heavyMetals;
        setFormData(obj);
        break;
      case "archiveProduct":
        setProductId(data?._id);
        setProductName(data?.productName);
        setIsDelete(isOpen);
        break;
      default:
        break;
    }
  };

  //modal confirmation action
  const dispatchAction = (action, data) => {
    switch (action) {
      case "editProduct":
        const formDetails = new FormData();
        formDetails.append("productId", formData.productID);
        formDetails.append("productName", formData.productName);
        formDetails.append("productPrice", formData.productPrice);
        formDetails.append("sku", formData.sku);
        formDetails.append("category", template);
        formDetails.append("weight", formData.weight);
        formDetails.append("stockCount", formData.stockCount);
        formDetails.append("test", formData.test);
        formDetails.append("testStatus", formData.testStatus);
        formDetails.append("testDate", formData.testDate);
        formDetails.append("delta9THC", formData.delta9THC);
        formDetails.append("HHCAcetate", formData.HHCAcetate);
        formDetails.append("cannabinoidsPercent", formData.cannabinoidsPercent);
        formDetails.append("moistureContent", formData.moistureContent);
        formDetails.append("foreignMatter", formData.foreignMatter);
        formDetails.append(
          "internalStandardNormalization",
          formData.internalStandardNormalization
        );
        formDetails.append(
          "cannabinoids",
          JSON.stringify(tableData?.tableData1)
        );
        formDetails.append(
          "residualSolvents",
          JSON.stringify(tableData?.tableData2)
        );
        formDetails.append("heavyMetals", JSON.stringify(tableData.tableData3));

        const payload = {
          id: productId,
          formData: formDetails,
        };
        dispatch(updateProduct(payload)).then((res) => {
          dispatch(getSingleProductAction(id)).then((res) => {
            setProductDetail(res?.payload);
          });
          message.success("Product updated successfully !");
          setTableData({ tableData1: [], tableData2: [], tableData3: [] });
          setIsModal(false);
        });
        break;
      case "archiveProduct":
        const archivePayload = {
          id: productId,
          isArchive: true,
        };
        dispatch(archiveProduct(archivePayload)).then((res) => {
          navigate("/products");
          setIsDelete(false);
        });
        break;
      default:
        break;
    }
  };

  //onChange event for add and edit modal fiels
  const onValuesChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  // On change of category
  const handleTemplateChange = (value) => {
    setTemplate(value);
  };

  // For remove table row
  const removeTableRow = (array, id) => {
    const tempArray1 = [...array.tableData1];
    const tempArray2 = [...array.tableData2];
    const tempArray3 = [...array.tableData3];

    const index1 = tempArray1.findIndex((v) => v.id === id);
    const index2 = tempArray2.findIndex((v) => v.id === id);
    const index3 = tempArray3.findIndex((v) => v.id === id);
    if (index1 !== -1) {
      tempArray1.splice(index1, 1);
      setTableData({ ...tableData, tableData1: tempArray1 });
    }
    if (index2 !== -1) {
      tempArray2.splice(index2, 1);
      setTableData({ ...tableData, tableData2: tempArray2 });
    }
    if (index3 !== -1) {
      tempArray3.splice(index1, 1);
      setTableData({ ...tableData, tableData3: tempArray3 });
    }
  };
  if (!permissions?.some((v) => v?.role === "products") && scope === "Admin") {
    return <Navigate to={`${permissions[0]?.role}`} />;
  }
  const access = permissions?.find((v) => v?.role === "products");

  return (
    productDetail && (
      <div className="product-details">
        <div className="product_header_wrap">
          <div className="header_title">
            <h1>welcome to product view</h1>
          </div>
          {id?.split("+")[1] !== "History" && (
            <div className="product_right_btns">
              {access?.permissions?.includes("Update") ||
              scope === "Super_Admin" ? (
                <span
                  className="pen_btn"
                  onClick={() =>
                    modalClickAction("editProduct", true, productDetail)
                  }
                >
                  {viewEditIcon}
                </span>
              ) : (
                ""
              )}
              {access?.permissions?.includes("Delete") ||
              scope === "Super_Admin" ? (
                <span
                  className="trash_btn"
                  onClick={() =>
                    modalClickAction("archiveProduct", true, productDetail)
                  }
                >
                  {viewDeleteIcon}
                </span>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        <div className="ps_header_sec">
          <div className="ps_header_wrap">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="ps_content_sec">
                      <div className="ps_title">Product ID</div>
                      <div className="ps_content">
                        {productDetail.productId}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="ps_content_sec">
                      <div className="ps_title">Product Name</div>
                      <div className="ps_content">
                        {productDetail.productName}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="ps_content_sec">
                      <div className="ps_title">Product Price</div>
                      <div className="ps_content">
                        {productDetail.productPrice}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="ps_content_sec">
                      <div className="ps_title">SKU</div>
                      <div className="ps_content">{productDetail.sku}</div>
                    </div>
                  </td>
                  <td>
                    <div className="ps_content_sec">
                      <div className="ps_title">Category</div>
                      <div className="ps_content">{productDetail.category}</div>
                    </div>
                  </td>
                  <td>
                    <div className="ps_content_sec">
                      <div className="ps_title">Created Date</div>
                      <div className="ps_content">
                        {productDetail?.createdAt?.slice(0, 10)}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="ps_content_sec">
                      <div className="ps_title">Last Modified Date</div>
                      <div className="ps_content">
                        {productDetail?.updatedAt?.slice(0, 10)}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="ps_summary_sec">
          <div className="ps_summary_wrap">
            <div className="ps_left_sec">
              <div className="ps_left_wrap">
                <h4 className="pd_main_title">Product Summary</h4>
                <div className="ps_image_sec">
                  <img src={productImage} alt="" />
                </div>
              </div>
              <div className="ps_right_wrap">
                <div className="ps_header_wrap ps_right_content">
                  <div className="ps_content_sec ps_sec1">
                    <div className="ps_title">Test</div>
                    <div className="ps_content">{productDetail.test}</div>
                  </div>

                  <div className="ps_content_sec ps_sec2">
                    <div className="ps_title">Status</div>
                    <div className="ps_content">{productDetail.testStatus}</div>
                  </div>

                  <div className="ps_content_sec ps_sec3">
                    <div className="ps_title">Date Tested</div>
                    <div className="ps_content">
                      {productDetail.testDate?.slice(0, 10)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ps_right_sec">
              <div className="ps_scanner_Sec">
                <div className="ps_scanner_wrap">
                  <div className="ps_scanner_left">
                    <div
                      style={{
                        height: "auto",
                        margin: "0 auto",
                        maxWidth: 64,
                        width: "100%",
                      }}
                    >
                      <QRCode
                        size={256}
                        style={{
                          height: "auto",
                          maxWidth: "100%",
                          width: "100%",
                        }}
                        value={`${
                          import.meta.env.VITE_APP_SERVICE_SCAN
                        }/options/${id}`}
                        viewBox={`0 0 256 256`}
                      />
                      {/* <QRCode
                        size={60}
                        type="canvas"
                        value={`${
                          import.meta.env.VITE_APP_SERVICE_SCAN
                        }/options/${id}`}
                      /> */}
                    </div>
                  </div>
                  <div className="ps_header_wrap ps_scanner_right">
                    <div className="ps_content_sec">
                      <div className="ps_title">Product License</div>
                      <div className="ps_content">Scan For License detail</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ps_summary_right">
          <div className="ps_header_wrap">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="ps_content_sec td_first">
                      <div className="ps_title">Total Δ9-THC</div>
                      <div className="ps_content">
                        {productDetail?.delta9THC
                          ? productDetail?.delta9THC
                          : "-"}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="ps_content_sec">
                      <div className="ps_title">(6aR,9R,10aR)-HHC acetate</div>
                      <div className="ps_content">
                        {productDetail?.HHCAcetate
                          ? productDetail?.HHCAcetate
                          : "-"}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="ps_content_sec">
                      <div className="ps_title">Total Cannabinoids</div>
                      <div className="ps_content">
                        {productDetail.cannabinoidsPercent}%
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="ps_content_sec">
                      <div className="ps_title">Moisture Content</div>
                      <div className="ps_content">
                        {productDetail?.moistureContent
                          ? productDetail?.moistureContent
                          : "-"}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="ps_content_sec">
                      <div className="ps_title">Foreign Matter</div>
                      <div className="ps_content">
                        {productDetail?.foreignMatter
                          ? productDetail?.foreignMatter
                          : "-"}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="ps_content_sec">
                      <div className="ps_title">
                        Internal Standard Normalization
                      </div>
                      <div className="ps_content">
                        {productDetail?.internalStandardNormalization
                          ? productDetail?.internalStandardNormalization
                          : "-"}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="product_table">
          <h4>Cannabinoids by HPLC-PDA, LC-MS/MS, and/or GC-MS/MS</h4>
          <Row gutter={16}>
            <Col span={16}>
              <Table
                dataSource={cannabinoids}
                columns={cannabinoidsColumn}
                // style={{ width: "1200px" }}
                pagination={false}
                footer={() => customFooter1()}
              />
            </Col>
          </Row>
          <h4>Residual Solvents by HS-GC-MS/MS</h4>
          <Row gutter={16}>
            <Col span={16}>
              <Table
                dataSource={analyteResidual}
                columns={analyteResidualColumn}
                // style={{ width: "1200px" }}
                pagination={false}
                className={"pt_rs"}
                footer={() => customFooter2()}
              />
            </Col>
          </Row>
          <h4>Heavy Metals by ICP-MS</h4>
          <Row gutter={16}>
            <Col span={16}>
              <Table
                dataSource={heavyMetals}
                columns={heavyMetalsColumn}
                // style={{ width: "1200px" }}
                pagination={false}
                className={"pt_rs"}
                footer={() => customFooter2()}
              />
            </Col>
          </Row>
        </div>
        {isModal && (
          <ProductCreateAndEditModal
            open={isModal}
            setOpen={setIsModal}
            formData={formData}
            setFormData={setFormData}
            onValuesChange={onValuesChange}
            modalAction={modalAction}
            dispatchAction={dispatchAction}
            template={template}
            setTemplate={setTemplate}
            handleTemplateChange={handleTemplateChange}
            tableData={tableData}
            removeTableRow={removeTableRow}
            setTableData={setTableData}
          />
        )}
        {isDelete && (
          <DeleteProductModal
            open={isDelete}
            setOpen={setIsDelete}
            modalAction={modalAction}
            dispatchAction={dispatchAction}
            descriptionTitle="Delete Product"
            description={`This ${productName} product will be moved to trash`}
          />
        )}
      </div>
    )
  );
};

export default ProductView;
