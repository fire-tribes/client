export type SignUpRequestBody = {
  userName: string;
  oAuthChannelType?: 'KAKAO';
  password: string;
  email: string;
  accessToken: string;
};

export type SignInRequestBody = {
  email: string;
  password: string;
  accessToken: string;
};

export type CheckSignUpRequestBody = {
  email: string;
};
