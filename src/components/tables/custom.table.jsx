import { Table } from "antd";
import { useEffect, useState } from "react";

const CustomTable = ({ data, isLoading, tableTitle }) => {
    const [tableData, setTableData] = useState([]);
    const [grandTotal, setGrandTotal] = useState(0);
    const columns = [
        {
            title: tableTitle.col1,
            dataIndex: "name",
            fixed: true,
            width: 70,
            className: "custom-table-header",
        },
        {
            title: tableTitle.col2,
            dataIndex: "count",
            width: 34,
            className: "custom-table-header left-text-row",
        },
    ];

    useEffect(() => {
        const arr = [];
        if (Object.keys(data).length > 0) {
            Object.keys(data).map((e) => {
                arr.push({
                    key: e,
                    name: e,
                    count: data[e],
                });
            });
        }
        setTableData([...arr]);
        const totalCount = Object.values(data).reduce((sum, count) => sum + count, 0);
        setGrandTotal(totalCount);
    }, [data]);

    return (
        <div className="table-layout">
            <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                loading={isLoading}
                bordered
                className="custom-table"
                rowClassName={() => "custom-table-row"}
                scroll={{ x: 300 }}
                summary={() => (
                    <Table.Summary fixed>
                        <Table.Summary.Row className="custom-summary-row">
                            <Table.Summary.Cell index={0} className="custom-summary-row">
                                Grand Total
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={1} className="custom-summary-row left-text-row">
                                {grandTotal}
                            </Table.Summary.Cell>
                        </Table.Summary.Row>
                    </Table.Summary>
                )}
            />
        </div>
    );
};

export default CustomTable;
