import BarChart from "./bar-chart";
import CommonChart from "./common-charts";

const Charts = ({ data, isLoading }) => {
    return (
        <div className="main-charts">
            <CommonChart
                heading={"Study Status Analysis"}
                chartKey={"Study Status"}
                chartType={"pie"}
                chartData={data}
                isLoading={isLoading}
            />
            <CommonChart
                heading={"Frequency of each study type"}
                chartKey={"Study Type"}
                chartType={"doughnut"}
                chartData={data}
                isLoading={isLoading}
            />
            <CommonChart
                heading={"Studies Distribution by Fund Type"}
                chartKey={"Funder Type"}
                chartType={"doughnut"}
                chartData={data}
                isLoading={isLoading}
            />
            <BarChart
                heading={"Number of studies targeting different age groups"}
                chartKey={"Age"}
                chartType={"bar"}
                chartAxis={"x"}
                chartData={data}
                isLoading={isLoading}
                xAxisTitle={"Age Groups"}
            />
            <BarChart
                heading={"Number of studies in each phase"}
                chartKey={"Phases"}
                chartType={"bar"}
                chartAxis={"y"}
                chartData={data}
                isLoading={isLoading}
                yAxisTitle={"Phases"}
            />
            <BarChart
                heading={"Number of studies targeting different age groups"}
                chartKey={"Start Year"}
                chartType={"bar"}
                chartAxis={"x"}
                specifiedYear={5}
                chartData={data}
                isLoading={isLoading}
                xAxisTitle={"Start Year"}
            />
        </div>
    );
};

export default Charts;
