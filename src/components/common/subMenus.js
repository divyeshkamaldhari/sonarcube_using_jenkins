import { PATH_LIST } from "./pathList";
import {
  dashboardIcon,
  productsIcon,
  shipmentIcon,
  inventoryIcon,
  marketingIcon,
  scanIcon,
  userIcon,
  settingIcon,
  trashIcon,
  logOutIcon,
} from "../../assets/images";

//Submenus for dashboard
export const subMenus = [
  {
    name: "Dashboard",
    path: PATH_LIST.admin.dashboard,
    icon: dashboardIcon,
    id: "dashboard",
    heading: "Dashboard",
  },
  {
    name: "Products",
    path: PATH_LIST.admin.products,
    icon: productsIcon,
    id: "products",
    heading: "Product Management",
  },
  {
    name: "Shipments",
    path: PATH_LIST.admin.shipments,
    icon: shipmentIcon,
    id: "shipments",
    heading: "Products Shipment",
  },
  {
    name: "Inventory",
    path: PATH_LIST.admin.inventory,
    icon: inventoryIcon,
    id: "inventory",
    heading: "Inventory",
  },
  {
    name: "Marketing",
    path: PATH_LIST.admin.marketing,
    icon: marketingIcon,
    id: "Marketing",
    heading: "Marketing",
  },
  {
    name: "Scan",
    path: PATH_LIST.admin.scan,
    icon: scanIcon,
    id: "Scan",
    heading: "Scan",
  },
  {
    name: "User",
    path: PATH_LIST.admin.user,
    icon: userIcon,
    id: "User",
    heading: "User Managment",
  },
  {
    name: "Trash",
    path: PATH_LIST.admin.trash,
    icon: trashIcon,
    id: "Trash",
    heading: "Trash",
  },
  {
    name: "Settings",
    path: PATH_LIST.admin.settings,
    icon: settingIcon,
    id: "settings",
    heading: "Settings",
  },
  { name: "Logout", icon: logOutIcon, id: "logout" },
];
