import { AxiosError, AxiosResponse } from 'axios';
import { API_URL } from '../../constants/api-url/apiUrl.constants';
import { executeApi } from '../../utils/axios/general';

export const fetchBlogList = async () => {
  const response: AxiosResponse = await executeApi(
    'put',
    API_URL.BLOG.GET_BLOG_LIST,
  );
  return response.data;
};

export const fetchBlogCategoryList = async (category: string) => {
  try {
    const response: AxiosResponse = await executeApi(
      'get',
      `${API_URL.BLOG.GET_BLOG_CATERGORY_LIST}/category/${category}`,
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};

export const fetchSingleBlogCategoryList = async (slugName: string) => {
  try {
    const response: AxiosResponse = await executeApi(
      'get',
      `${API_URL.BLOG.GET_BLOG_CATERGORY_LIST}/${slugName}`,
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
};
