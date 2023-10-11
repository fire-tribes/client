import CommonIcon from '@/components/common/Icon';

import { SignApi } from '@/core/api/sign';
import { Cookie } from '@/core/api/cookie';
import { ACCESS_TOKEN } from '@/core/api/token';
import AlertModal from '@/components/common/Modal/AlertModal';
import useControlModal from '@/hook/useControlModal';
import LayoutV2 from '@/components/commonV2/Layout';
import Padding from '@/components/commonV2/Padding';
import CommonFont from '@/components/common/Font';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';

const useLogoutQuery = () => {
  return useMutation(() => SignApi.signOut(), {
    onSuccess: (response) => {
      if (response.success) {
        const cookie = new Cookie();

        cookie.remove(ACCESS_TOKEN);
        window.location.href = '/login';
      }
    },
  });
};

type AccessTokenDecodingResult = {
  email: string;
  exp: number;
  sub: string;
  userId: number;
};

const useDecodingAccessToken = () => {
  const cookie = new Cookie();
  const accessToken = cookie.get(ACCESS_TOKEN);

  /**
   * [0] : header
   * [1] : payload
   * [2] : VERIFY
   */

  if (accessToken) {
    const base64Payload = accessToken.split('.')[1];

    const payload = Buffer.from(base64Payload, 'base64');
    const result: AccessTokenDecodingResult = JSON.parse(payload.toString());

    return result;
  }

  return null;
};

export default function SettingPage() {
  const { mutate } = useLogoutQuery();
  const { openModal } = useControlModal();
  const accessTokenDecodingResult = useDecodingAccessToken();

  return (
    <LayoutV2
      showBottomNavigator
      headMetaProps={{
        title: '설정',
        image: '',
      }}
    >
      <Padding paddingLeft={16} paddingRight={16} paddingTop={21}>
        <StyledTitle>설정</StyledTitle>
      </Padding>
      <div>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Padding paddingBottom={2}>
                  <CommonFont fontSize="h3" fontWeight="bold">
                    {accessTokenDecodingResult?.email}
                  </CommonFont>
                </Padding>
              }
              secondary={
                <CommonFont fontSize="body1" fontWeight="regular" color="gray6">
                  최근 접속일:{' '}
                  {accessTokenDecodingResult?.exp &&
                    new Date(
                      accessTokenDecodingResult?.exp,
                    ).toLocaleDateString()}
                </CommonFont>
              }
            ></ListItemText>

            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
          </ListItem>
        </List>
      </div>
      <div>
        <Padding paddingLeft={16} paddingRight={16} paddingTop={8}>
          <CommonFont>기타</CommonFont>
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: '14px 0', gap: '10px' }}>
                <ListItemIcon sx={{ width: '24px', minWidth: '0' }}>
                  <CommonIcon iconName="note" width={24} height={24} />
                </ListItemIcon>
                <ListItemText primary="이용약관" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton sx={{ padding: '14px 0', gap: '10px' }}>
                <ListItemIcon sx={{ width: '24px', minWidth: '0' }}>
                  <CommonIcon iconName="lock" width={24} height={24} />
                </ListItemIcon>
                <ListItemText primary="개인정보처리방침" />
              </ListItemButton>
            </ListItem>
          </List>
        </Padding>
        <StyledAbsolute>
          <AlertModal
            title={'로그아웃'}
            message={'로그아웃을 하시겠습니까?'}
            onClickEvent={() => mutate()}
            toastMessage="로그아웃이 완료되었습니다."
          >
            <StyledLogoutButton
              onClick={() => {
                openModal();
              }}
            >
              로그아웃
            </StyledLogoutButton>
          </AlertModal>
        </StyledAbsolute>
      </div>
    </LayoutV2>
  );
}

export const StyledHeader = styled.header`
  height: 31px;
`;

const StyledAbsolute = styled.div`
  position: absolute;
  bottom: 100px;
  left: 0;
  right: 0;
  width: 100%;

  text-align: center;
`;

const StyledLogoutButton = styled.button`
  text-decoration: underline;
  line-height: 18px;

  ${({ theme }) => css`
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.palette.basic.gray5};
  `}
`;
export const StyledTitle = styled.h2`
  height: 100%;

  font-weight: 900;
  text-align: left;
`;
