import { testAPI } from '@/core/api/instance';
import { useMutation } from '@tanstack/react-query';

export const Comp = () => {
  const { mutate: login } = useMutation(() => testAPI.login());
  const { mutate: logout } = useMutation(() => testAPI.logout());
  const { mutate: write } = useMutation(() => testAPI.write());
  const onClick = () => {
    login();
  };

  return (
    <div>
      <button type="button" onClick={onClick}>
        로그인
      </button>
      <br />
      <button type="button" onClick={() => write()}>
        작성
      </button>
      <br />
      <button type="button" onClick={() => logout()}>
        로그아웃
      </button>
    </div>
  );
};
