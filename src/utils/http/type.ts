export interface ResponseData<T> {
  errorCode: number;
  msg: string;
  data: T;
}
