import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PricingCard() {
  const features = [
    "Unlimited document uploads",
    "AI-powered chat interface",
    "Quiz generation",
    "Blockchain credential storage",
    "NFT certificate minting",
    "EduFi token rewards",
    "Cross-device synchronization",
  ]

  return (
    <div className="relative max-w-md w-full">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-70"></div>
      <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Full Access</h3>
          <div className="flex items-center justify-center">
            <span className="text-4xl font-bold text-white">₦5,000</span>
            <span className="text-gray-400 ml-2">/month</span>
          </div>
          <div className="text-gray-400 mt-2">No hidden fees</div>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-green-400" />
              </div>
              <span className="ml-3 text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <Link href="/signup" className="w-full">
          <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
            Subscribe Now
          </Button>
        </Link>

        <div className="mt-4 text-center text-gray-400 text-sm">Yearly plan coming soon</div>
      </div>
    </div>
  )
}
