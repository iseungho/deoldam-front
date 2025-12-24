import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '메인 페이지',
  description: 'Next.js 프로젝트 메인 페이지입니다.',
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8">
      <section className="text-center mb-12 pt-56">
        <h1 className="text-4xl font-bold text-gray-900">메인 페이지</h1>
        <p className="mt-4 text-lg text-gray-600">덜담에 오신걸 환영합니다.</p>
        <div className="mt-8">
          <a href="/trade" className="rounded-xl border px-4 py-2 text-gray-800 hover:bg-gray-100 transition">
            경매 페이지로 이동
          </a>
        </div>
      </section>

      {/* 이미지 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-24 max-w-screen-xl">
        {[0, 1, 2, 3].map((col) => (
          <div key={col} className="grid gap-4">
            {[0, 1, 2].map((row) => {
              const imgIndex = col * 3 + row;
              // 첫 번째 이미지는 image.jpg
              const src =
                imgIndex === 0
                  ? 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
                  : `https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-${imgIndex}.jpg`;
              return (
                <div key={row}>
                  <img className="h-auto max-w-full rounded-base" src={src} alt={`이미지 ${imgIndex}`} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {/* 이미지 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-4 max-w-screen-xl">
        {[0, 1, 2, 3].map((col) => (
          <div key={col} className="grid gap-4">
            {[0, 1, 2].map((row) => {
              const imgIndex = col * 3 + row;
              // 첫 번째 이미지는 image.jpg
              const src =
                imgIndex === 0
                  ? 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
                  : `https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-${imgIndex}.jpg`;
              return (
                <div key={row}>
                  <img className="h-auto max-w-full rounded-base" src={src} alt={`이미지 ${imgIndex}`} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </main>
  );
}
