import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AuthLayout from "@/components/auth-layout"

export default function ForgotPasswordPage() {
  return (
    <AuthLayout title="Reset Your Password" description="Enter your email to receive a password reset link">
      <div className="space-y-6 w-full">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-200">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-10 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>
          </div>
        </div>

        <Button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
          size="lg"
        >
          Send Reset Link
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="text-center text-sm text-gray-400">
          Remember your password?{" "}
          <Link href="/login" className="font-medium text-purple-400 hover:text-purple-300 transition-colors">
            Back to Log In
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
