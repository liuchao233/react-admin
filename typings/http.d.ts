declare namespace http {
  interface ResponseWrapper<T = any> {
    success: boolean;
    data: T,
    message: string;
  }
  
  interface PaginatedResponse<T = any> {
    result: T[],
    current: number,
    total: number,
    size: number,
  }
  
  type ListResponse<T = any> = PaginatedResponse<T> | T[];
  
  type DetailResponse<T = Record<string, any>> = T; 
}