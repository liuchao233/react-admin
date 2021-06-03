interface Urls extends Record<string, any> {
  list?: string;
  remove?: string;
}

interface Responses<T = any> {
  success: boolean;
  data: T,
  message: string;
}