import React from 'react';

type Props = {
  tradeId?: string;
};

export default function TradeDetailSkeleton({ tradeId }: Props) {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 mt-24">
      {/* 상단 헤더: 원래 있던 영역(그대로 유지) */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">상품 설명 페이지</h1>
        <p className="mt-4 text-lg text-gray-600">상품 상세 거래 페이지입니다.</p>
        {tradeId && <p className="mt-4 text-lg text-gray-600">상품 번호: {tradeId}</p>}
        <div className="mt-8">
          <a href="/" className="rounded-xl border px-4 py-2 text-gray-800 hover:bg-gray-100 transition">
            메인 페이지로 이동
          </a>
        </div>
      </section>

      {/* 상단: 이미지(좌) + 기본정보(우) */}
      <section className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
        <div
          role="status"
          className="w-full md:w-1/2 h-64 md:h-[28rem] bg-neutral-200 rounded-lg flex items-center justify-center animate-pulse"
          aria-hidden
        >
          <svg
            className="w-12 h-12 text-fg-disabled"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <div className="h-8 bg-neutral-200 rounded w-3/4 animate-pulse"></div>
          <div className="h-4 bg-neutral-200 rounded w-1/2 animate-pulse"></div>
          <div className="h-4 bg-neutral-200 rounded w-1/3 animate-pulse"></div>
          <div className="flex items-center gap-3 mt-4">
            <div className="h-10 w-28 bg-neutral-200 rounded-lg animate-pulse"></div>
            <div className="h-10 w-28 bg-neutral-200 rounded-lg animate-pulse"></div>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            <span className="block h-3 bg-neutral-200 rounded w-full max-w-[420px] animate-pulse" />
            <span className="block h-3 bg-neutral-200 rounded w-full max-w-[360px] mt-2 animate-pulse" />
          </p>
        </div>
      </section>

      {/* 하단: 상세설명(좌) / 실시간 가격(우) */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 좌: 상세설명*/}
        <div className="md:col-span-2 space-y-4">
          <div className="h-6 bg-neutral-200 rounded w-40 animate-pulse"></div>
          <div className="space-y-3">
            <div className="h-3 bg-neutral-200 rounded w-full max-w-[900px] animate-pulse"></div>
            <div className="h-3 bg-neutral-200 rounded w-full max-w-[820px] animate-pulse"></div>
            <div className="h-3 bg-neutral-200 rounded w-full max-w-[760px] animate-pulse"></div>
            <div className="h-3 bg-neutral-200 rounded w-full max-w-[500px] animate-pulse"></div>
            <div className="h-3 bg-neutral-200 rounded w-full max-w-[640px] animate-pulse"></div>
            <div className="h-3 bg-neutral-200 rounded w-full max-w-[720px] animate-pulse"></div>
          </div>

          <div className="mt-6">
            <div className="h-40 bg-neutral-100 rounded-lg border border-neutral-200 animate-pulse" />
          </div>
        </div>

        {/* 우: 실시간 가격 카드 */}
        <aside
          role="status"
          className="p-4 border border-gray-200 rounded-xl shadow-sm animate-pulse md:p-4 flex flex-col gap-4"
        >
          {/* 막대그래프 */}
          <div className="mt-2">
            <div className="h-32 w-full rounded-md flex items-end justify-center gap-3 px-3">
              <div className="w-3 bg-neutral-200 rounded-t" style={{ height: '22%' }} />
              <div className="w-3 bg-neutral-200 rounded-t" style={{ height: '45%' }} />
              <div className="w-3 bg-neutral-200 rounded-t" style={{ height: '32%' }} />
              <div className="w-3 bg-neutral-200 rounded-t" style={{ height: '78%' }} />
              <div className="w-3 bg-neutral-200 rounded-t" style={{ height: '58%' }} />
              <div className="w-3 bg-neutral-200 rounded-t" style={{ height: '36%' }} />
              <div className="w-3 bg-neutral-200 rounded-t" style={{ height: '64%' }} />
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="h-10 bg-neutral-200 rounded w-full"></div>
            <div className="h-10 bg-neutral-200 rounded w-full"></div>
            <div className="h-10 bg-neutral-200 rounded w-full"></div>
          </div>

          <span className="sr-only">Loading...</span>
        </aside>
      </section>
    </main>
  );
}
