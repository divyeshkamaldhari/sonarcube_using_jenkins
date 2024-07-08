import { Tabs } from "antd";
import SubLayout from "../../views/dashboard/sub-layout";

export default function TabComponent() {
    const items = [
        {
            key: "1",
            label: "Breast Cancer",
            children: <SubLayout childKey={"breastCancer"} />,
        },
    ];

    return (
        <div className="main-tab">
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    );
}
