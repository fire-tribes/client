import axios from 'axios';

export const SignApi = {
  login: (providerUserId: string) => {
    axios.post(process.env.NEXT_PUBLIC_SERVER_URL + 'login-jwt', {
      providerUserId,
    });
  },
};
