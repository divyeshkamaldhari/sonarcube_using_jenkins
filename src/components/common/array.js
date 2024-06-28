//For user role
export const UserRoleList = [
  { value: "Warehouse", label: "Warehouse" },
  { value: "Master_Distributor", label: "Master Distributor" },
  { value: "Sub_Distributor", label: "Sub Distributor" },
  { value: "Retailers", label: "Retailers" },
  { value: "Customers", label: "Customers" },
];
//For user scope
export const UserScopeList = [{ value: "Admin", label: "Admin" }];

// For canabinoids column
export const cannabinoidsColumn = [
  {
    title: "Analyte",
    dataIndex: "analyte",
    key: "analyte",
  },
  {
    title: "LOD (%)",
    dataIndex: "lodpercent",
    key: "lodpercent",
  },
  {
    title: "LOQ (%)",
    dataIndex: "loqpercent",
    key: "loqpercent",
  },
  {
    title: "Result (%)",
    dataIndex: "resultpercent",
    key: "resultpercent",
  },
  {
    title: "Result (mg/g)",
    dataIndex: "resultquantity",
    key: "resultquantity",
  },
];

// For analyt Column
export const analyteResidualColumn = [
  {
    title: "Analyte",
    dataIndex: "analyteResidual",
    key: "analyteResidual",
  },
  {
    title: "LOD (%)",
    dataIndex: "lodppm",
    key: "lodppm",
  },
  {
    title: "LOQ (%)",
    dataIndex: "loqppm",
    key: "loqppm",
  },
  {
    title: "Result (ppm))",
    dataIndex: "resultppm",
    key: "resultppm",
  },
];

// For heavymetals Column
export const heavyMetalsColumn = [
  {
    title: "Analyte",
    dataIndex: "analyteHeavy",
    key: "analyte",
  },
  {
    title: "LOD (ppb)",
    dataIndex: "lodppb",
    key: "lodppb",
  },
  {
    title: "LOQ (ppb)",
    dataIndex: "loqppb",
    key: "loqppb",
  },
  {
    title: "Result (%)",
    dataIndex: "resultpercentHeavy",
    key: "resultpercentHeavy",
  },
  {
    title: "Result (mg/g)",
    dataIndex: "resultquantityHeavy",
    key: "resultquantityHeavy",
  },
];

// Permissions Roles
export const roles = ["products", "shipments", "User", "Trash"];



export const StaticData = [
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
    {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "6514018a266ec40a6bc959ba",
    "scanner_user": [],
    "productId": "undefined",
    "productName": "New onep",
    "sku": "#52365",
    "category": "weed",
    "weight": 3453,
    "stockCount": 350,
    "test": "hfgh",
    "testStatus": "fgh",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "ND",
    "HHCAcetate": "ND",
    "cannabinoidsPercent": 94.3,
    "moistureContent": "ND",
    "foreignMatter": "Not tested",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "CBSV",
        "lodpercent": "0.0036",
        "loqpercent": "0.0041",
        "resultpercent": "0.0005",
        "resultquantity": "ND",
        "id": "94qgg",
        "key": "94qgg"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Acetone",
        "loqppm": "500",
        "lodppm": "167",
        "resultppm": "ND",
        "id": "jyao9m",
        "key": "jyao9m"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "14",
        "loqppm": "53",
        "resultppm": "ND",
        "id": "0ubae5a",
        "key": "0ubae5a"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Lead",
        "loqppb": "20",
        "lodppb": "3",
        "resultpercentHeavy": "ND",
        "resultquantityHeavy": "ND",
        "id": "85dqcf",
        "key": "85dqcf"
      },
      {
        "analyteHeavy": "Mercury",
        "loqppb": "11",
        "lodppb": "10",
        "resultpercentHeavy": "yes",
        "resultquantityHeavy": "Yes",
        "id": "mb4ocq",
        "key": "mb4ocq"
      },
      {
        "analyteHeavy": "Cadmium",
        "loqppb": "11",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "No",
        "id": "t3gv6w",
        "key": "t3gv6w"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-05T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:18:50.997Z",
    "updatedAt": "2023-10-09T10:11:38.084Z",
    "__v": 0,
    "productPrice": "1200"
  },
  {
    "_id": "65140365eb365096dd9ef1b5",
    "scanner_user": [],
    "productId": "262",
    "productName": "jtf",
    "sku": "jhgh",
    "category": "weed",
    "weight": 2,
    "stockCount": 2,
    "test": "kghcghch",
    "testStatus": "kghcghkchc",
    "testDate": "2023-09-27T00:00:00.000Z",
    "delta9THC": "",
    "HHCAcetate": "",
    "cannabinoidsPercent": 1,
    "moistureContent": "",
    "foreignMatter": "",
    "internalStandardNormalization": "",
    "cannabinoids": [],
    "residualSolvents": [],
    "heavyMetals": [],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-09-29T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:26:45.891Z",
    "updatedAt": "2023-10-10T05:49:12.063Z",
    "__v": 0
  },
  {
    "_id": "65140a8aebbbdfba086baddd",
    "scanner_user": [],
    "productId": "12345",
    "productName": "weed DB",
    "productPrice": "1500",
    "sku": "jhg",
    "category": "weed",
    "weight": 2,
    "stockCount": 4,
    "test": "ssd",
    "testStatus": "fsdd",
    "testDate": "2023-09-28T00:00:00.000Z",
    "delta9THC": "dsd",
    "HHCAcetate": "dcsd",
    "cannabinoidsPercent": 2,
    "moistureContent": "",
    "foreignMatter": "",
    "internalStandardNormalization": "",
    "cannabinoids": [],
    "residualSolvents": [],
    "heavyMetals": [],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-09-27T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-09-27T10:57:14.870Z",
    "updatedAt": "2023-10-10T05:49:12.689Z",
    "__v": 0
  },
  {
    "_id": "651aaebef0631a027c536faf",
    "scanner_user": [],
    "productId": "323424",
    "productName": "product2",
    "sku": "3424",
    "category": "weed",
    "weight": 234,
    "stockCount": 7000,
    "test": "23424",
    "testStatus": "432",
    "testDate": "2023-10-12T00:00:00.000Z",
    "delta9THC": "",
    "HHCAcetate": "",
    "cannabinoidsPercent": 434,
    "moistureContent": "",
    "foreignMatter": "",
    "internalStandardNormalization": "",
    "cannabinoids": [],
    "residualSolvents": [],
    "heavyMetals": [],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-04T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-10-02T11:51:26.442Z",
    "updatedAt": "2023-10-10T04:21:44.399Z",
    "__v": 0,
    "productPrice": "1197"
  },
  {
    "_id": "651e8bf48a185ac606af42da",
    "scanner_user": [
      {
        "_id": "650ab4405b1787a347d8b55b",
        "firstName": "Henry",
        "lastName": "atar",
        "email": "henrytesting1@gmail.com",
        "password": "$2a$10$PXgL96x66.GMEx6n/PjJwetMQJkYlh5OYWEknG.U.5t1LBIwQNnc.",
        "role": "Warehouse",
        "scope": "Admin",
        "createdAt": "2023-09-20T08:58:40.078Z",
        "updatedAt": "2023-10-03T08:46:58.969Z",
        "__v": 0,
        "permissions": [
          {
            "role": "products",
            "permissions": [
              "View"
            ]
          }
        ]
      },
      {
        "_id": "650acffd5b1787a347d8b736",
        "firstName": "Jian",
        "lastName": "sharp",
        "email": "jiantesting1@gmail.com",
        "password": "$2a$10$yDPYhpTD8yEfVI6of3NMwumA7Hox00PLyX/bKC7lZOvOA429AfQ1.",
        "role": "Master_Distributor",
        "scope": "Admin",
        "createdAt": "2023-09-20T10:57:01.212Z",
        "updatedAt": "2023-09-29T12:45:51.652Z",
        "__v": 0,
        "permissions": [
          {
            "role": "products",
            "permissions": [
              "View"
            ]
          }
        ]
      },
      {
        "_id": "650ad0895b1787a347d8b73c",
        "firstName": "webdev",
        "lastName": "test",
        "email": "webdev3514@gmail.com",
        "password": "$2a$10$4Cy4Dy6y1GDi/0l0t2mKOOPoFps6Tw5/p6DpTC6iXD6moqHMM/iGK",
        "role": "Sub_Distributor",
        "scope": "Admin",
        "createdAt": "2023-09-20T10:59:21.932Z",
        "updatedAt": "2023-09-29T12:53:41.730Z",
        "__v": 0,
        "permissions": [
          {
            "role": "products",
            "permissions": [
              "View"
            ]
          }
        ]
      },
      {
        "_id": "65141c7d266ec40a6bc95afb",
        "firstName": "gerg",
        "lastName": "test",
        "email": "gergtesting1@gmail.com",
        "password": "$2a$10$sTE4Uma74ihsDQSLj0ikuuLXxKYOC6OI0F17VHxhmQIgS9dYBaO/K",
        "role": "Retailers",
        "scope": "Admin",
        "permissions": [
          {
            "role": "products",
            "permissions": [
              "View"
            ]
          }
        ],
        "createdAt": "2023-09-27T12:13:49.825Z",
        "updatedAt": "2023-10-09T10:13:40.357Z",
        "__v": 0
      }
    ],
    "creater": [
      "64ed87e7b699ba2d8025f14c"
    ],
    "productName": "Test Product1",
    "productPrice": "120",
    "sku": "PD-001",
    "category": "weed",
    "weight": 30,
    "stockCount": 45,
    "test": "Yes",
    "testStatus": "Tested",
    "testDate": "2023-10-05T00:00:00.000Z",
    "delta9THC": "Yes",
    "HHCAcetate": "Yes",
    "cannabinoidsPercent": 10,
    "moistureContent": "Yes",
    "foreignMatter": "Yes",
    "internalStandardNormalization": "Yes",
    "cannabinoids": [
      {
        "analyte": "BBC",
        "loqpercent": "0.06",
        "lodpercent": "0.098",
        "resultpercent": "Yes",
        "resultquantity": "Yes",
        "id": "ixwje5",
        "key": "ixwje5"
      },
      {
        "analyte": "AAA",
        "lodpercent": "0.09",
        "loqpercent": "0.07",
        "resultpercent": "Yes",
        "resultquantity": "Yes",
        "id": "hxm77",
        "key": "hxm77"
      },
      {
        "analyte": "DCA",
        "lodpercent": "0.05",
        "loqpercent": "0.05",
        "resultpercent": "Yes",
        "resultquantity": "Yes",
        "id": "l5jp29",
        "key": "l5jp29"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "Butane",
        "loqppm": "20",
        "lodppm": "10",
        "resultppm": "Yes",
        "id": "apd9cw",
        "key": "apd9cw"
      },
      {
        "analyteResidual": "Benzene",
        "lodppm": "10",
        "loqppm": "20",
        "resultppm": "Yes",
        "id": "ybgvv6",
        "key": "ybgvv6"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "Mercury",
        "loqppb": "20",
        "lodppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "Yes",
        "id": "4ams4a",
        "key": "4ams4a"
      },
      {
        "analyteHeavy": "Cadmium",
        "lodppb": "20",
        "loqppb": "12",
        "resultpercentHeavy": "Yes",
        "resultquantityHeavy": "Yes",
        "id": "umjfdc",
        "key": "umjfdc"
      }
    ],
    "scanCount": 4,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": true,
    "Sub_Distributor_Checked": true,
    "Retailers_Checked": true,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-26T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-10-05T10:12:04.682Z",
    "updatedAt": "2023-10-09T10:08:21.036Z",
    "__v": 0,
    "productId": "12344",
    "lastScane": "Retailers",
    "nextScane": "Customers"
  },
  {
    "_id": "6523a6b307abe7a74a2c6a30",
    "scanner_user": [],
    "productId": "123444",
    "productName": "Test Product1",
    "productPrice": "250",
    "sku": "#112233",
    "category": "weed",
    "weight": 250,
    "stockCount": 50,
    "test": "Test",
    "testStatus": "Not Tested",
    "testDate": "2023-10-09T00:00:00.000Z",
    "delta9THC": "",
    "HHCAcetate": "",
    "cannabinoidsPercent": 250,
    "moistureContent": "",
    "foreignMatter": "",
    "internalStandardNormalization": "",
    "cannabinoids": [
      {
        "analyte": "cbc",
        "loqpercent": "0.014",
        "lodpercent": "0.0025",
        "resultpercent": "0.00025",
        "resultquantity": "ND",
        "id": "5lirnm",
        "key": "5lirnm"
      }
    ],
    "residualSolvents": [
      {
        "analyteResidual": "0.0036",
        "loqppm": "0.0047",
        "lodppm": "0.0025",
        "resultppm": "ND",
        "id": "lrrh8",
        "key": "lrrh8"
      }
    ],
    "heavyMetals": [
      {
        "analyteHeavy": "d",
        "loqppb": "dsf",
        "lodppb": "dsf",
        "resultpercentHeavy": "dsf",
        "resultquantityHeavy": "dfds",
        "id": "l6jfx",
        "key": "l6jfx"
      }
    ],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-09T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-10-09T07:07:31.975Z",
    "updatedAt": "2023-10-10T05:53:15.175Z",
    "__v": 0
  },
  {
    "_id": "6523ab5a07abe7a74a2c6a81",
    "scanner_user": [],
    "productId": "2562",
    "productName": "test34",
    "productPrice": "456",
    "sku": "#435345",
    "category": "weed",
    "weight": 5667,
    "stockCount": 46456,
    "test": "dgfgdg",
    "testStatus": "dgd",
    "testDate": "2023-10-12T00:00:00.000Z",
    "delta9THC": "",
    "HHCAcetate": "",
    "cannabinoidsPercent": 454,
    "moistureContent": "",
    "foreignMatter": "",
    "internalStandardNormalization": "",
    "cannabinoids": [],
    "residualSolvents": [],
    "heavyMetals": [],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-20T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-10-09T07:27:22.112Z",
    "updatedAt": "2023-10-09T07:27:22.112Z",
    "__v": 0
  },
  {
    "_id": "6523ab7207abe7a74a2c6a83",
    "scanner_user": [],
    "productId": "test",
    "productName": "test5656",
    "productPrice": "546546",
    "sku": "456",
    "category": "weed",
    "weight": 5464,
    "stockCount": 54654,
    "test": "456546",
    "testStatus": "645654",
    "testDate": "2023-10-19T00:00:00.000Z",
    "delta9THC": "",
    "HHCAcetate": "",
    "cannabinoidsPercent": 54646,
    "moistureContent": "",
    "foreignMatter": "",
    "internalStandardNormalization": "",
    "cannabinoids": [],
    "residualSolvents": [],
    "heavyMetals": [],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-18T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-10-09T07:27:46.466Z",
    "updatedAt": "2023-10-09T07:27:46.466Z",
    "__v": 0
  },
  {
    "_id": "6523b05f07abe7a74a2c6aae",
    "scanner_user": [],
    "productId": "34522",
    "productName": "Product2",
    "productPrice": "343545",
    "sku": "wgf",
    "category": "weed",
    "weight": 34535,
    "stockCount": 345345,
    "test": "435",
    "testStatus": "4354",
    "testDate": "2023-10-11T00:00:00.000Z",
    "delta9THC": "",
    "HHCAcetate": "",
    "cannabinoidsPercent": 3451,
    "moistureContent": "",
    "foreignMatter": "",
    "internalStandardNormalization": "",
    "cannabinoids": [],
    "residualSolvents": [],
    "heavyMetals": [],
    "scanCount": 0,
    "wareHouse_Checked": true,
    "Master_Distributor_Checked": false,
    "Sub_Distributor_Checked": false,
    "Retailers_Checked": false,
    "Customer_Checked": false,
    "deliveryDate": "2023-10-13T00:00:00.000Z",
    "isArchive": false,
    "createdAt": "2023-10-09T07:48:47.596Z",
    "updatedAt": "2023-10-10T06:25:18.868Z",
    "__v": 0
  }
]
