export type SignUpRequestBody = {
  userName: string;
  oAuthChannelType?: 'KAKAO';
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
  data: {
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
};
