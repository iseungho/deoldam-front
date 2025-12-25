'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AuthModal from './AuthModal';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // 모바일 메뉴 상태
  const [authModalOpen, setAuthModalOpen] = useState(false); // 인증 모달 상태

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: '소개', href: '/about' },
    { name: '트레이드', href: '/trade' },
  ];

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 transition-colors duration-600 ease-in-out ${
        !scrolled || mobileMenuOpen ? 'bg-white' : 'bg-transparen hover:bg-white'
      }`}
    >
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* 로고 */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/next.svg" alt="Next.js Logo" width={80} height={20} className="h-7 w-auto" />
        </Link>

        {/* 우측 검색 & 메뉴 */}
        <div className="flex items-center md:order-2 space-x-4">
          {/* 데스크탑 검색창 */}
          <div className="md:relative hidden rounded-xl border border-white/20 backdrop-blur-[2px] bg-white/10 md:block shadow-md">
            <input
              type="text"
              className="
                w-56 ps-5 pe-3 py-3 pr-8
                bg-neutral-secondary-medium
                text-heading text-sm
                placeholder:text-body
                transition-all duration-600
                rounded-xl focus:bg-white
                focus:border-gray-500 focus:ring-0 focus:ring-gray-500 focus:outline-none ease-in-out focus:w-sm
              "
              placeholder="여기에 검색하세요!"
            />
            <div className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer">
              <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
          {/* 로그인 메뉴 버튼 */}

          <div className="flex items-center space-x-4">
            <button
              className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-600 border border-white/20 backdrop-blur-[2px] shadow-md transition-all duration-600 ease-out bg-white/10 hover:-translate-y-0.5 hover:backdrop-blur-xs active:scale-95"
              onClick={() => setAuthModalOpen(true)}
            >
              로그인 / 회원가입
            </button>
          </div>

          <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
          {/* 모바일 메뉴 버튼 */}
          <button
            type="button"
            className="inline-flex items-center p-2 ml-4 w-10 h-10 justify-center text-sm text-body rounded-base
                       md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none
                       focus:ring-0 focus:ring-neutral-tertiary"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
              )}
            </svg>
          </button>
        </div>

        {/* 메뉴 리스트 */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            mobileMenuOpen ? 'block' : 'hidden'
          }`}
          id="mobile-menu"
        >
          {/* 데스크탑 검색창 */}
          <div className="rounded-xl border border-white/20 backdrop-blur-[2px] bg-white/10 md:hidden shadow-md mt-8">
            <input
              type="text"
              className="
                w-full ps-5 pe-3 py-3 pr-8
                text-heading text-sm
                placeholder:text-body
                rounded-xl
                focus:border-gray-500 focus:ring-1 focus:ring-gray-500 focus:outline-none
              "
              placeholder="여기에 검색하세요!"
            />
            <div className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer">
              <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-2 rounded-base
                       bg-neutral-secondary-soft md:flex-row md:space-x-8 md:mt-0 md:border-0
                       md:bg-neutral-primary"
          >
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block py-2 text-xl px-3 rounded md:bg-transparent md:p-0
                    transition-colors duration-800
                    ${scrolled ? 'text-gray-400' : 'text-gray-600'}
                    hover:text-gray-800`}
                  onClick={() => setMobileMenuOpen(false)} // 클릭 시 메뉴 닫기
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
