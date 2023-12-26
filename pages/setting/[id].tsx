import CommonIcon from '@/components/common/Icon';

import { SignApi } from '@/core/api/sign';
import { Cookie } from '@/core/api/cookie';
import { ACCESS_TOKEN } from '@/core/api/token';
import AlertModal from '@/components/common/Modal/AlertModal';
import useControlModal from '@/hook/useControlModal';
import LayoutV2 from '@/components/commonV2/Layout';
import Padding from '@/components/commonV2/Padding';
import CommonFont from '@/components/common/Font';

import { useDecodingAccessToken } from '@/hook/useDecodingAccessToken';
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import { signOut } from 'next-auth/react';
import { PageConfig, GetServerSideProps } from 'next';

const HELP_CENTER_LINKS = {
  DIRECT_CHATTING: 'https://open.kakao.com/o/sUl98zOf',
  GROUP_CHATTING: 'https://open.kakao.com/o/gjNg4cOf',
};

const TERMS_LINKS = {
  TERMS_OF_SERVICE:
    'https://www.notion.so/tuemarz/3a3e5409697847c88749246893e1c3d0?pvs=4',
  PRIVACY_POLICY:
    'https://tuemarz.notion.site/90ef6825b4ae498d83936a18de0a8324',
};

const useLogoutQuery = () => {
  return useMutation(() => SignApi.signOut(), {
    onSuccess: async (response) => {
      if (response.success) {
        const cookie = new Cookie();

        cookie.remove(ACCESS_TOKEN);
        await signOut();
        window.location.href = '/login';
      }
    },
  });
};

type Resposne = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export default function SettingPage({ repo }: { repo: Resposne }) {
  const { mutate } = useLogoutQuery();
  const { openModal } = useControlModal();
  const accessTokenDecodingResult = useDecodingAccessToken();

  return (
    <LayoutV2
      showBottomNavigator
      headMetaProps={{
        title: '스노우볼 - 설정',
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

              /** TODO: 어떤 데이터를 토대로 최근 접속일을 보여줄 것인지 결졍되면 주석 제거 */
              // secondary={
              //   <CommonFont fontSize="body1" fontWeight="regular" color="gray6">
              //     최근 접속일:{' '}
              //     {accessTokenDecodingResult?.exp &&
              //       new Date(
              //         accessTokenDecodingResult?.exp,
              //       ).toLocaleDateString()}
              //   </CommonFont>
              // }
            ></ListItemText>
            <div>
              계산 탭은 아직 준비중입니다. id: {repo.id}
              title: {repo.title}
              price: {repo.price}
            </div>

            <Avatar src="" sx={{ border: 'none' }}>
              <CommonIcon iconName="profile" width={50} height={50} />
            </Avatar>
          </ListItem>
        </List>
      </div>
      <div>
        <Padding paddingLeft={16} paddingRight={16} paddingTop={8}>
          <CommonFont
            component="h3"
            fontSize="body3"
            fontWeight="regular"
            color="gray6"
          >
            고객센터
          </CommonFont>
          <List>
            <ListItem disablePadding>
              <a
                href={HELP_CENTER_LINKS.DIRECT_CHATTING}
                target="_blank"
                style={{
                  display: 'block',
                  width: '100%',
                }}
              >
                <ListItemButton sx={{ padding: '14px 0', gap: '10px' }}>
                  <ListItemIcon sx={{ width: '24px', minWidth: '0' }}>
                    <CommonIcon iconName="helpcenter" width={24} height={24} />
                  </ListItemIcon>
                  <ListItemText primary="1:1 문의" />
                </ListItemButton>
              </a>
            </ListItem>

            <ListItem disablePadding>
              <a
                href={HELP_CENTER_LINKS.GROUP_CHATTING}
                target="_blank"
                style={{
                  display: 'block',
                  width: '100%',
                }}
              >
                <ListItemButton sx={{ padding: '14px 0', gap: '10px' }}>
                  <ListItemIcon sx={{ width: '24px', minWidth: '0' }}>
                    <CommonIcon iconName="chatting" width={24} height={24} />
                  </ListItemIcon>
                  <ListItemText primary="오픈 단톡방 참여 (배당 커뮤니티)" />
                </ListItemButton>
              </a>
            </ListItem>
          </List>
        </Padding>
      </div>
      <div>
        <Padding paddingLeft={16} paddingRight={16} paddingTop={8}>
          <CommonFont
            component="h3"
            fontSize="body3"
            fontWeight="regular"
            color="gray6"
          >
            기타
          </CommonFont>

          <List>
            <ListItem disablePadding>
              <a
                href={TERMS_LINKS.TERMS_OF_SERVICE}
                target="_blank"
                style={{
                  display: 'block',
                  width: '100%',
                }}
              >
                <ListItemButton sx={{ padding: '14px 0', gap: '10px' }}>
                  <ListItemIcon sx={{ width: '24px', minWidth: '0' }}>
                    <CommonIcon iconName="note" width={24} height={24} />
                  </ListItemIcon>
                  <ListItemText primary="이용약관" />
                </ListItemButton>
              </a>
            </ListItem>

            <ListItem disablePadding>
              <a
                href={TERMS_LINKS.PRIVACY_POLICY}
                target="_blank"
                style={{
                  display: 'block',
                  width: '100%',
                }}
              >
                <ListItemButton sx={{ padding: '14px 0', gap: '10px' }}>
                  <ListItemIcon sx={{ width: '24px', minWidth: '0' }}>
                    <CommonIcon iconName="lock" width={24} height={24} />
                  </ListItemIcon>
                  <ListItemText primary="개인정보처리방침" />
                </ListItemButton>
              </a>
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

export const config: PageConfig = {
  runtime: 'experimental-edge',
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  const res = await fetch(`https://dummyjson.com/products/${context.query.id}`);
  const repo: Resposne = await res.json();

  return {
    props: {
      repo,
    },
  };
};
