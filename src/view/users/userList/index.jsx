import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { actionDeleteIcon, actionEditIcon } from "../../../assets/images";
const UserList = ({ userLists, modalClickAction, loading, access, scope }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let arr = [];
    if (userLists?.length > 0) {
      userLists?.forEach((ele, i) => {
        let obj = { ...ele };
        let subObj = {
          no: i + 1,
          key: obj._id,
          firstName: obj?.firstName,
          lastName: obj?.lastName,
          role: obj?.role,
          scope: obj?.scope,
          email: obj?.email,
          password: obj?.password,
          permissions: obj?.permissions,
          createdDate: obj?.createdAt?.slice(0, 10),
          lastModifiedDate: obj?.updatedAt?.slice(0, 10),
        };
        arr.push({ ...subObj });
      });
    }
    setData([...arr]);
  }, [userLists]);

  const columns = [
    { title: "No", dataIndex: "no" },
    {
      title: "First Name",
      dataIndex: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: "Lat Name",
      dataIndex: "lastName",
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: "Role",
      dataIndex: "role",
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    { title: "Scope", dataIndex: "scope" },
    { title: "Email", dataIndex: "email" },
    { title: "Created Date", dataIndex: "createdDate" },
    { title: "Last Modified Date", dataIndex: "lastModifiedDate" },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div className="action_wrap">
          {access?.permissions?.includes("Delete") ||
          scope === "Super_Admin" ? (
            <span
              className="action-btn delete-btn"
              onClick={() => modalClickAction("deleteUser", true, record)}
            >
              {actionDeleteIcon}
            </span>
          ) : (
            ""
          )}
          {access?.permissions?.includes("Update") ||
          scope === "Super_Admin" ? (
            <span
              className="action-btn edit-btn"
              onClick={() => modalClickAction("editUser", true, record)}
            >
              {actionEditIcon}
            </span>
          ) : (
            ""
          )}
        </div>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={{
        total: userLists?.length,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        // pageSizeOptions: [ 25, 50, 100],
        pageSize: 25,
        
      }}
    />
  );
};

export default UserList;
