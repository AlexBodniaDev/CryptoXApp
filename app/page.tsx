"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { HomePage } from "@/components/pages/home-page"
import { MarketsPage } from "@/components/pages/markets-page"
import { PortfolioPage } from "@/components/pages/portfolio-page"
import { SettingsPage } from "@/components/pages/settings-page"
import { NotificationsPanel } from "@/components/notifications-panel"
import { ProfileModal } from "@/components/profile-modal"

export default function Home() {
  const [activePage, setActivePage] = useState("home")
  const [theme, setTheme] = useState("dark")
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  return (
    <div className="min-h-screen bg-background">
      <Header onNotificationsClick={() => setShowNotifications(true)} onProfileClick={() => setShowProfile(true)} />
      <main className="container mx-auto px-4 py-6 pb-24">
        {activePage === "home" && <HomePage />}
        {activePage === "markets" && <MarketsPage />}
        {activePage === "portfolio" && <PortfolioPage />}
        {activePage === "settings" && <SettingsPage theme={theme} onThemeChange={setTheme} />}
      </main>
      <Navigation activePage={activePage} onPageChange={setActivePage} />

      <NotificationsPanel open={showNotifications} onClose={() => setShowNotifications(false)} />
      <ProfileModal open={showProfile} onClose={() => setShowProfile(false)} />
    </div>
  )
}
