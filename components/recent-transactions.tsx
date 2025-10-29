"use client"

import { Card } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const mockTransactions = [
  { id: 1, type: "buy", coin: "BTC", amount: 0.0234, value: 1567.89, time: "2 hours ago", status: "completed" },
  { id: 2, type: "sell", coin: "ETH", amount: 1.5, value: 5185.17, time: "5 hours ago", status: "completed" },
  { id: 3, type: "buy", coin: "SOL", amount: 25, value: 3641.75, time: "1 day ago", status: "completed" },
  { id: 4, type: "buy", coin: "BNB", amount: 5, value: 2946.15, time: "2 days ago", status: "completed" },
]

export function RecentTransactions() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <button className="text-sm text-primary hover:underline">View All</button>
        </div>

        <div className="space-y-3">
          {mockTransactions.map((tx) => (
            <div key={tx.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  tx.type === "buy" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive",
                )}
              >
                {tx.type === "buy" ? <ArrowDownLeft className="h-5 w-5" /> : <ArrowUpRight className="h-5 w-5" />}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold capitalize">{tx.type}</span>
                  <span className="text-sm text-muted-foreground">{tx.coin}</span>
                </div>
                <p className="text-xs text-muted-foreground">{tx.time}</p>
              </div>

              <div className="text-right">
                <div className="font-semibold">
                  {tx.type === "buy" ? "-" : "+"}${tx.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </div>
                <p className="text-xs text-muted-foreground">
                  {tx.amount} {tx.coin}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
