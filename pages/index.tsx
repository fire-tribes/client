import Layout from '@/components/common/Layout';
import DetailInformationList from '@/components/List/DetailInformationList';
import { MyStockList } from '@/components/List/MyStockList';
import { ScheduleList } from '@/components/List/ScheduleList';
import Section from '@/components/Section';
import FlexBox from '@/components/common/FlexBox';
import CommonChart from '@/components/Chart';
import CommonIcon from '@/components/common/Icon';
import CommonFont from '@/components/Font';
import ExchangeRate from '@/components/ExchangeRate';
import ModeController from '@/components/ModeController';
import BadgeGroup from '@/components/BdageTest';
import CommonBar from '@/components/common/Bar';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Head from 'next/head';

const MainPage = () => {
  return (
    <main>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <header style={{ paddingBottom: '20px' }}>
          <ModeController />
        </header>

        <ExchangeRate />

        <Section textAlign="left" paddingTop="11px">
          <FlexBox justifyContent="space-between" paddingBottom="16px">
            <Section.Title>0000년 0월 배당금</Section.Title>
            <FlexBox justifyContent="space-between">
              <FlexBox gap="14px">
                {
                  //TODO: 버튼별로 별도의 컴포넌트로 분리
                }
                <button>
                  <FlexBox gap="4px">
                    <CommonIcon iconName={'checked'} />
                    <CommonFont fontSize={'body3'}>소득세</CommonFont>
                  </FlexBox>
                </button>
                <button>
                  <FlexBox gap="4px">
                    <CommonIcon iconName={'checked_none'} />
                    <CommonFont fontSize={'body3'}>4대보험</CommonFont>
                  </FlexBox>
                </button>
              </FlexBox>
            </FlexBox>
          </FlexBox>

          <FlexBox
            flexDirection="column"
            alignItems={'start'}
            paddingBottom={'18px'}
          >
            <h1 style={{ paddingBottom: '6px' }}>389만원</h1>
            <CommonFont fontSize="body1" color="point_red01">
              지난 배당 대비 +151만원
            </CommonFont>
          </FlexBox>
          {
            // TODO: 차트 수정해야함
          }
          <CommonChart />
        </Section>

        <Section paddingTop="30px" paddingBottom="30px">
          <DetailInformationList />
        </Section>

        <Section textAlign="left">
          <Section.Title paddingBottom="18px">배당 달력(8월)</Section.Title>
          <ScheduleList />
          <Section.Footer padding={'20px 0px'}>
            <FlexBox>
              <button onClick={() => alert('준비중입니다.')}>
                <CommonFont fontSize="body2" color="point_blue02">
                  {'전체보기 >'}
                </CommonFont>
              </button>
            </FlexBox>
          </Section.Footer>
          <CommonBar />
        </Section>

        <Section textAlign="left" paddingTop="18px">
          <FlexBox justifyContent={'space-between'} paddingBottom="16px">
            <Section.Title>보유 주식</Section.Title>
            <BadgeGroup />
          </FlexBox>
          <h1>7억 4312만원</h1>
          <Typography
            color="error"
            sx={{ paddingTop: '6px', paddingBottom: '18px' }}
          >
            +2030만원 (79.5%)
          </Typography>
          <MyStockList />
        </Section>

        <StyledFooter>
          <CommonFont color="gray6" fontWeight="regular">
            현재 파이어스에서 제공하는 배당 금액은 환율, 세법, 주식 시장 가격
            변동으로 인해 일부 차이가 있을 수 있습니다. (환율은 전일자 종가를
            기준)
          </CommonFont>
        </StyledFooter>
      </Layout>
    </main>
  );
};

const StyledFooter = styled.footer`
  padding: 18px 20px;
`;

// const S = {
//   BarChartLayout: styled.div`
//     height: 151px;
//     border: 1px solid black;
//   `,
// };

export default MainPage;
