/* eslint-disable react-hooks/exhaustive-deps */
import Chart from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import { extractData } from "../../utils/common-functions/common-functions";
import ChartLoader from "../skeleton/chart-loader";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function BarChart({
    heading,
    chartKey,
    chartType,
    chartAxis,
    chartData,
    specifiedYear,
    isLoading,
    xAxisTitle,
    yAxisTitle,
}) {
    const [statusAnalysis, setStatusAnalysis] = useState({});
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (specifiedYear) {
            setStatusAnalysis(extractData(chartData, chartKey, false, true));
        } else {
            setStatusAnalysis(extractData(chartData, chartKey));
        }
    }, [chartData]);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const ctx = chartRef.current.getContext("2d");
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
            chartInstanceRef.current = new Chart(ctx, {
                type: chartType,
                data: {
                    labels: Object.keys(statusAnalysis),
                    datasets: [
                        {
                            label: chartKey,
                            data: Object.values(statusAnalysis),
                            borderWidth: 0,
                            backgroundColor: "#6AA84F",
                            borderColor: "#0a5401",
                        },
                    ],
                },
                options: {
                    layout: {
                        padding: {
                            top: 20,
                        },
                    },
                    scales: {
                        x: {
                            // title: {
                            //     display: true,
                            //     text: xAxisTitle,
                            //     font: {
                            //         size: 16,
                            //     },
                            //     color: "#000",
                            // },
                            ticks: {
                                autoSkip: false,
                                font: {
                                    size: 11,
                                },
                                maxRotation: 0,
                                callback: function (val) {
                                    const label = this.getLabelForValue(val);
                                    const words = label.split(", ");
                                    const lines = [];
                                    let line = "";
                                    words.forEach((word) => {
                                        if (line.length + word.length > 15) {
                                            lines.push(line);
                                            line = word;
                                        } else {
                                            if (line !== "") {
                                                line += ", ";
                                            }
                                            line += word;
                                        }
                                    });
                                    lines.push(line);
                                    return lines;
                                },
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: yAxisTitle,
                                font: {
                                    size: 16,
                                },
                                color: "#000",
                            },
                            ticks: {
                                beginAtZero: true,
                                stepSize: 1000,
                                font: {
                                    size: 13,
                                },
                            },
                        },
                    },
                    plugins: {
                        datalabels: {
                            anchor: "end",
                            align: "end",
                            color: "#000",
                            font: {
                                size: 12,
                            },
                        },
                        tooltip: {
                            callbacks: {
                                label: (context) => {
                                    return `${context.raw} `;
                                },
                            },
                        },
                        legend: {
                            display: false, // Disable the legend (color box)
                        },
                    },
                    indexAxis: chartAxis,
                },
                plugins: [ChartDataLabels],
            });
        }

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [statusAnalysis]);

    return (
        <div className="chart-layout bar-chart">
            <h3>{heading}</h3>
            <div className="canvas-container">
                {isLoading ? (
                    <ChartLoader />
                ) : (
                    <>
                        <canvas ref={chartRef}></canvas>
                        <p className="chart-title">{xAxisTitle}</p>
                    </>
                )}
            </div>
        </div>
    );
}
