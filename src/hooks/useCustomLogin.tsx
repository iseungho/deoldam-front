import { useState } from 'react';
import { loginMember, LoginParams, LoginResponse } from '@/api/memberApi';

const useCustomLogin = () => {
  const [loading, setLoading] = useState(false);

  const doLogin = async (params: LoginParams): Promise<LoginResponse> => {
    setLoading(true);
    const result = await loginMember(params);
    setLoading(false);

    if (result.token) {
      // 로그인 성공 시 로컬 스토리지 또는 쿠키에 토큰 저장
      if (params.keepLoggedIn) {
        localStorage.setItem('token', result.token);
      } else {
        sessionStorage.setItem('token', result.token);
      }
    }

    return result;
  };

  return { doLogin, loading };
};

export default useCustomLogin;
