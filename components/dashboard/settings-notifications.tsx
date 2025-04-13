import { Switch } from "@/components/ui/switch"

export default function SettingsNotifications() {
  return (
    <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4">
      <h2 className="text-xs font-medium text-white mb-4">Notification Preferences</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-xs font-medium text-white mb-2">Email Notifications</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white">Learning Updates</p>
                <p className="text-[10px] text-gray-400">Receive updates about your courses and learning progress</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white">Quiz Results</p>
                <p className="text-[10px] text-gray-400">Get notified when your quiz results are ready</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white">Certificate Issuance</p>
                <p className="text-[10px] text-gray-400">Receive notifications when certificates are issued</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white">Account Updates</p>
                <p className="text-[10px] text-gray-400">Important updates about your account</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white">Marketing & Promotions</p>
                <p className="text-[10px] text-gray-400">Receive news, updates, and special offers</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-medium text-white mb-2">In-App Notifications</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white">Chat Responses</p>
                <p className="text-[10px] text-gray-400">Get notified when AI responds to your questions</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white">Token Rewards</p>
                <p className="text-[10px] text-gray-400">Notifications when you earn EduTokens</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white">Learning Reminders</p>
                <p className="text-[10px] text-gray-400">Daily reminders to continue your learning</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white">New Features</p>
                <p className="text-[10px] text-gray-400">Get notified about new platform features</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-medium text-white mb-2">Wallet Notifications</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white">Transaction Updates</p>
                <p className="text-[10px] text-gray-400">Get notified about wallet transactions</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white">Security Alerts</p>
                <p className="text-[10px] text-gray-400">Important security notifications for your wallet</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
