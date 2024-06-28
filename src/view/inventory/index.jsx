import InventoryList from "./inventoryList";
import { setActiveSidebarValue } from "../../store/slices/toggleStates";
import { filterIcon, searchIcon } from "../../assets/images";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { archiveProduct, getProducts } from "../../store/actions/product";
import { Navigate, useNavigate } from "react-router-dom";
import DeleteBatchModal from "../../components/modal/deleteModal/deleteBatchModal";

const Inventory = ({ permissions, scope }) => {
  //For reducer
  const { productList } = useSelector((state) => state.product); 

  //for dispatch actions
  const dispatch = useDispatch();
  //For navigate
  const navigate = useNavigate();
  //For store invenotryList
  const[invenotryLists,setInvenotryLists]=useState([])
  // For active table
  const [activetable, setActivetable] = useState("Active");
  // For search
  const [search, setSearch] = useState("");
  //For store inventory id
  const [inventoryId, setInventoryId] = useState("");
  //For store inventory name
  const [inventoryName, setInventoryName] = useState("");
  //For modal
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  //For get all products
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  //For store invenotryLists
  useEffect(()=>{
    if(productList?.length>0){
      setInvenotryLists(productList)
    }else[
      setInvenotryLists([])
    ]
  },[productList])


  if (!permissions?.some((v) => v?.role === "Inventory") && scope === "Admin") {
    return <Navigate to={`/${permissions[0]?.role}`} />;
  }

  const access = permissions?.find((v) => v?.role === "Inventory");

  //For handleDeleteAction inventory
  const handleDeleteAction = (record, isOpen) => {
    setInventoryId(record?.key);
    setInventoryName(record?.productName);
    setIsDeleteModal(isOpen);
  };

  //For delete inventory
  const handleDeleteInventory = () => {
    const archivePayload = {
      id: inventoryId,
      isArchive: true,
    };
    dispatch(archiveProduct(archivePayload)).then((res) => {
      const array = [...invenotryLists];
      const Index = array.findIndex((v) => res?.payload?._id === v?._id);
      array?.splice(Index, 1);
      setInvenotryLists(array);
      setIsDeleteModal(false);
    });
  };

  //For active table
  const ActiveTable = (activetable) => {
    switch (activetable) {
      case "Active":
        const activeIonventory = invenotryLists?.filter((v) => v?.scanCount !== 0);
        return (
          <InventoryList
            inventoryLists={activeIonventory}
            navigate={navigate}
            handleDeleteAction={handleDeleteAction}
            handleDeleteInventory={handleDeleteInventory}
            access={access}
            scope={scope}
          />
        );
      case "Non-active":
        const NonAtctiveIonventory = invenotryLists?.filter(
          (v) => v?.scanCount <= 0
        );
        return (
          <InventoryList
            inventoryLists={NonAtctiveIonventory}
            navigate={navigate}
            handleDeleteAction={handleDeleteAction}
            handleDeleteInventory={handleDeleteInventory}
            access={access}
            scope={scope}
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
                activetable === "Active" ? "blue_btn" : "border_btn"
              }`}
              onClick={() => {
                setActivetable("Active");
                dispatch(
                  setActiveSidebarValue({
                    name: "Inventory",
                    heading: "Inventory Management",
                  })
                );
              }}
            >
              Active
            </button>
            <button
              className={`btn ${
                activetable === "Non-active" ? "blue_btn" : "border_btn"
              }`}
              onClick={() => {
                setActivetable("Non-active");
                dispatch(
                  setActiveSidebarValue({
                    name: "Inventory",
                    heading: "Non Active",
                  })
                );
              }}
            >
              Non Active
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
              {filterIcon}Filter
            </button>
          </div>
        </div>
        <div className="product_table_sec">{ActiveTable(activetable)}</div>
        {isDeleteModal && (
          <DeleteBatchModal
            isOpen={isDeleteModal}    
            setOpen={setIsDeleteModal}
            descriptionTitle={"Delete Inventory."}
            description={`The ${inventoryName} will be move to trash.`}
            dispatchAction={handleDeleteInventory}
          />
        )}
      </div>
    </div>
  );
};
export default Inventory;
