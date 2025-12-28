import TradeDetailSkeleton from '@/components/trade/TradeDetailSkeleton';

export default async function TradeDetailPage({ params }: any) {
  const { tradeId } = await params;
  return <TradeDetailSkeleton tradeId={tradeId} />;
}
