export const onApiCallRetry = (
  failureCount,
  error,
) => {
  if (isAxiosError(error) && error.response) {
    if ([400, 401, 403, 404].includes(error.response.status)) {
      return false;
    }
  }
  return failureCount < 1;
};

// Type guard to check if the error is an AxiosError
const isAxiosError = (
  error,
) => {
  return error.isAxiosError !== undefined;
};
