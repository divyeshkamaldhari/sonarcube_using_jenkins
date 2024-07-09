import axios from 'axios';

const formatLocation = (data: {
  cityName: string;
  regionName: string;
  countryName: string;
  zipCode: string;
}) => {
  if (
    !data.cityName ||
    !data.regionName ||
    !data.countryName ||
    !data.zipCode
  ) {
    return 'None';
  }
  return `${data.cityName}, ${data.regionName}, ${data.countryName}, ${data.zipCode}`;
};

export const getIpAddressData = async () => {
  try {
    const responseCurrentData = await axios.get(
      `https://freeipapi.com/api/json/`,
    );
    const currentUserData = responseCurrentData?.data;
    const ip = currentUserData?.ipAddress || '';
    const location = formatLocation(currentUserData);

    const headers = {
      ip,
      location,
    };
    return headers;
  } catch (error) {
    console.error('Error fetching IP data:', error);
  }
};
