import { useState, useEffect } from "react";
import ShipmentsList from "./shipmentsList";
import ShipmentDrawer from "../../components/shipmentDrawer";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, searchProduct } from "../../store/actions/product";
import { Navigate } from "react-router-dom";
import { PATH_LIST } from "../../components/common/pathList";
import "./style.scss";
import { filterIcon, searchIcon } from "../../assets/images";
import HistoryList from "../product/historyList";
import { setActiveSidebarValue } from "../../store/slices/toggleStates";
import { getProductsHistory } from "../../store/actions/history";

const Shipments = ({ permissions, scope }) => {
  // For reducer
  const { productList } = useSelector((state) => state.product);
  const { loggedInUser } = useSelector((state) => state.auth);
  const { productHistoryList } = useSelector((state) => state.history);
  //For dispatch
  const dispatch = useDispatch();
  //For search
  const [search, setSearch] = useState("");
  //For shipment data
  const [shipmentData, setShipmentData] = useState([]);
  // For shipment history
  const [shipmentHistory, setShipmenthistory] = useState([]);
  //For shipment statua
  const [shipmentStatus, setShipmentStatus] = useState(false);
  //For shipment details
  const [shipmentDetails, setShipmentDetails] = useState({});

  // For active table

  const [activetable, setActivetable] = useState("Shipments");

  //For habnlde searrch
  const handleSearch = (query) => {
    setSearch(query);
    dispatch(searchProduct(query)).then((res) => {
      setShipmentData(res?.payload);
    });
  };
  //For handle modal action
  const modalClickAction = (action, isOpen, data) => {
    switch (action) {
      case "view":
        setShipmentStatus(isOpen);
        setShipmentDetails(data);
        break;
      default:
        break;
    }
  };
  //For close drawer
  const closeDrawer = () => {
    setShipmentStatus(false);
  };
  //For get all products
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductsHistory());
    dispatch(
      setActiveSidebarValue({
        name: "shipments",
        heading: "Shipment Management",
      })
    );
  }, []);
  //For store shipments data
  useEffect(() => {
    if (productList?.length > 0) {
      setShipmentData(productList);
    } else {
      setShipmentData([]);
    }
  }, [productList]);

  // For history data
  useEffect(() => {
    if (productHistoryList?.length > 0) {
      setShipmenthistory(productHistoryList);
    } else {
      setShipmenthistory([]);
    }
  }, [productHistoryList]);

  if (!permissions?.some((v) => v?.role === "shipments") && scope === "Admin") {
    return <Navigate to={`/${permissions[0]?.role}`} />;
  }

  const access = permissions?.find((v) => v?.role === "shipments");

  return (
    <div className="product_table">
      <div className="product_wrap">
        <div className="product_wrap_sec">
          <div className="product_left_wrap">
            <button
              className={`btn ${
                activetable === "Shipments" ? "blue_btn" : "border_btn"
              }`}
              onClick={() => {
                setActivetable("Shipments");
                dispatch(
                  setActiveSidebarValue({
                    name: "shipments",
                    heading: "Shipment Management",
                  })
                );
              }}
            >
              Current Shipment
            </button>
            <button
              className={`btn ${
                activetable === "History" ? "blue_btn" : "border_btn"
              }`}
              onClick={() => {
                setActivetable("History");
                dispatch(
                  setActiveSidebarValue({
                    name: "shipments",
                    heading: "Shipment History",
                  })
                );
              }}
            >
              History
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
              {filterIcon}
              Filter
            </button>
          </div>
        </div>
        <div className="product_table_sec">
          {activetable === "Shipments" ? (
            <ShipmentsList
              shipmentData={shipmentData}
              modalClickAction={modalClickAction}
              access={access}
              scope={scope}
            />
          ) : (
            <HistoryList historyData={shipmentHistory} />
          )}
        </div>
      </div>
      <div className="product_table_sec">
        <ShipmentDrawer
          shipmentStatus={shipmentStatus}
          closeDrawer={closeDrawer}
          shipmentDetails={shipmentDetails}
        />
      </div>
    </div>
  );
};

export default Shipments;
