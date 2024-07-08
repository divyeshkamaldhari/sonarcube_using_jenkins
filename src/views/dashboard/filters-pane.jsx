/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Filters from "../../components/filters";
import { setListData } from "../../utils/common-functions/common-functions";

export default function FiltersPane({ data, setFilteredData }) {
    const [studyTitleList, setStudyTitleList] = useState([]);
    const [studyTitleValue, setStudyTitleValue] = useState([]);
    const [studyStatusList, setStudyStatusList] = useState([]);
    const [studyStatusValue, setStudyStatusValue] = useState([]);
    const [sexList, setSexList] = useState([]);
    const [sexValue, setSexValue] = useState([]);
    const [ageList, setAgeList] = useState([]);
    const [ageValue, setAgeValue] = useState([]);
    const [sponsorList, setSponsorList] = useState([]);
    const [sponsorValue, setSponsorValue] = useState([]);
    const [studyTypeList, setStudyTypeList] = useState([]);
    const [studyTypeValue, setStudyTypeValue] = useState([]);
    const [completionDateList, setCompletionDateList] = useState([]);
    const [completionDateValue, setCompletionDateValue] = useState([]);
    const [collaboratorsList, setCollaboratorsList] = useState([]);
    const [collaboratorsValue, setCollaboratorsValue] = useState([]);
    const [funderTypeList, setFunderTypeList] = useState([]);
    const [funderTypeValue, setFunderTypeValue] = useState([]);
    const [studyDesignList, setStudyDesignList] = useState([]);
    const [studyDesignValue, setStudyDesignValue] = useState([]);
    const [nctNumberList, setNctNumberList] = useState([]);
    const [nctNumberValue, setNctNumberValue] = useState([]);

    useEffect(() => {
        setStudyTitleList(setListData("Study Title", data));
        setStudyTitleValue(setListData("Study Title", data).map((e) => e.value));
        setStudyStatusList(setListData("Study Status", data));
        setStudyStatusValue(setListData("Study Status", data).map((e) => e.value));
        setSexList(setListData("Sex", data));
        setSexValue(setListData("Sex", data).map((e) => e.value));
        setAgeList(setListData("Age", data));
        setAgeValue(setListData("Age", data).map((e) => e.value));
        setSponsorList(setListData("Sponsor", data));
        setSponsorValue(setListData("Sponsor", data).map((e) => e.value));
        setStudyTypeList(setListData("Study Type", data));
        setStudyTypeValue(setListData("Study Type", data).map((e) => e.value));
        setCompletionDateList(setListData("Completion Date", data));
        setCompletionDateValue(setListData("Completion Date", data).map((e) => e.value));
        setCollaboratorsList(setListData("Collaborators", data));
        setCollaboratorsValue(setListData("Collaborators", data).map((e) => e.value));
        setFunderTypeList(setListData("Funder Type", data));
        setFunderTypeValue(setListData("Funder Type", data).map((e) => e.value));
        setStudyDesignList(setListData("Study Design", data));
        setStudyDesignValue(setListData("Study Design", data).map((e) => e.value));
        setNctNumberList(setListData("NCT Number", data));
        setNctNumberValue(setListData("NCT Number", data).map((e) => e.value));
    }, [data]);

    useEffect(() => {
        let filteredData = [];
        if (
            studyTitleValue.length != 0 ||
            studyStatusValue.length != 0 ||
            sexValue.length != 0 ||
            ageValue.length != 0 ||
            sponsorValue.length != 0 ||
            studyTypeValue.length != 0 ||
            completionDateValue.length != 0 ||
            collaboratorsValue.length != 0 ||
            funderTypeValue.length != 0 ||
            studyDesignValue.length != 0 ||
            nctNumberValue.length != 0
        ) {
            filteredData = data.filter(
                (study) =>
                    (studyTitleValue.length === 0 || studyTitleValue.includes(study["Study Title"])) &&
                    (studyStatusValue.length === 0 || studyStatusValue.includes(study["Study Status"])) &&
                    (sexValue.length === 0 || sexValue.includes(study["Sex"])) &&
                    (ageValue.length === 0 || ageValue.includes(study["Age"])) &&
                    (sponsorValue.length === 0 || sponsorValue.includes(study["Sponsor"])) &&
                    (studyTypeValue.length === 0 || studyTypeValue.includes(study["Study Type"])) &&
                    (completionDateValue.length === 0 || completionDateValue.includes(study["Completion Date"])) &&
                    (collaboratorsValue.length === 0 || collaboratorsValue.includes(study["Collaborators"])) &&
                    (funderTypeValue.length === 0 || funderTypeValue.includes(study["Funder Type"])) &&
                    (studyDesignValue.length === 0 || studyDesignValue.includes(study["Study Design"])) &&
                    (nctNumberValue.length === 0 || nctNumberValue.includes(study["NCT Number"]))
            );
        }
        setFilteredData(filteredData);
    }, [
        studyTitleValue,
        studyStatusValue,
        sexValue,
        ageValue,
        sponsorValue,
        studyTypeValue,
        completionDateValue,
        collaboratorsValue,
        funderTypeValue,
        studyDesignValue,
        nctNumberValue,
        data,
    ]);

    return (
        <div className="filters-pane">
            <Filters
                list={studyTitleList}
                setState={setStudyTitleValue}
                state={studyTitleValue}
                title={"Study Titles"}
                keyName={"Study Title"}
                data={data}
            />
            <Filters
                list={studyStatusList}
                setState={setStudyStatusValue}
                state={studyStatusValue}
                title={"Study Status"}
                keyName={"Study Status"}
                data={data}
            />
            <Filters list={sexList} setState={setSexValue} state={sexValue} title={"Sex"} keyName={"Sex"} data={data} />
            <Filters list={ageList} setState={setAgeValue} state={ageValue} title={"Age"} keyName={"Age"} data={data} />
            <Filters
                list={sponsorList}
                setState={setSponsorValue}
                state={sponsorValue}
                title={"Sponsors"}
                keyName={"Sponsor"}
                data={data}
            />
            <Filters
                list={studyTypeList}
                setState={setStudyTypeValue}
                state={studyTypeValue}
                title={"Study Types"}
                keyName={"Study Type"}
                data={data}
            />
            <Filters
                list={completionDateList}
                setState={setCompletionDateValue}
                state={completionDateValue}
                title={"Completion Dates"}
                keyName={"Completion Date"}
                data={data}
            />
            <Filters
                list={collaboratorsList}
                setState={setCollaboratorsValue}
                state={collaboratorsValue}
                title={"Collaborators"}
                keyName={"Collaborators"}
                data={data}
            />
            <Filters
                list={funderTypeList}
                setState={setFunderTypeValue}
                state={funderTypeValue}
                title={"Funder Types"}
                keyName={"Funder Type"}
                data={data}
            />
            <Filters
                list={studyDesignList}
                setState={setStudyDesignValue}
                state={studyDesignValue}
                title={"Study Designs"}
                keyName={"Study Design"}
                data={data}
            />
            <Filters
                list={nctNumberList}
                setState={setNctNumberValue}
                state={nctNumberValue}
                title={"NCT Numbers"}
                keyName={"NCT Number"}
                data={data}
            />
        </div>
    );
}
