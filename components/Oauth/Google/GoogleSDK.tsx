// import CommonFont from '@/components/common/Font';
// import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

export default function GoogleSDK() {
  return (
    <script src="https://accounts.google.com/gsi/client" async defer></script>
  );
}

export function GoogleLoginButton() {
  const googleClient = useRef<unknown>(null);

  function initClient() {
    if (!window.google) return;

    googleClient.current = window.google.accounts.oauth2.initCodeClient({
      client_id: 'YOUR_CLIENT_ID',
      scope: 'https://www.googleapis.com/auth/calendar.readonly',
      ux_mode: 'popup',
      callback: () =>
        // response: object
        {
          // var code_receiver_uri = 'YOUR_AUTHORIZATION_CODE_ENDPOINT_URI';
          // Send auth code to your backend platform
          // const xhr = new XMLHttpRequest();
          // xhr.open('POST', code_receiver_uri, true);
          // xhr.setRequestHeader(
          //   'Content-Type',
          //   'application/x-www-form-urlencoded',
          // );
          // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          // xhr.onload = function () {
          //   console.log('Signed in as: ' + xhr.responseText);
          // };
          // xhr.send('code=' + response.code);
          // After receipt, the code is exchanged for an access token and
          // refresh token, and the platform then updates this web app
          // running in user's browser with the requested calendar info.
        },
    });
  }

  useEffect(() => {
    initClient();
  }, []);

  function getAuthCode() {
    // Request authorization code and obtain user consent
    // googleClient?.current?.requestCode();
  }

  return <button onClick={getAuthCode}></button>;
}

// useEffect(() => {
//   if (isLoading) {
//     openSnackbar({
//       message: '로그인 중입니다.',
//       autoHideDuration: 5 * 1000,
//       anchorOrigin: {
//         vertical: 'bottom',
//         horizontal: 'center',
//       },
//       onClose: () => {
//         setIsLoading(false);
//         closeSnackbar();
//       },
//     });
//   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [isLoading]);

// useEffect(() => {
//   if (isError) {
//     openSnackbar({
//       message: '로그인 오류가 발생했습니다. 다시 시도해 주세요.',
//       autoHideDuration: 3 * 1000,
//       anchorOrigin: {
//         vertical: 'bottom',
//         horizontal: 'center',
//       },
//       onClose: () => {
//         setIsError(false);
//         closeSnackbar();
//       },
//     });
//   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [isError]);

// return (
//   <>
//     <GoogleSDK />
//     <S.KakaoLoginButtonContainer href="#">
//       {/* <Image src="/icon/kako_icon.svg" alt="kakao" width={30} height={30} /> */}
//       <CommonFont fontSize="body2" fontWeight="bold">
//         구글 로그인
//       </CommonFont>
//     </S.KakaoLoginButtonContainer>
//   </>
// );
// }

// const S = {
//   KakaoLoginButtonContainer: styled('a')`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 7px;

//     width: 168px;
//     height: 58px;
//     padding: 14px 18px;

//     border-radius: 80px;
//     background-color: #faea05;
//   `,
// };
