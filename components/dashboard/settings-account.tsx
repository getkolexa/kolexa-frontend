import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function SettingsAccount() {
  return (
    <div className="space-y-4">
      <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4">
        <h2 className="text-xs font-medium text-white mb-4">Account Security</h2>

        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-[10px] text-gray-400">Current Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-7 px-2 py-1 text-xs bg-slate-800 border border-white/10 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] text-gray-400">New Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-7 px-2 py-1 text-xs bg-slate-800 border border-white/10 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] text-gray-400">Confirm New Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-7 px-2 py-1 text-xs bg-slate-800 border border-white/10 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <div className="flex justify-end">
            <Button
              size="sm"
              className="h-7 text-xs bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
            >
              Update Password
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4">
        <h2 className="text-xs font-medium text-white mb-4">Two-Factor Authentication</h2>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-white">Protect your account with 2FA</p>
            <p className="text-[10px] text-gray-400">Add an extra layer of security to your account</p>
          </div>
          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            Enable 2FA
          </Button>
        </div>
      </div>

      <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4">
        <h2 className="text-xs font-medium text-white mb-4">Subscription</h2>

        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-white">Pro Plan</p>
            <p className="text-[10px] text-gray-400">₦5,000/month • Renews on May 15, 2025</p>
          </div>
          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            Manage
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-white">Payment Method</p>
            <p className="text-[10px] text-gray-400">Visa ending in 4242</p>
          </div>
          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            Update
          </Button>
        </div>
      </div>

      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
        <div className="flex items-start">
          <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <h2 className="text-xs font-medium text-red-400 mb-1">Danger Zone</h2>
            <p className="text-[10px] text-gray-300 mb-3">
              Once you delete your account, there is no going back. This action cannot be undone.
            </p>
            <Button
              variant="destructive"
              size="sm"
              className="h-7 text-xs bg-red-600/30 hover:bg-red-600/50 text-white border border-red-500/30"
            >
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
