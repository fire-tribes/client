import Comp from '@/components/common';
import Layout from '@/components/common/Layout';
import IOSSwitch from '@/components/common/Switch/CommonIosSwitch';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import DetailInformationList from '@/components/List/DetailInformationList';
import { MyStockList } from '@/components/List/MyStockList';
import { ScheduleList } from '@/components/List/ScheduleList';
import NotifyPopup from '@/components/Popup/NotifyPopup';
import Section from '@/components/Section';
import FlexBox from '@/components/common/FlexBox';

const PageIndex = () => {
  Comp;
  return (
    <Layout>
      <header>
        <FlexBox justifyContent="space-between">
          <div>icon</div>
          <FlexBox gap="6px">
            <span>심플모드</span>
            <IOSSwitch />
          </FlexBox>
        </FlexBox>
      </header>

      <div style={{ textAlign: 'left' }}>달러환율 1326원</div>

      <Section textAlign="left" paddingTop={11}>
        <FlexBox justifyContent="space-between">
          <Section.Title>0000년 0월 배당금</Section.Title>
          <FlexBox justifyContent="space-between">
            <span>
              <FlexBox gap="14px">
                <NotifyPopup>
                  <button type="button">
                    <span>✅</span>
                    <span>소득세</span>
                  </button>
                </NotifyPopup>
                <NotifyPopup>
                  <button type="button">
                    <span>⛔</span>
                    <span>4대보험</span>
                  </button>
                </NotifyPopup>
              </FlexBox>
            </span>
          </FlexBox>
        </FlexBox>
        <h1>389만원</h1>
        <p>지난 배당 대비 151만원</p>
        <div>
          <S.BarChartLayout>bar Chart</S.BarChartLayout>
        </div>
      </Section>

      <Section>
        <DetailInformationList />
      </Section>

      <Section textAlign="left">
        <Section.Title>배당 달력(8월)</Section.Title>
        <ScheduleList />
      </Section>

      <Section textAlign="left">
        <Section.Title>보유 주식</Section.Title>
        <h1>7억 4312만원</h1>
        <Typography color="error">+2030만원 (79.5%)</Typography>
        <MyStockList />
      </Section>
    </Layout>
  );
};

const S = {
  BarChartLayout: styled.div`
    height: 151px;
    border: 1px solid black;
  `,
};

export default PageIndex;
