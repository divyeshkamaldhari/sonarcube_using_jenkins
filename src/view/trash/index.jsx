import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  deleteProduct,
  getArchiveProducts,
  searchArchiveProduct,
  unArchiveProduct,
} from "../../store/actions/product";
import ArchiveProductList from "./archiveProductList";
import { PATH_LIST } from "../../components/common/pathList";
import { Navigate, useNavigate } from "react-router-dom";
import { filterIcon, searchIcon } from "../../assets/images";
import { setActiveSidebarValue } from "../../store/slices/toggleStates";
import DeleteProductModal from "../../components/modal/deleteModal/deleteProductModal";
const Trash = ({ permissions, scope }) => {
  // For reducer
  const { archiveProductList, loading } = useSelector((state) => state.product);
  const { loggedInUser } = useSelector((state) => state.auth);
  // For dispatch actions
  const dispatch = useDispatch();
  //For store data
  const [archiveProductLists, setArchiveProductLists] = useState([]);
  //For store product id
  const [productID, setProductID] = useState("");
  //For store product name
  const [productName, setProductName] = useState("");
  //For modaol action
  const [modalAction, setModalAction] = useState("");
  //For modal
  const [isDelete, setIsDelete] = useState(false);
  // For search
  const [search, setSearch] = useState("");
  // For navigate
  const navigate = useNavigate();

  //For get archive data
  useEffect(() => {
    dispatch(getArchiveProducts());
    dispatch(
      setActiveSidebarValue({ name: "Trash", heading: "Trash Management" })
    );
  }, []);
  // For store data
  useEffect(() => {
    if (archiveProductList.length > 0) {
      setArchiveProductLists(archiveProductList);
    } else {
      setArchiveProductLists([]);
    }
  }, [archiveProductList]);

  const modalClickAction = (action, isOpen, data) => {
    switch (action) {
      case "unArchiveProduct":
        setIsDelete(isOpen);
        setModalAction(action);
        setProductName(data?.productName);
        setProductID(data?.key);
        break;
      case "deleteProduct":
        setIsDelete(isOpen);
        setModalAction(action);
        setProductID(data?.key);
        setProductName(data?.productName);
        break;
      default:
        break;
    }
  };
  const dispatchAction = (action, data) => {
    switch (action) {
      case "unArchiveProduct":
        const unArchiveProductpayload = {
          id: productID,
          isArchive: false,
        };
        dispatch(unArchiveProduct(unArchiveProductpayload)).then((res) => {
          const array = [...archiveProductLists];
          const Index = array.findIndex((v) => res?.payload?._id === v._id);
          array?.splice(Index, 1);
          setArchiveProductLists(array);
          setIsDelete(false);
        });

        break;
      case "deleteProduct":
        dispatch(deleteProduct(productID)).then((res) => {
          const array = [...archiveProductLists];
          const Index = array.findIndex((v) => res?.payload?._id === v._id);
          array?.splice(Index, 1);
          setArchiveProductLists(array);
          setIsDelete(false);
        });
        break;
      default:
        break;
    }
  };
  const handleSearch = (query) => {
    setSearch(query);
    dispatch(searchArchiveProduct(query)).then((res) => {
      setArchiveProductLists(res?.payload);
    });
  };

  if (!permissions?.some((v) => v?.role === "Trash") && scope === "Admin") {
    return <Navigate to={`/${permissions[0]?.role}`} />;
  }
  const access = permissions?.find((v) => v?.role === "Trash");
  return (
    <div className="product_table">
      <div className="product_wrap">
        <div className="product_wrap_sec">
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
        <ArchiveProductList
          loading={loading}
          archiveProductList={archiveProductLists}
          modalClickAction={modalClickAction}
          access={access}
          scope={scope}
        />
        {isDelete && (
          <DeleteProductModal
            open={isDelete}
            setOpen={setIsDelete}
            descriptionTitle={
              modalAction === "deleteProduct"
                ? "Delete Product."
                : "UnArchive Product."
            }
            description={
              modalAction === "deleteProduct"
                ? `This ${productName} product will be deleted permanently.`
                : `Are you sure you want to move ${productName} product in archive product.`
            }
            dispatchAction={dispatchAction}
            modalAction={modalAction}
          />
        )}
      </div>
    </div>
  );
};
export default Trash;
