import TabComponent from "../../components/tabs";
import "./style.css";

export default function Dashboard() {
    return (
        <>
            <h1 className="main-title">AXL Dashboard</h1>
            <div className="main-layout">
                <div>
                    <TabComponent />
                </div>
            </div>
        </>
    );
}
