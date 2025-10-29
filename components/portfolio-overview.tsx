"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function PortfolioOverview() {
  const [showBalance, setShowBalance] = useState(true)
  const totalValue = 45678.92
  const change = 2345.67
  const changePercent = 5.42

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
            <div className="flex items-center gap-2 mt-1">
              <h2 className="text-3xl font-bold text-foreground">
                {showBalance ? `$${totalValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}` : "••••••"}
              </h2>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowBalance(!showBalance)}>
                {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-semibold">+{changePercent}%</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-primary font-medium">
            +${change.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </span>
          <span className="text-muted-foreground">Today</span>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">Buy Crypto</Button>
          <Button variant="outline" className="font-semibold bg-transparent">
            Sell Crypto
          </Button>
        </div>
      </div>
    </Card>
  )
}
