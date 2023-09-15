interface ToastCSSProps {
  able: boolean; // default값은 false
}

interface ToastProps extends ToastCSSProps {
  message: React.ReactNode;
}

function Toast({ able = false, message }: ToastProps) {
  return (
    <div>
      if (!able) null;
      {able && <b>{message}</b>}
    </div>
  );
}

export default Toast;
