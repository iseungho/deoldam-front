import './globals.css';
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '홈',
  description: 'Navigation Bar',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-100">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
