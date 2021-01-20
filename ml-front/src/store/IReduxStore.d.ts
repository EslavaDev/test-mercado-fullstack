interface Response {
  id: string;
  isEnabled?: boolean;
  createdAt: string;
  updatedAt: string;
}
interface ErrorCustom {
  id: string;
  message: any;
  close?: number;
}
