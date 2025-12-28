import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About 페이지입니다.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">소개 페이지</h1>
        <p className="mt-4 text-lg text-gray-600">덜담에 오신걸 환영합니다.</p>
        <div className="mt-8">
          <a href="/" className="rounded-xl border px-4 py-2 text-gray-800 hover:bg-gray-100 transition">
            메인 페이지로 이동
          </a>
        </div>
      </section>
    </main>
  );
}
