"use client"

import { X, TrendingUp, TrendingDown, Bell, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface NotificationsPanelProps {
  open: boolean
  onClose: () => void
}

const mockNotifications = [
  {
    id: 1,
    type: "price-up",
    title: "Bitcoin is up 5.2%",
    message: "BTC has increased to $67,234",
    time: "2 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "price-down",
    title: "Ethereum dropped 2.1%",
    message: "ETH is now at $3,456",
    time: "15 minutes ago",
    read: false,
  },
  {
    id: 3,
    type: "alert",
    title: "Price Alert Triggered",
    message: "SOL reached your target price of $145",
    time: "1 hour ago",
    read: true,
  },
  {
    id: 4,
    type: "info",
    title: "New Feature Available",
    message: "Check out our new portfolio analytics",
    time: "3 hours ago",
    read: true,
  },
]

export function NotificationsPanel({ open, onClose }: NotificationsPanelProps) {
  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 shadow-2xl animate-in slide-in-from-right">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              <h2 className="text-lg font-bold">Notifications</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {mockNotifications.map((notification) => (
              <Card
                key={notification.id}
                className={cn(
                  "p-4 cursor-pointer hover:bg-secondary/50 transition-colors",
                  !notification.read && "border-primary/50",
                )}
              >
                <div className="flex gap-3">
                  <div
                    className={cn(
                      "h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0",
                      notification.type === "price-up" && "bg-primary/10",
                      notification.type === "price-down" && "bg-destructive/10",
                      notification.type === "alert" && "bg-accent/10",
                      notification.type === "info" && "bg-secondary",
                    )}
                  >
                    {notification.type === "price-up" && <TrendingUp className="h-5 w-5 text-primary" />}
                    {notification.type === "price-down" && <TrendingDown className="h-5 w-5 text-destructive" />}
                    {notification.type === "alert" && <AlertCircle className="h-5 w-5 text-accent" />}
                    {notification.type === "info" && <Bell className="h-5 w-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-sm">{notification.title}</h3>
                      {!notification.read && <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1" />}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                    <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="p-4 border-t border-border">
            <Button variant="outline" className="w-full bg-transparent">
              Mark All as Read
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
