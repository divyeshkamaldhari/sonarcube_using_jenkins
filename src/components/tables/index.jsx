import { useEffect, useState } from "react";
import CustomTable from "./custom.table";
import { extractData } from "../../utils/common-functions/common-functions";

const TableComponent = ({ data, isLoading }) => {
    const [studyStatusData, setStudyStatusData] = useState({});
    const [phasesData, setPhasesData] = useState({});
    const [ageData, setAgeData] = useState({});
    const [funderTypeData, setFunderTypeData] = useState({});
    const [studyTypeData, setStudyTypeData] = useState({});
    const [startYearData, setStartYearData] = useState({});

    useEffect(() => {
        setStudyStatusData(extractData(data, "Study Status"));
        setPhasesData(extractData(data, "Phases", true));
        setAgeData(extractData(data, "Age"));
        setFunderTypeData(extractData(data, "Funder Type"));
        setStudyTypeData(extractData(data, "Study Type"));
        setStartYearData(extractData(data, "Start Year", false, true));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <>
            <CustomTable
                data={studyStatusData}
                isLoading={isLoading}
                tableTitle={{ col1: "Study Status", col2: "NCT Number" }}
            />
            <CustomTable data={phasesData} isLoading={isLoading} tableTitle={{ col1: "Phases", col2: "Study Title" }} />
            <CustomTable data={ageData} isLoading={isLoading} tableTitle={{ col1: "Age", col2: "Study Title" }} />
            <CustomTable
                data={funderTypeData}
                isLoading={isLoading}
                tableTitle={{ col1: "Funder Type", col2: "Study Title" }}
            />
            <CustomTable
                data={studyTypeData}
                isLoading={isLoading}
                tableTitle={{ col1: "Study Type", col2: "Study Title" }}
            />
            <CustomTable
                data={startYearData}
                isLoading={isLoading}
                tableTitle={{ col1: "Start Year", col2: "Study Title" }}
            />
            {/* <SingleColumn data={data.length} isLoading={isLoading} tableTitle={{ col1: "NTC Number" }} />
            <SingleColumn
                data={data.filter((e) => e?.Sex.toLowerCase() === "all").length}
                isLoading={isLoading}
                tableTitle={{ col1: "Sex" }}
            />
            <SingleColumn
                data={data.filter((e) => e?.Sex.toLowerCase() === "female").length}
                isLoading={isLoading}
                tableTitle={{ col1: "Female" }}
            />
            <SingleColumn
                data={data.filter((e) => e?.Sex.toLowerCase() === "male").length}
                isLoading={isLoading}
                tableTitle={{ col1: "Male" }}
            />
            <SingleColumn
                data={calculateAverageTime(data, "Time to complete").toFixed(2)}
                isLoading={isLoading}
                tableTitle={{ col1: "Average Time of Study Completion (In Years)" }}
            /> */}
        </>
    );
};

export default TableComponent;
