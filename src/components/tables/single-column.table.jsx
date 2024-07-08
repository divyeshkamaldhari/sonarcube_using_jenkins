import { Table } from "antd";
import { useEffect, useState } from "react";

export default function SingleColumn({ data, isLoading, tableTitle }) {
    const [tableData, setTableData] = useState([]);
    const columns = [
        {
            title: tableTitle.col1,
            dataIndex: "count",
            fixed: true,
            width: 200,
            className: "custom-table-header left-text-row",
        },
    ];

    useEffect(() => {
        const arr = [];
        arr.push({
            key: data,
            count: data,
        });
        setTableData([...arr]);
    }, [data]);

    return (
        <div className="table-layout">
            <Table
                className="custom-table"
                columns={columns}
                dataSource={tableData}
                pagination={false}
                loading={isLoading}
                bordered
            />
        </div>
    );
}
