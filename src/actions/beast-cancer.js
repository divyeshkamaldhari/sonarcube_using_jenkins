import { API_URL } from "../constants/api-url/api-url.constants"
import { executeApi } from "../utils/axios/general"
import { convertCsvtoJson } from "../utils/common-functions/common-functions"

export const beastCancer = async () => {
    const response = await executeApi(
        'get',
        API_URL.BEAST_CANCER
    );
    const convertedJson = response ? convertCsvtoJson(response) : '';
    return convertedJson;
}