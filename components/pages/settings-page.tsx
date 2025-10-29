"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Bell, Shield, Globe, Smartphone, Mail, Lock, User } from "lucide-react"
import { useState } from "react"

interface SettingsPageProps {
  theme: string
  onThemeChange: (theme: string) => void
}

export function SettingsPage({ theme, onThemeChange }: SettingsPageProps) {
  const [notifications, setNotifications] = useState(true)
  const [priceAlerts, setPriceAlerts] = useState(true)
  const [biometric, setBiometric] = useState(false)
  const [language, setLanguage] = useState("English")
  const [currency, setCurrency] = useState("USD")

  const handleEditProfile = () => {
    console.log("[v0] Edit profile clicked")
    alert("Edit Profile feature - Coming soon!")
  }

  const handleChangePassword = () => {
    console.log("[v0] Change password clicked")
    alert("Change Password feature - Coming soon!")
  }

  const handleTwoFactor = () => {
    console.log("[v0] Two-factor auth clicked")
    alert("Two-Factor Authentication setup - Coming soon!")
  }

  const handleLanguage = () => {
    const languages = ["English", "Spanish", "French", "German", "Chinese"]
    const currentIndex = languages.indexOf(language)
    const nextLanguage = languages[(currentIndex + 1) % languages.length]
    setLanguage(nextLanguage)
    console.log("[v0] Language changed to:", nextLanguage)
  }

  const handleCurrency = () => {
    const currencies = ["USD", "EUR", "GBP", "JPY", "BTC"]
    const currentIndex = currencies.indexOf(currency)
    const nextCurrency = currencies[(currentIndex + 1) % currencies.length]
    setCurrency(nextCurrency)
    console.log("[v0] Currency changed to:", nextCurrency)
  }

  const handleClearCache = () => {
    console.log("[v0] Clear cache clicked")
    alert("Cache cleared successfully!")
  }

  const handleDeleteAccount = () => {
    console.log("[v0] Delete account clicked")
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      alert("Account deletion initiated - This is a demo, no actual deletion occurred.")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-lg">John Doe</h3>
            <p className="text-sm text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>
        <Button variant="outline" className="w-full bg-transparent" onClick={handleEditProfile}>
          Edit Profile
        </Button>
      </Card>

      <Card className="p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notifications
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Push Notifications</p>
              <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Price Alerts</p>
              <p className="text-sm text-muted-foreground">Get notified of significant price changes</p>
            </div>
            <Switch checked={priceAlerts} onCheckedChange={setPriceAlerts} />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Security
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Biometric Authentication</p>
              <p className="text-sm text-muted-foreground">Use fingerprint or face ID</p>
            </div>
            <Switch checked={biometric} onCheckedChange={setBiometric} />
          </div>
          <Button variant="outline" className="w-full justify-start bg-transparent" onClick={handleChangePassword}>
            <Lock className="h-4 w-4 mr-2" />
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent" onClick={handleTwoFactor}>
            <Smartphone className="h-4 w-4 mr-2" />
            Two-Factor Authentication
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Globe className="h-5 w-5" />
          Preferences
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Dark Mode</p>
              <p className="text-sm text-muted-foreground">Use dark theme</p>
            </div>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={(checked) => onThemeChange(checked ? "dark" : "light")}
            />
          </div>
          <Button variant="outline" className="w-full justify-start bg-transparent" onClick={handleLanguage}>
            <Globe className="h-4 w-4 mr-2" />
            Language: {language}
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent" onClick={handleCurrency}>
            <Mail className="h-4 w-4 mr-2" />
            Currency: {currency}
          </Button>
        </div>
      </Card>

      <Card className="p-6 border-destructive/50">
        <h3 className="font-bold text-lg mb-4 text-destructive">Danger Zone</h3>
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full text-destructive border-destructive/50 hover:bg-destructive/10 bg-transparent"
            onClick={handleClearCache}
          >
            Clear Cache
          </Button>
          <Button
            variant="outline"
            className="w-full text-destructive border-destructive/50 hover:bg-destructive/10 bg-transparent"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </Button>
        </div>
      </Card>
    </div>
  )
}
