import { Metadata } from 'next';
import TradeCard from '../../components/trade/TradeCard';

export const metadata: Metadata = {
  title: '메인 페이지',
  description: 'Next.js 프로젝트 메인 페이지입니다.',
};

export default function TradePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 mt-24">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">경매 페이지</h1>
        <p className="mt-4 text-lg text-gray-600">전체 경매 페이지입니다.</p>
        <div className="mt-8">
          <a href="/" className="rounded-xl border px-4 py-2 text-gray-800 hover:bg-gray-100 transition">
            메인 페이지로 이동
          </a>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-4 max-w-screen-xl">
        {[0, 1, 2, 3].map((col) => (
          <div key={col} className="grid gap-4">
            {[0, 1, 2].map((row) => {
              return <TradeCard key={`${col}-${row}`} />;
            })}
          </div>
        ))}
      </div>
    </main>
  );
}
