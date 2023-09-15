// (https://huns.me/2022-05-22-43-TypeScript%EC%97%90%EC%84%9C%20%EC%A0%84%EC%97%AD%20%EA%B0%9C%EC%B2%B4%20%ED%83%80%EC%9E%85%EC%9D%80%20%EC%96%B4%EB%96%BB%EA%B2%8C%20%EC%A0%95%EC%9D%98%ED%95%98%EB%82%98%EC%9A%94)
// export를 해주지않으면 인식하지 못한다.
export declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}
