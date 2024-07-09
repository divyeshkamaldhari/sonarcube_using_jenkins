export interface CustomErrorProps {
  response?: CustomResponseErrorProps;
}

export interface CustomResponseErrorProps {
  status?: number;
  statusCode?: number;
}
