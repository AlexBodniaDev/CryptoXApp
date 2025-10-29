"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { TrendingUp, TrendingDown, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import type { CryptoData } from "@/lib/mock-data"
import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface CryptoDetailModalProps {
  crypto: CryptoData | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onBuySell: (crypto: CryptoData, action: "buy" | "sell") => void
}

// Mock chart data for the selected crypto
const generateChartData = (basePrice: number) => {
  const data = []
  let price = basePrice * 0.95
  for (let i = 0; i < 24; i++) {
    price = price + (Math.random() - 0.48) * (basePrice * 0.02)
    data.push({
      time: `${i}:00`,
      price: Number.parseFloat(price.toFixed(2)),
    })
  }
  return data
}

export function CryptoDetailModal({ crypto, open, onOpenChange, onBuySell }: CryptoDetailModalProps) {
  const [isFavorite, setIsFavorite] = useState(crypto?.favorite || false)

  if (!crypto) return null

  const chartData = generateChartData(crypto.price)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-3">
              <span className="text-2xl font-bold">{crypto.symbol}</span>
              <span className="text-lg text-muted-foreground">{crypto.name}</span>
            </DialogTitle>
            <button onClick={() => setIsFavorite(!isFavorite)} className="shrink-0">
              <Star
                className={cn(
                  "h-5 w-5 transition-colors",
                  isFavorite ? "fill-primary text-primary" : "text-muted-foreground",
                )}
              />
            </button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Price Section */}
          <div>
            <div className="text-3xl font-bold text-foreground">
              ${crypto.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div
              className={cn(
                "flex items-center gap-1 text-sm font-medium mt-1",
                crypto.change >= 0 ? "text-primary" : "text-destructive",
              )}
            >
              {crypto.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              {crypto.change >= 0 ? "+" : ""}
              {crypto.change}% (24h)
            </div>
          </div>

          {/* Chart */}
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="price" stroke="rgb(34, 197, 94)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Buy/Sell Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={() => onBuySell(crypto, "buy")}
              className="flex-1 bg-primary hover:bg-primary/90"
              size="lg"
            >
              Buy {crypto.symbol}
            </Button>
            <Button
              onClick={() => onBuySell(crypto, "sell")}
              variant="outline"
              className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              size="lg"
            >
              Sell {crypto.symbol}
            </Button>
          </div>

          <Separator />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Market Cap</div>
              <div className="text-lg font-semibold text-foreground">${crypto.marketCap}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">24h Volume</div>
              <div className="text-lg font-semibold text-foreground">${crypto.volume}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">24h High</div>
              <div className="text-lg font-semibold text-foreground">
                ${crypto.high24h.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">24h Low</div>
              <div className="text-lg font-semibold text-foreground">
                ${crypto.low24h.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Circulating Supply</div>
              <div className="text-lg font-semibold text-foreground">{crypto.circulatingSupply}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Total Supply</div>
              <div className="text-lg font-semibold text-foreground">{crypto.totalSupply}</div>
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">About {crypto.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{crypto.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
