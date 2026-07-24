export type ApiResult<TData> = {
  data: TData;
  error?: never;
} | {
  data?: never;
  error: string;
};
