export interface Response<T> {
  code: number;
  data: {
    $id: number;
    $values: T;
  };
  message?: string;
}
