import PopupTest from '@/components/PopupTest';
import Layout from '@/components/common/Layout';
import CommonTextField from '@/components/common/TextField';

const PageIndex = () => {
  return (
    <Layout>
      <div style={{ fontSize: 30 }}>Home</div>
      <PopupTest />
      <div>
        <CommonTextField label="10글자만 입력" />
      </div>
    </Layout>
  );
};

export default PageIndex;
