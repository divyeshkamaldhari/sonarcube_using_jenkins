import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { beastCancer } from "../../actions/beast-cancer";
import CardComponent from "../../components/card";
import Charts from "../../components/charts";
import TableComponent from "../../components/tables";
import FiltersPane from "./filters-pane";

const SubLayout = () => {
    const { data: cancerData = [], isLoading: isCancerDataLoading } = useQuery({
        queryKey: ["chartJSData"],
        queryFn: beastCancer,
    });

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (cancerData.length > 0) {
            setFilteredData([...cancerData]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cancerData]);

    return (
        <>
            <Spin spinning={isCancerDataLoading}>
                <div className="box-layout-3">
                    <h3 className="heading">Filters Pane</h3>
                    <FiltersPane data={cancerData} filteredData={filteredData} setFilteredData={setFilteredData} />
                </div>
                <CardComponent data={filteredData} isLoading={isCancerDataLoading} />
                <div className="sub-layout">
                    <div className="box-layout-2">
                        <Charts data={filteredData} isLoading={isCancerDataLoading} />
                    </div>
                    <div className="box-layout-1">
                        <TableComponent isLoading={isCancerDataLoading} data={filteredData} />
                    </div>
                </div>
            </Spin>
        </>
    );
};

export default SubLayout;
