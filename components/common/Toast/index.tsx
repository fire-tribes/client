import useControlToast from '@/hook/useControlToast';

interface ToastProps {
  toastMessage?: string;
  children: React.ReactNode;
}

function Toast({ toastMessage, children }: ToastProps) {
  const { isShow, openToast } = useControlToast();
  return (
    <>
      {isShow && <b>{toastMessage}</b>}
      <span onClick={openToast}>{children}</span>
    </>
  );
}

export default Toast;
