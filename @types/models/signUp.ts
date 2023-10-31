export type SignUpRequestBody = {
  userName: string;
  oAuthChannelType?: Uppercase<'kakao' | 'google'>;
  password: string;
  email: string;
};

export type SignInRequestBody = {
  email: string;
  password: string;
};

export type CheckSignUpRequestBody = {
  email: string;
};

export type SignResponseModel = {
  login: {
    userType: 'ASSOCIATE';
    token: {
      grantType: string;
      accessToken: string;
      refreshToken: string;
      accessTokenExpiresIn: Date;
      refreshTokenExpiresIn: Date;
    };
  };
};
