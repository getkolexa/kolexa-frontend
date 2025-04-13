import Link from "next/link"
import { Lock, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import AuthLayout from "@/components/auth-layout"

export default function ChangePasswordPage() {
  return (
    <AuthLayout title="Change Your Password" description="Create a new password for your account">
      <div className="space-y-6 w-full">
        {/* Success message (hidden by default) */}
        <div className="hidden p-4 mb-4 rounded-md bg-green-500/20 border border-green-500/30">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
            <p className="text-sm text-green-300">Your password has been successfully changed.</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="new-password" className="text-sm font-medium text-gray-200">
              New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="new-password"
                type="password"
                placeholder="••••••••"
                className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-10 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="confirm-password" className="text-sm font-medium text-gray-200">
              Confirm New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-10 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>
          </div>
        </div>

        <Button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
          size="lg"
        >
          Change Password
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="text-center text-sm text-gray-400">
          <Link href="/login" className="font-medium text-purple-400 hover:text-purple-300 transition-colors">
            Back to Log In
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
