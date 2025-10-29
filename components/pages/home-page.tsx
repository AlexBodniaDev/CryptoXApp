import { PortfolioOverview } from "@/components/portfolio-overview"
import { MarketsList } from "@/components/markets-list"
import { TradingChart } from "@/components/trading-chart"
import { RecentTransactions } from "@/components/recent-transactions"

export function HomePage() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <PortfolioOverview />
        <TradingChart />
        <RecentTransactions />
      </div>
      <div className="space-y-6">
        <MarketsList />
      </div>
    </div>
  )
}
