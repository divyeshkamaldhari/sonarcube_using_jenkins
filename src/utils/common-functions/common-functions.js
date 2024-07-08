import Papa from 'papaparse';

// Code to convert CSV to JSON goes here
export const convertCsvtoJson = (data) => {
    const jsonData = Papa.parse(data, { header: true }).data;
    return jsonData;
}

// Generating random colors combination every time
export const generateColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
        const hue = ((i * 360) / numColors) % 360;
        colors.push(`hsl(${hue}, 100%, 40%)`);
    }
    return colors;
};

// data: it is the array of element, keyName: the column name extract as key, includeempty need add the empty field data in list, filterby year: filtering by specific 5 year data
export const extractData = (data, keyName, includeEmpty = false, filterByYear = false) => {
    let filteredData = [...data];
    if (filterByYear) {
        const currentYear = new Date().getFullYear();
        const pastFiveYears = currentYear - 5;
        filteredData = filteredData.filter(item => item[keyName] >= pastFiveYears && item[keyName] <= currentYear);
    }
    // filteredData.forEach((e) => {
    //   if (e[keyName] || includeEmpty) {
    //     if (columnData[e[keyName]]) {
    //       columnData[e[keyName]] += 1;
    //     } else {
    //       columnData[e[keyName]] = 1;
    //     }
    //   }
    // });
    const columnData = filteredData.reduce((acc, item) => {
        if (item[keyName] || includeEmpty) {
            acc[item[keyName]] = (acc[item[keyName]] || 0) + 1;
        }
        return acc;
    }, {});

    const sortedData = Object.keys(columnData).sort().reduce((acc, key) => {
        acc[key] = columnData[key];
        return acc;
    }, {});

    return sortedData;
};

export const calculateAverageTime = (arr, keyName) => {
    const times = arr
        .map((study) =>
            study[keyName] ? parseFloat(study[keyName]) : ""
        )
        .filter((a) => a !== "");
    const total = times.reduce((acc, time) => acc + time, 0);
    const avgTime = total / times.length || 0;
    return avgTime;
}

export const setListData = (keyName, data) => {
    const uniqueData = [];
    const seen = new Set();

    data.forEach((e) => {
        let value = e[keyName] || "";
        let label = e[keyName] || "(Blank)";
        if (!seen.has(value)) {
            uniqueData.push({ label, value });
            seen.add(value);
        }
    });

    uniqueData.sort((a, b) => a.label.localeCompare(b.label));
    return uniqueData;
};