/* eslint-disable react-hooks/exhaustive-deps */
import Chart from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import { extractData } from "../../utils/common-functions/common-functions";
import ChartLoader from "../skeleton/chart-loader";

export default function CommonChart({ heading, chartData, chartKey, chartType, isLoading }) {
    const [statusAnalysis, setStatusAnalysis] = useState({});
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        setStatusAnalysis(extractData(chartData, chartKey));
    }, [chartData]);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            // const colors = generateColors(Object.keys(statusAnalysis).length);
            const ctx = chartRef.current.getContext("2d");
            // Destroy the previous chart instance if it exists
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
            chartInstanceRef.current = new Chart(ctx, {
                type: chartType,
                data: {
                    labels: Object.keys(statusAnalysis),
                    datasets: [
                        {
                            label: `${(Object.values(statusAnalysis) / Object.keys(statusAnalysis).length) * 100}%`,
                            data: Object.values(statusAnalysis),
                            borderWidth: 0,
                            // backgroundColor: colors,
                            // borderColor: colors.map((color) => color.replace("100%", "80%")),
                        },
                    ],
                },
                options: {
                    plugins: {
                        legend: {
                            display: true,
                            position: "bottom",
                        },
                        tooltip: {
                            callbacks: {
                                label: (context) => {
                                    const total = context.dataset.data.reduce((sum, value) => sum + value, 0);
                                    const percentage = ((context.raw / total) * 100).toFixed(1) + "%";
                                    return `${context.raw} (${percentage})`;
                                },
                            },
                        },
                    },
                    cutout: chartType === "doughnut" ? "70%" : 0, // Set cutout for Doughnut chart
                },
            });
        }

        // Cleanup function to destroy chart instance when the component unmounts or data changes
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [statusAnalysis]);

    return (
        <div className="chart-layout common-chart pie-chart">
            <h3>{heading}</h3>
            {isLoading ? (
                <ChartLoader />
            ) : chartData.length === 0 ? (
                <div>No Data</div>
            ) : (
                <canvas ref={chartRef}></canvas>
            )}
        </div>
    );
}
