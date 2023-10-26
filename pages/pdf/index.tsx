import { PDFViewer } from '@/components/PDFViewer';
import LayoutV2 from '@/components/commonV2/Layout';

export default function PDFpage() {
  return (
    <LayoutV2
      showBottomNavigator={false}
      headMetaProps={{
        title: '스노우볼 - 개인정보 처리방침',
      }}
    >
      <PDFViewer />
    </LayoutV2>
  );
}
