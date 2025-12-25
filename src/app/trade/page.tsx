import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '메인 페이지',
  description: 'Next.js 프로젝트 메인 페이지입니다.',
};

export default function aboutPage() {
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
              const imgIndex = col * 3 + row;
              return (
                <div
                  key={row}
                  role="status"
                  className="max-w-sm p-4 border border-gray-300 rounded-xl shadow-xs animate-pulse md:p-6"
                >
                  <div
                    role="status"
                    className="flex items-center justify-center h-48 max-w-sm bg-neutral-200 rounded-base animate-pulse mb-4 sm:mb-6"
                  >
                    <svg
                      className="w-11 h-11 text-fg-disabled"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM9 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm5.697 2.395v-.733l1.269-1.219v2.984l-1.268-1.032Z"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="h-2.5 bg-neutral-200 rounded-full w-48 mb-4"></div>
                  <div className="h-2 bg-neutral-200 rounded-full mb-2.5"></div>
                  <div className="h-2 bg-neutral-200 rounded-full mb-2.5"></div>
                  <div className="h-2 bg-neutral-200 rounded-full"></div>
                  <div className="flex items-center mt-4">
                    <svg
                      className="w-8 h-8 text-fg-disabled me-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                    <div>
                      <div className="h-2.5 bg-neutral-200 rounded-full w-32 mb-2"></div>
                      <div className="w-48 h-2 bg-neutral-200 rounded-full"></div>
                    </div>
                  </div>
                  <span className="sr-only">Loading...</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </main>
  );
}
