import Comp from '@/components/common';
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
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

const mockExchangeRate = 1326.99;

const ShowPage = () => {
  Comp;
  return (
    <Layout>
      <header style={{ paddingBottom: '20px' }}>
        <ModeController />
      </header>

      <ExchangeRate>
        <CommonFont fontSize={'caption'} color={'gray5'}>
          달러환율
        </CommonFont>
        <CommonFont fontSize={'caption'} color={'point_blue02'}>
          {mockExchangeRate}원
        </CommonFont>
      </ExchangeRate>

      <Section textAlign="left" paddingTop="11px">
        <FlexBox justifyContent="space-between" paddingBottom="16px">
          <Section.Title>0000년 0월 배당금</Section.Title>
          <FlexBox justifyContent="space-between">
            <span>
              <FlexBox gap="14px">
                <button>
                  <FlexBox gap="4px">
                    <CommonIcon iconName={'checked'} />
                    <CommonFont fontSize={'body3'}>소득세</CommonFont>
                    <span></span>
                  </FlexBox>
                </button>

                <button>
                  <FlexBox gap="4px">
                    <CommonIcon iconName={'checked_none'} />
                    <CommonFont fontSize={'body3'}>4대보험</CommonFont>
                  </FlexBox>
                </button>
              </FlexBox>
            </span>
          </FlexBox>
        </FlexBox>
        <div>
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
        </div>

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

export default ShowPage;
