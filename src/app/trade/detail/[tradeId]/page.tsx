'use client';

import { useParams } from 'next/navigation';

export default function tardeDetailPage() {
  const params = useParams<{ tradeId: string }>();
  console.log(params);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">상품 설명 페이지</h1>
        <p className="mt-4 text-lg text-gray-600">상품 상세 거래 페이지입니다.</p>
        <p className="mt-4 text-lg text-gray-600">상품 번호: {params.tradeId}</p>
        <div className="mt-8">
          <a href="/" className="rounded-xl border px-4 py-2 text-gray-800 hover:bg-gray-100 transition">
            메인 페이지로 이동
          </a>
        </div>
      </section>
    </main>
  );
}
