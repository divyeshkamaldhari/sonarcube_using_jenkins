import { Skeleton } from "antd";
import { useEffect, useState } from "react";
import { calculateAverageTime } from "../../utils/common-functions/common-functions";

export default function CardComponent({ data, isLoading }) {
    const [cardData, setCardData] = useState({
        total: 0,
        allSex: 0,
        female: 0,
        male: 0,
    });

    useEffect(() => {
        setCardData({
            total: data.length,
            allSex: data.filter((e) => e?.Sex.toLowerCase() === "all").length,
            female: data.filter((e) => e?.Sex.toLowerCase() === "female").length,
            male: data.filter((e) => e?.Sex.toLowerCase() === "male").length,
            avgTime: calculateAverageTime(data, "Time to complete").toFixed(2),
        });
    }, [data]);

    const CardDataLoad = ({ cardData }) => {
        return <div>{isLoading ? <Skeleton.Button active={isLoading} size={"small"} /> : <p>{cardData}</p>}</div>;
    };
    return (
        <div className="card">
            <div className="sub-card">
                Total no of Studies
                <CardDataLoad cardData={cardData.total} />
            </div>
            <div className="sub-card">
                All Sex
                <CardDataLoad cardData={cardData.allSex} />
            </div>
            <div className="sub-card">
                Female
                <CardDataLoad cardData={cardData.female} />
            </div>
            <div className="sub-card">
                Male
                <CardDataLoad cardData={cardData.male} />
            </div>
            <div className="sub-card">
                Average Time of Study Completion (In Years)
                <CardDataLoad cardData={cardData.avgTime} />
            </div>
        </div>
    );
}
