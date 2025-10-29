"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Star, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { mockCryptoData, type CryptoData } from "@/lib/mock-data"
import { CryptoDetailModal } from "@/components/crypto-detail-modal"
import { BuySellModal } from "@/components/buy-sell-modal"

export function MarketsPage() {
  const [markets, setMarkets] = useState(mockCryptoData)
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState<"all" | "favorites">("all")
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

  const filteredMarkets = markets.filter((market) => {
    const matchesSearch =
      market.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filter === "all" || (filter === "favorites" && market.favorite)
    return matchesSearch && matchesFilter
  })

  return (
    <>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Markets</h1>
          <p className="text-muted-foreground">Track cryptocurrency prices and trends</p>
        </div>

        <Card className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search cryptocurrencies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className={cn(filter === "all" && "bg-primary text-primary-foreground")}
              >
                All
              </Button>
              <Button
                variant={filter === "favorites" ? "default" : "outline"}
                onClick={() => setFilter("favorites")}
                className={cn(filter === "favorites" && "bg-primary text-primary-foreground")}
              >
                Favorites
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-1">
            {filteredMarkets.map((market) => (
              <div
                key={market.id}
                onClick={() => handleCryptoClick(market)}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
              >
                <button onClick={(e) => toggleFavorite(market.id, e)} className="shrink-0">
                  <Star
                    className={cn(
                      "h-5 w-5 transition-colors",
                      market.favorite
                        ? "fill-primary text-primary"
                        : "text-muted-foreground group-hover:text-foreground",
                    )}
                  />
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">{market.symbol}</span>
                    <span className="text-sm text-muted-foreground truncate">{market.name}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                    <span>Vol: ${market.volume}</span>
                    <span>MCap: ${market.marketCap}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-bold text-lg">
                    $
                    {market.price.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: market.price < 1 ? 4 : 2,
                    })}
                  </div>
                  <div
                    className={cn(
                      "flex items-center justify-end gap-1 text-sm font-semibold mt-1",
                      market.change >= 0 ? "text-primary" : "text-destructive",
                    )}
                  >
                    {market.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    {Math.abs(market.change).toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

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
