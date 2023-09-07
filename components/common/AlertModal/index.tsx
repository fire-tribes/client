import CommonButton from '@/components/common/Button/CommonButton';
// import { useState } from 'react';

interface TModalCSSProps {
  type?: 'alert' | 'confirm'; // default: alert
}

interface TModalProps extends TModalCSSProps {
  title: string;
  message: string;
}

function AlertModal({ type = 'alert', title, message }: TModalProps) {
  return (
    <div>
      <header>
        <strong>{title}</strong>
      </header>
      <div>{message}</div>
      <div>
        {type === 'alert' && (
          <>
            <CommonButton>취소</CommonButton>
            <CommonButton>확인</CommonButton>
          </>
        )}
        {type === 'confirm' && <CommonButton>확인</CommonButton>}
      </div>
    </div>
  );
}

export default AlertModal;
