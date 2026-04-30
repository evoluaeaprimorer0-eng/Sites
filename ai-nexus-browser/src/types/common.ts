export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
  isMockData?: boolean;
  timestamp: string;
  source: string;
}

export interface SelectOption {
  label: string;
  value: string;
}
