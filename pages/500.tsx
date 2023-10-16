import CommonButton from '@/components/common/Button/CommonButton';
import CenterContent from '@/components/commonV2/CenterContent';
import LayoutV2 from '@/components/commonV2/Layout';
import Padding from '@/components/commonV2/Padding';

import Link from 'next/link';

export default function Custom404Page() {
  return (
    <LayoutV2
      showBottomNavigator={false}
      headMetaProps={{
        title: '스노우볼 - 404',
        image: '',
      }}
    >
      <CenterContent>
        <div>오류가 발생했습니다. 잠시 후 다시 시도해주세요.</div>
      </CenterContent>
      <Padding paddingLeft={18} paddingRight={18}>
        <Link href={'/'}>
          <CommonButton fullWidth>뒤로 가기</CommonButton>
        </Link>
      </Padding>
    </LayoutV2>
  );
}
