import React from "react";
import { Route, Routes } from "react-router-dom";
import { PATH_LIST } from "../components/common/pathList";
import Layout from "../view/layout";
import Dashboard from "../view/dashboard";
import Product from "../view/product";
import Shipments from "../view/shipments";
import Users from "../view/users";
import Login from "../view/login";
import PageNotFound from "../view/pageNotFound";
import ProductView from "../view/productView";
import Certificate from "../view/certificate";
import Trash from "../view/trash";
import { useSelector } from "react-redux";
import Marketing from "../view/marketing";
import Scan from "../view/scan";
import Settings from "../view/settings";
import DontAccess from "../view/dontAccess";
import Inventory from "../view/inventory";
import QrCodeOptions from "../view/qrCodeOptions";
import BatchView from "../view/batchView";
import BatchQrCodeOptions from "../view/qrCodeOptions/batchQrCodeOptions";

const RouterList = () => {
  const { loggedInUser } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route
        path={PATH_LIST.admin.dashboard}
        element={
          <Layout
            permissions={loggedInUser?.permissions}
            scope={loggedInUser?.scope}
          />
        }
      >
        <Route
          path={PATH_LIST.admin.dashboard}
          element={
            <Dashboard
              permissions={loggedInUser?.permissions}
              scope={loggedInUser?.scope}
            />
          }
        />
        <Route
          path={PATH_LIST.admin.products}
          element={
            <Product
              permissions={loggedInUser?.permissions}
              scope={loggedInUser?.scope}
            />
          }
        />
        <Route
          path={PATH_LIST.admin.product_view}
          element={
            <ProductView
              permissions={loggedInUser?.permissions}
              scope={loggedInUser?.scope}
            />
          }
        />
        <Route
          path={PATH_LIST.admin.batchView}
          element={
            <BatchView
              permissions={loggedInUser?.permissions}
              scope={loggedInUser?.scope}
            />
          }
        />
        <Route
          path={PATH_LIST.admin.shipments}
          element={
            <Shipments
              permissions={loggedInUser?.permissions}
              scope={loggedInUser?.scope}
            />
          }
        />
        <Route
          path={PATH_LIST.admin.trash}
          element={
            <Trash
              permissions={loggedInUser?.permissions}
              scope={loggedInUser?.scope}
            />
          }
        />
        <Route
          path={PATH_LIST.admin.user}
          element={
            <Users
              permission={loggedInUser?.permissions}
              scope={loggedInUser?.scope}
            />
          }
        />
        <Route
          path={PATH_LIST.admin.inventory}
          element={
            <Inventory
              permissions={loggedInUser?.permissions}
              scope={loggedInUser?.scope}
            />
          }
        />
        <Route
          path={PATH_LIST.admin.marketing}
          element={
            <Marketing
              permissions={loggedInUser?.permissions}
              scope={loggedInUser?.scope}
            />
          }
        />
        <Route
          path={PATH_LIST.admin.scan}
          element={
            <Scan
              permissions={loggedInUser?.permissions}
              scope={loggedInUser?.scope}
            />
          }
        />
        <Route
          path={PATH_LIST.admin.settings}
          element={<Settings />}
          scope={loggedInUser?.scope}
        />
      </Route>
      <Route path={PATH_LIST.admin.login} element={<Login />} />
      <Route path={PATH_LIST.admin.dont_access} element={<DontAccess />} />
      <Route path={PATH_LIST.admin.rqCodeOption} element={<QrCodeOptions />} />
      <Route
        path={PATH_LIST.admin.batchQrCodeOptions}
        element={<BatchQrCodeOptions />}
      />
      <Route path={PATH_LIST.admin.certificate} element={<Certificate />} />
      <Route path={PATH_LIST.admin.pageNotFound} element={<PageNotFound />} />
    </Routes>
  );
};

export default RouterList;
