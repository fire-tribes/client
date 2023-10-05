import CommonIcon from '@/components/common/Icon';
import Layout from '@/components/common/Layout';
import { SignApi } from '@/core/api/sign';
import { Cookie } from '@/core/api/cookie';
import { ACCESS_TOKEN } from '@/core/api/token';
import AlertModal from '@/components/common/Modal/AlertModal';
import useControlModal from '@/hook/useControlModal';
import {
  List,
  ListItem,
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

export default function SettingPage() {
  const { mutate } = useLogoutQuery();
  const { openModal } = useControlModal();

  return (
    <Layout>
      <StyledRelative>
        <StyledHeader>
          <StyledTitle>설정</StyledTitle>
        </StyledHeader>
        <List>
          <ListItem>
            <ListItemText></ListItemText>
          </ListItem>
        </List>
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
      </StyledRelative>
    </Layout>
  );
}

export const StyledHeader = styled.header`
  height: 31px;
`;

const StyledRelative = styled.div`
  position: relative;
  min-height: 100vh;
`;

const StyledAbsolute = styled.div`
  position: absolute;
  bottom: 100px;
  width: 100%;
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
