import { Mail, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {/* Email Login */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
        <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-white/10 p-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-6 mx-auto">
            <Mail className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-white text-center mb-4">Email & Password</h3>
          <p className="text-gray-400 text-center mb-6">Traditional login with your email and secure password</p>
          <Link href="/login" className="w-full">
            <Button variant="outline" className="w-full border-white/20 text-black hover:text-white hover:bg-white/10">
              Sign In with Email
            </Button>
          </Link>
        </div>
      </div>

      {/* Google Auth */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
        <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-white/10 p-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white mb-6 mx-auto">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white text-center mb-4">Google Auth</h3>
          <p className="text-gray-400 text-center mb-6">Quick access with your existing Google account</p>
          <Link href="/login" className="w-full">
            <Button variant="outline" className="w-full border-white/20 text-black hover:text-white hover:bg-white/10">
              Sign In with Google
            </Button>
          </Link>
        </div>
      </div>

      {/* Wallet Connect */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-white/20 p-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 mb-6 mx-auto">
            <Lock className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold text-white text-center mb-4">Wallet Connect</h3>
          <p className="text-gray-400 text-center mb-6">Secure Web3 login with your blockchain wallet</p>
          <Link href="/login" className="w-full">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
              Connect Wallet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
