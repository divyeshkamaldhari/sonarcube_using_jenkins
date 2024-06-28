import React, { useEffect, useState } from "react";
import HistoryList from "./historyList";
import ProductList from "./productList";
import ProductCreateAndEditModal from "./productCreateAndEditModal";
import { useDispatch, useSelector } from "react-redux";
import {
  archiveProduct,
  createProduct,
  getProducts,
  searchProduct,
  updateProduct,
} from "../../store/actions/product";
import { getProductsHistory } from "../../store/actions/history";

import "./style.scss";
import { setActiveSidebarValue } from "../../store/slices/toggleStates";
import { Navigate } from "react-router-dom";
import { message } from "antd";
import { filterIcon, plusIcon, searchIcon } from "../../assets/images";
import CreateBatchModal from "../../components/modal/createBatchModal";
import { getUsers } from "../../store/actions/user";
import {
  createBatch,
  deleteBatch,
  getAllBatchs,
  updateBatch,
} from "../../store/actions/batch";
import BatchList from "./batchList";
import DeleteBatchModal from "../../components/modal/deleteModal/deleteBatchModal";
import DeleteProductModal from "../../components/modal/deleteModal/deleteProductModal";
const Product = ({ permissions, scope }) => {
  //for reducer
  const { productList, loading } = useSelector((state) => state.product);
  const { productHistoryList } = useSelector((state) => state.history);
  const { loggedInUser } = useSelector((state) => state.auth);
  const { batchList } = useSelector((state) => state.batch);
  const { userList } = useSelector((state) => state.user);
  //for dispatch actions
  const dispatch = useDispatch();
  //for active table
  const [activetable, setActivetable] = useState("Product");
  //for search
  const [search, setSearch] = useState("");
  //for modal
  const [isModal, setIsModal] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isBatchModal, setIsBatchModal] = useState(false);
  const [isdeleteBatchModal, setIsDeleteBatchModal] = useState(false);
  //for store action
  const [modalAction, setModalAction] = useState("");
  //display product list
  const [productLists, setProductLists] = useState([]);

  //for listing history data
  const [historyProductData, setHistoryProductData] = useState([]);

  // For display batch list
  const [batchLists, setbatchLists] = useState([]);
  //store product id
  const [productId, setProductId] = useState("");
  //store batch id
  const [batchId, setBatchId] = useState("");
  //for store batch name
  const [batchName, setBatchName] = useState("");
  //store product Name
  const [productName, setProductName] = useState("");
  //store stock count
  const [stockCount, setStockCount] = useState(0);
  // For user options
  const [userOptions, setUserOptions] = useState([]);

  //For create batch
  const [createAction, setCreateAction] = useState("");

  //for add and edit modal
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    sku: "",
    category: "",
    weight: "",
    stockCount: "",
    date: "",
    test: "",
    testStatus: "",
    testDate: "",
    HHCAcetate: "",
    cannabinoidsPercent: "",
    moistureContent: "",
    deliveryDate: "",
    foreignMatter: "",
    internalStandardNormalization: "",
    cannabinoids: [],
    residualSolvents: [],
    heavyMetals: [],
  });

  // For batch add and edit
  const [batchDetails, setBatchDetails] = useState({
    productId: "",
    productName: "",
    sku: "",
    weight: 0,
    deliveryDate: "",
    productPrice: 0,
    stockCount: "",
    batchName: "",
    batchStockCount: "",
    assign_to: "",
  });

  //For show template cateory wise
  const [template, setTemplate] = useState("");
  //For store table data of template
  const [tableData, setTableData] = useState({
    tableData1: [],
    tableData2: [],
    tableData3: [],
  });

  //for call get product list api
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductsHistory());
    dispatch(getUsers());
    dispatch(getAllBatchs());
    dispatch(
      setActiveSidebarValue({ name: "products", heading: "Product Management" })
    );
  }, []);

  //store value component state
  useEffect(() => {
    if (productList?.length > 0) {
      setProductLists([...productList]);
    } else {
      setProductLists([]);
    }
  }, [productList]);

  //Store value of history product
  useEffect(() => {
    if (productHistoryList?.length > 0) {
      setHistoryProductData(productHistoryList);
    } else {
      setHistoryProductData([]);
    }
  }, [productHistoryList]);

  //Store value of batch
  useEffect(() => {
    if (batchList?.length > 0) {
      setbatchLists(batchList);
    } else {
      setbatchLists([]);
    }
  }, [batchList]);

  // On change of category
  const handleTemplateChange = (value) => {
    setTemplate(value);
  };

  //reset all state
  const resetStates = () => {
    setFormData({
      productName: "",
      productPrice: "",
      sku: "",
      category: "",
      weight: "",
      stockCount: "",
      date: "",
      test: "",
      testStatus: "",
      testDate: "",
      HHCAcetate: "",
      cannabinoidsPercent: "",
      moistureContent: "",
      deliveryDate: "",
      foreignMatter: "",
      internalStandardNormalization: "",
      cannabinoids: [],
      residualSolvents: [],
      heavyMetals: [],
    });
    setProductName("");
    setProductId("");
  };

  //for open modals click actiom
  const modalClickAction = (action, isOpen, data, createActionName) => {
    resetStates();

    setModalAction(action);
    switch (action) {
      case "addProduct":
        setIsModal(isOpen);
        setTemplate("");
        break;
      case "editProduct":
        setIsModal(isOpen);
        setProductId(data?.key);
        const obj = { ...formData };
        obj["productID"] = data.productId;
        obj["productName"] = data.productName;
        obj["productPrice"] = data?.productPrice;
        obj["sku"] = data.sku;
        obj["delta9THC"] = data.delta9THC;
        setTemplate(data.category);
        obj["weight"] = data.weight;
        obj["stockCount"] = data.stockCount;
        obj["date"] = data.createdDate;
        obj["test"] = data.test;
        obj["testStatus"] = data.testStatus;
        obj["testDate"] = data.testDate.slice(0, 10);
        obj["HHCAcetate"] = data.HHCAcetate;
        obj["cannabinoidsPercent"] = data.cannabinoidsPercent;
        obj["moistureContent"] = data.moistureContent;
        obj["foreignMatter"] = data.foreignMatter;
        obj["deliveryDate"] = data?.deliveryDate?.slice(0, 10);
        obj["internalStandardNormalization"] =
          data.internalStandardNormalization;
        tableData.tableData1 = data.cannabinoids;
        tableData.tableData2 = data.residualSolvents;
        tableData.tableData3 = data.heavyMetals;
        setFormData(obj);
        break;
      case "createBatch":
        setIsBatchModal(isOpen);
        setProductId(data?.productId);
        setBatchId(data?.batchId);
        setCreateAction(createActionName);
        if (createAction === "product") {
          const totalCount = batchLists
            ?.filter((v) => v?.createdFrom === data?.key)
            ?.reduce(
              (total, item) => (total || 0) + (item?.stockCount || 0),
              0
            );
          setStockCount(data?.stockCount - totalCount);
        } else {
          const totalCount = batchLists
            ?.filter((v) => v?.createdFrom === data?.key)
            ?.reduce(
              (total, item) => (total || 0) + (item?.stockCount || 0),
              0
            );
          setStockCount(data?.stockCount - totalCount);
        }
        batchDetails["productId"] = data?.key;
        batchDetails["productName"] = data?.productName;
        batchDetails["productPrice"] = data?.productPrice;
        batchDetails["sku"] = data?.sku;
        batchDetails["deliveryDate"] = data?.deliveryDate;
        batchDetails["stockCount"] = data?.stockCount;
        batchDetails["weight"] = data?.weight;
        batchDetails["assign_to"] = "";
        batchDetails["batchName"] = "";
        batchDetails["batchStockCount"] = "";
        setModalAction(action);
        const detailss = filterUser(loggedInUser);
        setUserOptions(detailss);
        break;
      case "editBatch":
          const singleProduct = productLists?.find(
          (v) => v?._id === data?.createdFrom
        );
        console.log('111111',singleProduct)
        const singleBatch = batchLists?.find(
          (v) => v?._id === data?.createdFrom
        );
        console.log('111111',singleBatch)
        console.log('data?.createdFrom',data?.createdFrom)
        const batchdata = batchLists
          ?.filter((v) => v?._id === data?.createdFrom)
          ?.reduce((total, item) => (total || 0) + (item?.stockCount || 0), 0);
        if (singleProduct) {
          setStockCount(singleProduct?.stockCount - batchdata);
        } else {
          setStockCount(singleBatch?.stockCount );
        }
        // setStockCount(data?. - batchdata);
        setIsBatchModal(isOpen);
        setBatchId(data?.key);
        setModalAction(action);
        setFormData(data);
        setProductId(data?.productId);
        const details = filterUser(loggedInUser);
        setUserOptions(details);
        batchDetails["productName"] = data?.productName;
        batchDetails["sku"] = data?.sku;
        batchDetails["weight"] = data?.weight;
        batchDetails["productPrice"] = data?.productPrice;
        batchDetails["deliveryDate"] = data.deliveryDate;
        batchDetails["batchName"] = data?.batchName;
        batchDetails["batchStockCount"] = data?.stockCount;
        batchDetails["assign_to"] = details?.find(
          (v) => v?.firstName === data?.assign_to
        )?._id;
        break;

      case "archiveProduct":
        setProductId(data?.key);
        setProductName(data?.productName);
        setIsDelete(isOpen);
        break;
      case "deleteBatch":
        setBatchId(data?.batchId);
        setBatchName(data?.batchName);
        setIsDeleteBatchModal(isOpen);
        setModalAction(action);
      default:
        break;
    }
  };
  //modal confirmation action
  const dispatchAction = (action, data) => {
    switch (action) {
      case "addProduct":
        const formDetail = new FormData();
        formDetail.append("category", template);
        // formDetail.append("productId", formData.productID);
        formDetail.append("productName", formData.productName);
        formDetail.append("productPrice", formData.productPrice);
        formDetail.append("sku", formData.sku);
        formDetail.append("weight", formData.weight);
        formDetail.append("stockCount", formData.stockCount);
        formDetail.append("test", formData.test);
        formDetail.append("testStatus", formData.testStatus);
        formDetail.append("testDate", formData.testDate);
        formDetail.append(
          "delta9THC",
          formData.delta9THC ? formData.delta9THC : ""
        );
        formDetail.append(
          "HHCAcetate",
          formData.HHCAcetate ? formData.HHCAcetate : ""
        );
        formDetail.append("cannabinoidsPercent", formData.cannabinoidsPercent);
        formDetail.append(
          "moistureContent",
          formData.moistureContent ? formData.moistureContent : ""
        );
        formDetail.append(
          "foreignMatter",
          formData.foreignMatter ? formData.foreignMatter : ""
        );
        formDetail.append("deliveryDate", formData.deliveryDate);
        formDetail.append(
          "internalStandardNormalization",
          formData.internalStandardNormalization
            ? formData.internalStandardNormalization
            : ""
        );
        formDetail.append(
          "cannabinoids",
          JSON.stringify(tableData?.tableData1)
        );
        formDetail.append(
          "residualSolvents",
          JSON.stringify(tableData?.tableData2)
        );
        formDetail.append("heavyMetals", JSON.stringify(tableData.tableData3));
        if (template) {
          dispatch(createProduct(formDetail))
            .then((res) => {
              const array = [...productLists];
              array?.push(res?.payload);
              setProductLists(array);
              setTableData({ tableData1: [], tableData2: [], tableData3: [] });
              setIsModal(false);
            })
            .catch(() => {
              setIsModal(false);
            });
        } else {
          message.error("Please select at least one category !");
        }

        break;
      case "editProduct":
        const formDetails = new FormData();
        // formDetails.append("productId", formData.productID);
        formDetails.append("productName", formData.productName);
        formDetails.append("productPrice", formData.productPrice);
        formDetails.append("sku", formData.sku);
        formDetails.append("category", template);
        formDetails.append("weight", formData.weight);
        formDetails.append("stockCount", formData.stockCount);
        formDetails.append("test", formData.test);
        formDetails.append("testStatus", formData.testStatus);
        formDetails.append("testDate", formData.testDate);
        formDetails.append(
          "delta9THC",
          formData.delta9THC ? formData.delta9THC : ""
        );
        formDetails.append(
          "HHCAcetate",
          formData.HHCAcetate ? formData.HHCAcetate : ""
        );
        formDetails.append("cannabinoidsPercent", formData.cannabinoidsPercent);
        formDetails.append(
          "moistureContent",
          formData.moistureContent ? formData.moistureContent : ""
        );
        formDetails.append(
          "foreignMatter",
          formData.foreignMatter ? formData.foreignMatter : ""
        );
        formDetails.append(
          "internalStandardNormalization",
          formData.internalStandardNormalization
            ? formData.internalStandardNormalization
            : ""
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
          const array = [...productLists];
          const Index = array.findIndex((v) => res?.payload?._id === v._id);
          array?.splice(Index, 1, res?.payload);
          setProductLists(array);
          message.success("Product updated successfully !");
          setTableData({ tableData1: [], tableData2: [], tableData3: [] });
          setIsModal(false);
        });
        break;
      case "createBatch":
        const payloadObj = {
          batchDetails: {
            batchName: data.batchName,
            stockCount: data.batchStockCount,
            assign_to: data.assign_to,
          },
          productId: productId,
          batchId: batchId,
          createdFrom: createAction,
        };

        dispatch(createBatch({ payloadObj })).then((res) => {
          const tempbatch = [...batchLists];
          const tempProductList = [...productLists];
          tempbatch.push(res?.payload?.data);
          setbatchLists(tempbatch);
          const index = tempProductList.findIndex(
            (v) => v?._id === res?.payload?.updatedProduct?._id
          );
          tempProductList?.splice(index, 1, res?.payload?.updatedProduct);
          setProductLists(tempProductList);
          setIsBatchModal(false);
        });
        break;
      case "editBatch":
        const payloadObjs = {
          batchDetails: {
            batchName: data.batchName,
            stockCount: data.batchStockCount,
            assign_to: data.assign_to,
          },
          productId: productId,
        };
        dispatch(updateBatch({ payloadObjs, batchId })).then((res) => {
          const tempbatchList = [...batchLists];
          const index = tempbatchList?.findIndex(
            (v) => v?._id === res?.payload?.data?._id
          );
          tempbatchList?.splice(index, 1, res?.payload?.data);
          setbatchLists(tempbatchList);
          setIsBatchModal(false);
        });
        break;
      case "archiveProduct":
        const archivePayload = {
          id: productId,
          isArchive: true,
        };
        dispatch(archiveProduct(archivePayload)).then((res) => {
          const array = [...productLists];
          const Index = array.findIndex((v) => res?.payload?._id === v?._id);
          array?.splice(Index, 1);
          setProductLists(array);
          setIsDelete(false);
        });
        break;
      case "deleteBatch":
        dispatch(deleteBatch({ batchId })).then((res) => {
          if (res?.error?.message === "Rejected") {
            message.error("You don't have access to delete this batch.");
          } else {
            const tempbatchList = [...batchLists];
            const index = tempbatchList?.findIndex(
              (v) => v?._id === res?.payload._id
            );
            tempbatchList?.splice(index, 1);
            setbatchLists(tempbatchList);
          }
          setIsDeleteBatchModal(false);
        });
        break;
      default:
        break;
    }
  };

  //for ptoduct and history search
  const handleSearch = (query) => {
    setSearch(query);
    dispatch(searchProduct(query)).then((res) => {
      setProductLists(res?.payload);
    });
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

  //onChange event for add and edit modal fiels
  const onValuesChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  // Filter user
  const filterUser = (loggedInUser) => {
    let data = [];
    switch (loggedInUser?.role) {
      case "Warehouse":
        return (data = userList?.filter(
          (user) => user?.role === "Master_Distributor"
        ));
      case "Master_Distributor":
        return (data = userList?.filter(
          (user) => user?.role === "Sub_Distributor"
        ));
      case "Sub_Distributor":
        return (data = userList?.filter((user) => user?.role === "Retailers"));
    }
  };

  //For stock Count error
  const handleStockCount = async (_, value) => {    
    if (!value) {
      throw new Error("Please enter stock count");
    }

    if(value==stockCount){
      throw new Error("You can't take stock equal to stock count")
    } 
    
    if (value > stockCount) {
      throw new Error(`You can't take stock count greater than ${stockCount} stock`);
    }
    
    if (value <= 0) {
      throw new Error("You can't take stock count less than Zero or Zero");
    }
  };

  if (!permissions?.some((v) => v?.role === "products") && scope === "Admin") {
    return <Navigate to={`/${permissions[0]?.role}`} />;
  }
  const access = permissions?.find((v) => v?.role === "products");

  // For active table
  const ActiveTable = (activetable) => {
    switch (activetable) {
      case "Product":
        return (
          <ProductList
            productLists={productLists}
            modalClickAction={modalClickAction}
            loading={loading}
            access={access}
            scope={scope}
            batchData={batchLists}
            setTemplate={setTemplate}
          />
        );
      case "History":
        return <HistoryList historyData={historyProductData} />;
      case "Batchs":
        return (
          <BatchList
            batchData={batchLists}
            modalClickAction={modalClickAction}
            modalAction={modalAction}
          />
        );
    }
  };
  return (
    <div className="product_table">
      <div className="product_wrap">
        <div className="product_wrap_sec">
          <div className="product_left_wrap">
            <button
              className={`btn ${
                activetable === "Product" ? "blue_btn" : "border_btn"
              }`}
              onClick={() => {
                setActivetable("Product");
                dispatch(
                  setActiveSidebarValue({
                    name: "products",
                    heading: "Product Management",
                  })
                );
              }}
            >
              Products
            </button>

            <button
              className={`btn ${
                activetable === "History" ? "blue_btn" : "border_btn"
              }`}
              onClick={() => {
                setActivetable("History");
                dispatch(
                  setActiveSidebarValue({
                    name: "products",
                    heading: "Product History",
                  })
                );
              }}
            >
              History
            </button>

            <button
              className={`btn ${
                activetable === "Batchs" ? "blue_btn" : "border_btn"
              }`}
              onClick={() => {
                setActivetable("Batchs");
                dispatch(
                  setActiveSidebarValue({
                    name: "products",
                    heading: "Batch Management",
                  })
                );
              }}
            >
              Batchs
            </button>
          </div>
          <div className="product_right_wrap">
            <div className="pr_btn">
              {searchIcon}
              <input
                className="product_input"
                type="text"
                placeholder="Search Product"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <button className="pr_btn product_filter">
              {filterIcon} Filter
            </button>
            {activetable === "Product" &&
              (access?.permissions?.includes("Create") ||
              scope === "Super_Admin" ? (
                <button
                  className="pr_btn add_new_btn"
                  onClick={() => modalClickAction("addProduct", true)}
                >
                  {plusIcon}
                  Add New Product
                </button>
              ) : (
                ""
              ))}
          </div>
        </div>
        <div className="product_table_sec">{ActiveTable(activetable)}</div>
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
      {isBatchModal && (
        <CreateBatchModal
          isOpen={isBatchModal}
          setIsOpen={setIsBatchModal}
          batchDetails={batchDetails}
          userOptions={userOptions}
          loggedInUser={loggedInUser}
          stockCount={stockCount}
          createAction={createAction}
          handleStockCount={handleStockCount}
          dispatchAction={dispatchAction}
          modalAction={modalAction}
          batchLists={batchLists}
        />
      )}
      {isDelete && (
        <DeleteProductModal
          open={isDelete}
          setOpen={setIsDelete}
          modalAction={modalAction}
          dispatchAction={dispatchAction}
          descriptionTitle="Delete Product"
          description={`The ${productName} product will be moved to trash.`}
        />
      )}
      {isdeleteBatchModal && (
        <DeleteBatchModal
          isOpen={isdeleteBatchModal}
          setOpen={setIsDeleteBatchModal}
          dispatchAction={dispatchAction}
          modalAction={modalAction}
          descriptionTitle="Delete Batch"
          description={`Are you sure you wan't  to delete ${batchName}. `}
        />
      )}
    </div>
  );
};

export default Product;
