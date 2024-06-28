import React, { useEffect, useState } from "react";
import {
  createUser,
  deleteUser,
  getUsers,
  loggedInUser,
  searchUsers,
  updateUser,
} from "../../store/actions/user";
import { useDispatch, useSelector } from "react-redux";
import UserCreateAndEditModal from "./userCreateAndEditModal";
import UserList from "./userList";
import { PATH_LIST } from "../../components/common/pathList";
import { Navigate, useNavigate } from "react-router-dom";
import { plusIcon, searchIcon } from "../../assets/images";
import { message } from "antd";
import { setActiveSidebarValue } from "../../store/slices/toggleStates";
import DeleteProductModal from "../../components/modal/deleteModal/deleteProductModal";
const Users = ({ permission, scope }) => {
  //for reducer
  const { userList, loading } = useSelector((state) => state.user);
  const { loggedInUser } = useSelector((state) => state.auth);

  //for dispatch action
  const dispatch = useDispatch();

  //for user listing
  const [userLists, setUserLists] = useState([]);

  //for modal
  const [isModal, setIsModal] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [modalAction, setModalAction] = useState("");

  //store id and name for user
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  //for search
  const [search, setSearch] = useState("");
  const [permissions, setPermissions] = useState([]);

  //for add and edit modal
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    scope: "",
    email: "",
    password: "",
    permissions: [],
  });
  const navigate = useNavigate();

  //for call get product list api
  useEffect(() => {
    dispatch(getUsers());
    dispatch(
      setActiveSidebarValue({ name: "User", heading: "User Management" })
    );
  }, [dispatch]);

  //store value component state
  useEffect(() => {
    if (userList?.length > 0) {
      setUserLists([...userList]);
    } else {
      setUserLists([]);
    }
  }, [userList]);

  //reset all state
  const resetStates = () => {
    setFormData({
      firstName: "",
      lastName: "",
      role: "",
      scope: "",
      email: "",
      password: "",
      permissions: [],
    });
  };

  //for open modals click action
  const modalClickAction = (action, isOpen, data) => {
    resetStates();
    setModalAction(action);
    switch (action) {
      case "addUser":
        setIsModal(isOpen);
        break;
      case "editUser":
        setIsModal(isOpen);
        setUserId(data?.key);
        setPermissions(data?.permissions);
        const obj = { ...formData };
        obj["firstName"] = data.firstName;
        obj["lastName"] = data.lastName;
        obj["role"] = data.role;
        obj["scope"] = data.scope;
        obj["email"] = data.email;
        obj["password"] = data.password;
        obj["permissions"] = data?.permissions;
        setFormData(obj);
        break;
      case "deleteUser":
        setUserId(data?.key);
        setUserName(data?.firstName + " " + data.lastName);
        setIsDelete(isOpen);
        break;
      default:
        break;
    }
  };

  //modal confirmation action
  const dispatchAction = (action, options) => {
    switch (action) {
      case "addUser":
        dispatch(createUser(formData))
          .then((res) => {
            const array = [...userLists];
            array?.push(res?.payload);

            setUserLists(array);
            setIsModal(false);
          })
          .catch(() => {
            setIsModal(false);
          });
        break;
      case "editUser":
        const payload = {
          id: userId,
          formData: formData,
        };
        dispatch(updateUser(payload)).then((res) => {
          const array = [...userLists];
          const Index = array.findIndex((v) => res?.payload?._id === v._id);
          array?.splice(Index, 1, res?.payload);
          setUserLists(array);
          message.success("User updated successfully !");
          setIsModal(false);
        });
        break;
      case "deleteUser":
        dispatch(deleteUser(userId)).then((res) => {
          const array = [...userLists];
          const Index = array.findIndex((v) => res?.payload?._id === v._id);
          array?.splice(Index, 1);
          setUserLists(array);
          setIsDelete(false);
        });
        break;
      default:
        break;
    }
  };

  //for users search
  const handleSearch = (query) => {
    setSearch(query);
    dispatch(searchUsers(query)).then((res) => {
      setUserLists(res?.payload);
    });
  };

  //onChange event for add and edit modal fiels for users
  const onValuesChange = (changedValues, allValues) => {
    allValues["permissions"] = permissions;
    setFormData(allValues);
  };

  if (!permission?.some((v) => v?.role === "User") && scope === "Admin") {
    return <Navigate to={`/${permission[0]?.role}`} />;
  }

  const access = permission?.find((v) => v?.role === "User");
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
                placeholder="Search users"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            {access?.permissions?.includes("Create") ||
            scope === "Super_Admin" ? (
              <button
                className="pr_btn add_new_btn"
                onClick={() => modalClickAction("addUser", true)}
              >
                {plusIcon}
                Add New User
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="product_table_sec">
          <UserList
            userLists={userLists}
            modalClickAction={modalClickAction}
            loading={loading}
            access={access}
            scope={scope}
          />
        </div>
      </div>
      {isModal && (
        <UserCreateAndEditModal
          open={isModal}
          setOpen={setIsModal}
          formData={formData}
          setFormData={setFormData}
          onValuesChange={onValuesChange}
          modalAction={modalAction}
          dispatchAction={dispatchAction}
          permission={permission}
          permissions={permissions}
          setPermissions={setPermissions}
        />
      )}
      {isDelete && (
        <DeleteProductModal
          open={isDelete}
          setOpen={setIsDelete}
          modalAction={modalAction}
          dispatchAction={dispatchAction}
          descriptionTitle="Delete User"
          description={`Do you really want to delete ${userName} user?`}
        />
      )}
    </div>
  );
};

export default Users;
