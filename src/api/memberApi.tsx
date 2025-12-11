import axios from 'axios';

export interface LoginParams {
  email: string;
  password: string;
  keepLoggedIn?: boolean;
}

export interface SignupParams {
  email: string;
  password: string;
  nickname: string;
  role: 'USER' | 'ADMIN';
}

export interface LoginResponse {
  token?: string;
  user?: { id: string; email: string; nickname: string; role: string };
  error?: string;
}

export interface SignupResponse {
  success?: boolean;
  error?: string;
}

// 로그인 API
export const loginMember = async (params: LoginParams): Promise<LoginResponse> => {
  try {
    const res = await axios.post('/api/login', params);
    return res.data;
  } catch (err: any) {
    return { error: err.response?.data?.message || '로그인 실패' };
  }
};

// 회원가입 API
export const signupMember = async (params: {
  email: string;
  nickname: string;
  password: string;
  role: string;
}): Promise<SignupResponse> => {
  try {
    const res = await axios.post('/api/signup', params);
    return res.data;
  } catch (err: any) {
    return { error: err.response?.data?.message || '회원가입 실패' };
  }
};
