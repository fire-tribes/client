export type OauthChannelType = Uppercase<'kakao' | 'google' | 'none'>;

export type SignUpRequestBody = {
  userName: string;
  email: string;
  password: string;
  oAuthChannelType: OauthChannelType;
};

export type SignInRequestBody = {
  email: string;
  password: string;
  oAuthChannelType: OauthChannelType;
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
