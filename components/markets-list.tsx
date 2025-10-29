"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { mockCryptoData, type CryptoData } from "@/lib/mock-data"
import { CryptoDetailModal } from "@/components/crypto-detail-modal"
import { BuySellModal } from "@/components/buy-sell-modal"

export function MarketsList() {
  const [markets, setMarkets] = useState(mockCryptoData)
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null)
  const [detailModalOpen, setDetailModalOpen] = useState(false)
  const [buySellModalOpen, setBuySellModalOpen] = useState(false)
  const [tradeAction, setTradeAction] = useState<"buy" | "sell">("buy")

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setMarkets(markets.map((m) => (m.id === id ? { ...m, favorite: !m.favorite } : m)))
  }

  const handleCryptoClick = (crypto: CryptoData) => {
    setSelectedCrypto(crypto)
    setDetailModalOpen(true)
  }

  const handleBuySell = (crypto: CryptoData, action: "buy" | "sell") => {
    setSelectedCrypto(crypto)
    setTradeAction(action)
    setDetailModalOpen(false)
    setBuySellModalOpen(true)
  }

  return (
    <>
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Markets</h3>
            <span className="text-xs text-muted-foreground">24h Change</span>
          </div>

          <div className="space-y-3">
            {markets.map((market) => (
              <div
                key={market.id}
                onClick={() => handleCryptoClick(market)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
              >
                <button onClick={(e) => toggleFavorite(market.id, e)} className="shrink-0">
                  <Star
                    className={cn(
                      "h-4 w-4 transition-colors",
                      market.favorite
                        ? "fill-primary text-primary"
                        : "text-muted-foreground group-hover:text-foreground",
                    )}
                  />
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{market.symbol}</span>
                    <span className="text-xs text-muted-foreground truncate">{market.name}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{market.volume}</div>
                </div>

                <div className="text-right">
                  <div className="font-semibold text-foreground">
                    ${market.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-1 text-xs font-medium",
                      market.change >= 0 ? "text-primary" : "text-destructive",
                    )}
                  >
                    {market.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {Math.abs(market.change)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <CryptoDetailModal
        crypto={selectedCrypto}
        open={detailModalOpen}
        onOpenChange={setDetailModalOpen}
        onBuySell={handleBuySell}
      />

      <BuySellModal
        crypto={selectedCrypto}
        open={buySellModalOpen}
        onOpenChange={setBuySellModalOpen}
        defaultAction={tradeAction}
      />
    </>
  )
}
