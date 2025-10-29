"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts"

const timeframes = ["1H", "1D", "1W", "1M", "1Y", "ALL"]

const generateMockData = (points: number) => {
  const data = []
  let value = 67000
  for (let i = 0; i < points; i++) {
    value += (Math.random() - 0.48) * 1000
    data.push({ value })
  }
  return data
}

export function TradingChart() {
  const [timeframe, setTimeframe] = useState("1D")
  const [data, setData] = useState(generateMockData(50))

  const handleTimeframeChange = (tf: string) => {
    setTimeframe(tf)
    const points =
      tf === "1H" ? 24 : tf === "1D" ? 50 : tf === "1W" ? 168 : tf === "1M" ? 720 : tf === "1Y" ? 365 : 1000
    setData(generateMockData(points))
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">BTC/USD</h3>
            <p className="text-sm text-muted-foreground">Bitcoin to US Dollar</p>
          </div>
          <div className="flex gap-1 p-1 bg-secondary rounded-lg">
            {timeframes.map((tf) => (
              <Button
                key={tf}
                variant="ghost"
                size="sm"
                className={cn(
                  "h-8 px-3 text-xs font-medium",
                  timeframe === tf && "bg-primary text-primary-foreground hover:bg-primary/90",
                )}
                onClick={() => handleTimeframeChange(tf)}
              >
                {tf}
              </Button>
            ))}
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <YAxis hide domain={["dataMin", "dataMax"]} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="rgb(74, 222, 128)"
                strokeWidth={2}
                dot={false}
                animationDuration={300}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">24h High</p>
            <p className="text-sm font-semibold mt-1">$68,234</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">24h Low</p>
            <p className="text-sm font-semibold mt-1">$65,123</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">24h Volume</p>
            <p className="text-sm font-semibold mt-1">$28.5B</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Market Cap</p>
            <p className="text-sm font-semibold mt-1">$1.32T</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
