import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SettingsProfile from "@/components/dashboard/settings-profile"
import SettingsAccount from "@/components/dashboard/settings-account"
import SettingsWallet from "@/components/dashboard/settings-wallet"
import SettingsNotifications from "@/components/dashboard/settings-notifications"
import SettingsAppearance from "@/components/dashboard/settings-appearance"

export const metadata = {
  title: "Settings - KOLEXAI",
  description: "Manage your account settings",
}

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4">
        <h1 className="text-sm font-semibold text-white mb-1">Settings</h1>
        <p className="text-xs text-gray-400">Manage your account preferences and settings</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-5 h-8 mb-4 bg-slate-800/50 border border-white/10 rounded-md p-0.5">
          <TabsTrigger value="profile" className="text-xs h-full rounded-sm">
            Profile
          </TabsTrigger>
          <TabsTrigger value="account" className="text-xs h-full rounded-sm">
            Account
          </TabsTrigger>
          <TabsTrigger value="wallet" className="text-xs h-full rounded-sm">
            Wallet
          </TabsTrigger>
          <TabsTrigger value="notifications" className="text-xs h-full rounded-sm">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="appearance" className="text-xs h-full rounded-sm">
            Appearance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <SettingsProfile />
        </TabsContent>

        <TabsContent value="account">
          <SettingsAccount />
        </TabsContent>

        <TabsContent value="wallet">
          <SettingsWallet />
        </TabsContent>

        <TabsContent value="notifications">
          <SettingsNotifications />
        </TabsContent>

        <TabsContent value="appearance">
          <SettingsAppearance />
        </TabsContent>
      </Tabs>
    </div>
  )
}
