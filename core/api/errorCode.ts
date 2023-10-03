export const SERVICE_ERROR_CODE = {
  /** 일반적인 에러들  */
  E01000: '잘못된 요청입니다.',
  E01001: '잘못된 요청이 입력되었습니다.',
  E01002: '데이터가 유효하지 않습니다.',
  E01003: '내부 서버 작업 에러',
  E01004: '외부 API 연동에 실패했습니다.',

  /** user 관련 에러 */
  E01101: '로그인 실패하였습니다.',
  E01102: '사용자가 존재하지 않습니다.',
  E01103: '등록할 수 없는 비밀번호입니다..',
  E01104: '동일 사용자가 존재 합니다.',
  E01105: '탈퇴한 사용자 입니다.',
  E01106: '유효하지 않은 토큰 입니다.',
  E01107: '유효하지 않은 refresh token 입니다.',
  E01108: '권한이 없습니다.',
  E01109: 'access Token이 만료되었습니다.',
  E01110: 'refresh Token이 만료되었습니다.',
  E01111: '로그인 요청이 불가능한 유저입니다.',
  E01112: '틀린 비밀번호입니다.',
  E01113: '허용되지 않은 로그인 요청입니다.',

  /** ?? */
  E01301: '유저정보가 일치하지 않습니다.',

  /** 자산(asset) 관련 ERROR */
  E01402: '해당 API는 국내 자산에는 활용할 수 없습니다.',
  E01403: '해당 API는 해외 자산에는 활용할 수 없습니다.',

  /** 포트폴리오(portFolio) 관련 ERROR */
  E01501: '생성 가능한 포트폴리오 개수를 초과하였습니다.',
  E01502: '포트폴리오를 찾을 수 없습니다.',
} as const;

const SERVICE_ERROR_CODE_VALUES = Object.values(SERVICE_ERROR_CODE);

export type ServiceErrorCodeKeyType = keyof typeof SERVICE_ERROR_CODE;
export type ServiceErrorCodeType = typeof SERVICE_ERROR_CODE_VALUES;
