export type OauthChannelType = Uppercase<'kakao' | 'google' | 'none'>;

export type CheckSignUpRequestBody = {
  email: string;
  oAuthChannelType: OauthChannelType;
};

export type SignInRequestBody = CheckSignUpRequestBody & {
  password: string;
};

export type SignUpRequestBody = SignInRequestBody & {
  userName: string;
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
