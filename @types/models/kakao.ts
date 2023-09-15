export type KakaoDefaultUserDataModel = {
  id: number;
  connected_at: Date;
  kakao_account: {
    has_email: true;
    email_needs_agreement: false;
    is_email_valid: true;
    is_email_verified: true;
    email: string;
    nickName: string;
  };
};
