// For route path
export const PATH_LIST = {
  admin: {
    dashboard: "/",
    products: "/products",
    product_view: "/products/:id",
    batchView: "products/batch/:id",
    shipments: "/shipments",
    inventory: "/inventory",
    marketing: "/marketing",
    scan: "/scan",
    user: "/user",
    trash: "/trash",
    settings: "/settings",
    login: "/login",
    pageNotFound: "*",
    rqCodeOption: "/options/:productId",
    batchQrCodeOptions: "batch/options/:batchId",
    certificate: "/certificate/:productId",
    promotion: "/promotion",
    dont_access: "/dontAccess",
  },
};
