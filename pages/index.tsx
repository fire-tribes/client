import PopupTest from '@/components/PopupTest';
import Layout from '@/components/common/Layout';
import IOSSwitch from '@/components/common/Switch/CommonIosSwitch';
import CommonTextField from '@/components/common/TextField';

const PageIndex = () => {
  return (
    <Layout>
      <div style={{ fontSize: 30 }}>Home</div>
      <PopupTest />
      <div>
        <IOSSwitch />
        <CommonTextField label="10글자만 입력" />
      </div>
    </Layout>
  );
};

export default PageIndex;
