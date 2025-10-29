"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { CryptoData } from "@/lib/mock-data"
import { useState } from "react"
import { toast } from "sonner"

interface BuySellModalProps {
  crypto: CryptoData | null
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultAction?: "buy" | "sell"
}

export function BuySellModal({ crypto, open, onOpenChange, defaultAction = "buy" }: BuySellModalProps) {
  const [amount, setAmount] = useState("")
  const [usdValue, setUsdValue] = useState("")

  if (!crypto) return null

  const handleAmountChange = (value: string) => {
    setAmount(value)
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setUsdValue((numValue * crypto.price).toFixed(2))
    } else {
      setUsdValue("")
    }
  }

  const handleUsdChange = (value: string) => {
    setUsdValue(value)
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setAmount((numValue / crypto.price).toFixed(8))
    } else {
      setAmount("")
    }
  }

  const handleTrade = (action: "buy" | "sell") => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      toast.error("Please enter a valid amount")
      return
    }

    toast.success(`Successfully ${action === "buy" ? "bought" : "sold"} ${amount} ${crypto.symbol} for $${usdValue}`, {
      description: `Transaction completed at $${crypto.price.toLocaleString("en-US", { minimumFractionDigits: 2 })} per ${crypto.symbol}`,
    })

    setAmount("")
    setUsdValue("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            Trade {crypto.symbol} - {crypto.name}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={defaultAction} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
          </TabsList>

          <TabsContent value="buy" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="buy-amount">Amount ({crypto.symbol})</Label>
              <Input
                id="buy-amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="buy-usd">Total (USD)</Label>
              <Input
                id="buy-usd"
                type="number"
                placeholder="0.00"
                value={usdValue}
                onChange={(e) => handleUsdChange(e.target.value)}
              />
            </div>

            <div className="text-sm text-muted-foreground">
              Current Price: ${crypto.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </div>

            <Button onClick={() => handleTrade("buy")} className="w-full bg-primary hover:bg-primary/90" size="lg">
              Buy {crypto.symbol}
            </Button>
          </TabsContent>

          <TabsContent value="sell" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="sell-amount">Amount ({crypto.symbol})</Label>
              <Input
                id="sell-amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sell-usd">Total (USD)</Label>
              <Input
                id="sell-usd"
                type="number"
                placeholder="0.00"
                value={usdValue}
                onChange={(e) => handleUsdChange(e.target.value)}
              />
            </div>

            <div className="text-sm text-muted-foreground">
              Current Price: ${crypto.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </div>

            <Button
              onClick={() => handleTrade("sell")}
              variant="outline"
              className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              size="lg"
            >
              Sell {crypto.symbol}
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
