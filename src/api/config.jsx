// For Base url
const BASE_URL = import.meta.env.VITE_APP_SERVICE_URL;

// For api url
export const API_URL = {
  product: {
    create: `${BASE_URL}/product/createProduct`,
    get: `${BASE_URL}/product/getAllProducts`,
    getArchiveProduct: `${BASE_URL}/product/getArchiveProduct`,
    getSingleProduct: `${BASE_URL}/product/getSingleProduct`,
    scaneProduct: `${BASE_URL}/product/scaneProduct`,
    delete: `${BASE_URL}/product/deleteProduct`,
    update: `${BASE_URL}/product/updateProduct`,
    archive: `${BASE_URL}/product/archiveProduct`,
    unArchiveProduct: `${BASE_URL}/product/unArchiveProduct`,
    search: `${BASE_URL}/product/searchProduct`,
    searchArchiveProduct: `${BASE_URL}/product/searchArchiveProduct`,
  },
  user: {
    create: `${BASE_URL}/user/createUser`,
    get: `${BASE_URL}/user/getAllUsers`,
    getUserDetails: `${BASE_URL}/user/getUser`,
    delete: `${BASE_URL}/user/deleteUser`,
    update: `${BASE_URL}/user/updateUser`,
    search: `${BASE_URL}/user/searchUsers`,
    login: `${BASE_URL}/user/login`,
  },
  history: { productsHistory: `${BASE_URL}/history/getProductHistory` },
  batch: {
    create: `${BASE_URL}/batch/createBatch`,
    getAllBatch: `${BASE_URL}/batch/getAllBatch`,
    getSingleBatch: `${BASE_URL}/batch/getBatch`,
    update: `${BASE_URL}/batch/updateBatch`,
    scan: `${BASE_URL}/batch/scanBatch`,
    delete: `${BASE_URL}/batch/deleteBatch`,
  },
};
