// TODO: 이런 상수 (const) 가 @types에 들어와 있는게 맞는걸까요?? 그럼 이걸 따로 모아둘 수 있도록  const 폴더를 만드는건?
const SERVICE_ERROR_CODE = {
  E01502: '포트폴리오를 찾을 수 없습니다',
} as const;

type ServiceErrorCodeKey = keyof typeof SERVICE_ERROR_CODE;

export type { ServiceErrorCodeKey };
