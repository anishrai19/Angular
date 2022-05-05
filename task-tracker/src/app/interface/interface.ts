export interface ILoginResponse {
  data?: ILogin;
  error?: string;
}

export interface ILogin {
  _id: string;
  token: string;
  role: any;
}
