import { AxiosResponse } from 'axios';
import { API_URL } from '../../constants/api-url/apiUrl.constants';
import { customerDetailsProps } from '../../intefaces/components/modals/modals.interfaces';
import { executeApi } from '../../utils/axios/general';

//Update User
export const userIsUpdate = async (data: customerDetailsProps) => {
  const response: AxiosResponse = await executeApi(
    'put',
    `${API_URL.AUTH_USER.LIST}/${data.key}`,
    data,
  );
  return response.data;
};
