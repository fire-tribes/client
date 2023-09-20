import CommonFont from '@/components/common/Font';
import { StyledNotifyMessageSection } from '@/components/portfolio/portfolioSections/NotifyMessageSection/styles';

const NOTIFY_MESSAGE =
  '현재 스노우볼에서 제공하는 배당 금액은 환율, 세법, 주식 시장 가격 변동으로 인해 일부 차이가 있을 수 있습니다.\n';
const CRITICAL_MESSAGE = '(환율은 전일자 종가를 기준)';

export default function NotifyMessageSection() {
  return (
    <StyledNotifyMessageSection>
      <CommonFont color="gray6" fontWeight="regular" fontSize="caption">
        {NOTIFY_MESSAGE}
        <div>
          <CommonFont color="gray6" fontWeight="regular" fontSize="caption">
            {CRITICAL_MESSAGE}
          </CommonFont>
        </div>
      </CommonFont>
    </StyledNotifyMessageSection>
  );
}
