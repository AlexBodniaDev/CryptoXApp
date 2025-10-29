"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

const mockHoldings = [
  { id: 1, symbol: "BTC", name: "Bitcoin", amount: 0.5234, value: 35189.23, change: 5.42, avgBuyPrice: 62000 },
  { id: 2, symbol: "ETH", name: "Ethereum", amount: 3.2145, value: 11112.45, change: 3.21, avgBuyPrice: 3200 },
  { id: 3, symbol: "SOL", name: "Solana", amount: 45.67, value: 6652.89, change: 8.92, avgBuyPrice: 130 },
  { id: 4, symbol: "BNB", name: "Binance Coin", amount: 8.234, value: 4852.34, change: -1.45, avgBuyPrice: 550 },
]

export function PortfolioPage() {
  const [showBalance, setShowBalance] = useState(true)
  const totalValue = mockHoldings.reduce((sum, h) => sum + h.value, 0)
  const totalChange = 2345.67
  const changePercent = 5.42

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
        <p className="text-muted-foreground">Manage your crypto assets</p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
              <div className="flex items-center gap-2 mt-1">
                <h2 className="text-4xl font-bold">
                  {showBalance ? `$${totalValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}` : "••••••"}
                </h2>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowBalance(!showBalance)}>
                  {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-primary/10 text-primary">
              <TrendingUp className="h-5 w-5" />
              <span className="text-lg font-bold">+{changePercent}%</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-primary font-semibold text-lg">
              +${totalChange.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
            <span className="text-muted-foreground">Today</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12">
              Buy Crypto
            </Button>
            <Button variant="outline" className="font-semibold bg-transparent h-12">
              Sell Crypto
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Your Holdings</h3>
        <div className="space-y-1">
          {mockHoldings.map((holding) => (
            <div
              key={holding.id}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-lg">{holding.symbol}</span>
                  <span className="text-sm text-muted-foreground">{holding.name}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {holding.amount.toFixed(4)} {holding.symbol}
                </div>
              </div>

              <div className="text-right">
                <div className="font-bold text-lg">
                  ${holding.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </div>
                <div
                  className={cn(
                    "flex items-center justify-end gap-1 text-sm font-semibold mt-1",
                    holding.change >= 0 ? "text-primary" : "text-destructive",
                  )}
                >
                  {holding.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  {Math.abs(holding.change).toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Portfolio Distribution</h3>
        <div className="space-y-3">
          {mockHoldings.map((holding) => {
            const percentage = (holding.value / totalValue) * 100
            return (
              <div key={holding.id}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{holding.symbol}</span>
                  <span className="text-sm text-muted-foreground">{percentage.toFixed(1)}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${percentage}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
