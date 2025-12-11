'use client';

import React, { useState } from 'react';
import useCustomLogin from '@/hooks/useCustomLogin';
import { signupMember } from '@/api/memberApi';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // true면 로그인, false면 회원가입
  const [loginParam, setLoginParam] = useState({ email: '', password: '', keepLoggedIn: false });
  const [signupParam, setSignupParam] = useState({ email: '', password: '', nickname: '', role: 'USER' });
  const [errors, setErrors] = useState<{ email?: string; password?: string; nickname?: string }>({});
  const { doLogin } = useCustomLogin();

  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;

    if (isLogin) {
      setLoginParam((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    } else {
      setSignupParam((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      isLogin ? handleClickLogin() : handleClickSignup();
    }
  };

  const validateLogin = () => {
    let isValid = true;
    const newErrors: typeof errors = {};

    if (!emailRegEx.test(loginParam.email)) {
      newErrors.email = '유효한 이메일 주소를 입력하세요.';
      isValid = false;
    }
    if (!passwordRegEx.test(loginParam.password)) {
      newErrors.password = '비밀번호가 유효하지 않습니다.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateSignup = () => {
    let isValid = true;
    const newErrors: typeof errors = {};

    if (!emailRegEx.test(signupParam.email)) {
      newErrors.email = '유효한 이메일 주소를 입력하세요.';
      isValid = false;
    }
    if (!passwordRegEx.test(signupParam.password)) {
      newErrors.password = '비밀번호가 유효하지 않습니다.';
      isValid = false;
    }
    if (!signupParam.nickname) {
      newErrors.nickname = '닉네임을 입력하세요.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const refreshFields = () => {
    setLoginParam({ email: '', password: '', keepLoggedIn: false });
    setSignupParam({ email: '', password: '', nickname: '', role: 'USER' });
    setErrors({});
  };

  const handleClickLogin = async () => {
    if (!validateLogin()) return;

    const data = await doLogin(loginParam);
    if (data.error) {
      setErrors({ email: '', password: '이메일 또는 비밀번호가 유효하지 않습니다.' });
    } else {
      alert('다시 오셨군요! 환영합니다.');
      refreshFields();
      onClose();
    }
  };

  const handleClickSignup = async () => {
    if (!validateSignup()) return;

    try {
      await signupMember(signupParam);
      alert('회원가입이 완료되었습니다. 로그인해주세요.');
      refreshFields();
      setIsLogin(true);
    } catch (error: any) {
      setErrors({
        email: error.response?.data?.error === 'EMAIL_ALREADY_EXISTS' ? '이미 등록된 이메일입니다.' : '',
      });
    }
  };

  const confirmClose = () => {
    if (window.confirm('진행상황이 저장되지 않습니다. 정말로 닫으시겠습니까?')) {
      setIsLogin(true);
      refreshFields();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-[1px] flex items-center justify-center z-50"
      onClick={confirmClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-l w-full max-w-md relative text-gray-500"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl font-bold"
          onClick={confirmClose}
        >
          &times;
        </button>

        <h2 className="text-center text-3xl font-bold mb-6">{isLogin ? '로그인' : '회원가입'}</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="text"
            name="email"
            value={isLogin ? loginParam.email : signupParam.email}
            placeholder="이메일을 입력하세요."
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={isLogin ? loginParam.password : signupParam.password}
            placeholder="비밀번호를 입력하세요."
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {!isLogin && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Nickname</label>
            <input
              type="text"
              name="nickname"
              value={signupParam.nickname}
              placeholder="닉네임을 입력하세요."
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                errors.nickname ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.nickname && <p className="text-red-500 text-sm mt-1">{errors.nickname}</p>}
          </div>
        )}

        <button
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition mb-2 cursor-pointer"
          onClick={isLogin ? handleClickLogin : handleClickSignup}
        >
          {isLogin ? '로그인' : '회원가입'}
        </button>

        {isLogin && (
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="keepLoggedIn"
              checked={loginParam.keepLoggedIn}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm">로그인 유지하기</label>
          </div>
        )}

        <div className="text-center text-gray-400 mb-5">또는</div>

        <div className="space-y-3">
          <button
            onClick={() => alert('네이버 로그인은 아직 준비 중입니다!')}
            className="w-full flex items-center justify-center cursor-pointer bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Continue with Naver
          </button>
          <button
            onClick={() => alert('카카오 로그인은 아직 준비 중입니다!')}
            className="w-full flex items-center justify-center cursor-pointer bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-500 transition"
          >
            Continue with Kakao
          </button>
        </div>

        <p className="text-center mt-6 text-gray-600">
          {isLogin ? '아직 계정이 없으신가요? ' : '계정이 있으신가요? '}
          <span onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:underline cursor-pointer">
            {isLogin ? '회원가입' : '로그인'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
