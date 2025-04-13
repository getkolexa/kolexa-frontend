import { Button } from "@/components/ui/button"
import { Search, Filter, Award, Clock, ChevronDown, Share2, Download, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Credentials - KOLEXAI",
  description: "Your blockchain-verified credentials",
}

export default function CredentialsPage() {
  const credentials = [
    {
      id: 1,
      title: "Blockchain Fundamentals",
      issueDate: "May 10, 2025",
      expiryDate: "May 10, 2027",
      issuer: "KOLEXAI",
      verificationId: "0x3f5e9a7b2c1d8e4f",
      score: 90,
    },
    {
      id: 2,
      title: "Smart Contract Development",
      issueDate: "April 15, 2025",
      expiryDate: "April 15, 2027",
      issuer: "KOLEXAI",
      verificationId: "0x2a4b6c8d0e1f3g5h",
      score: 85,
    },
    {
      id: 3,
      title: "Web3 Integration",
      issueDate: "March 20, 2025",
      expiryDate: "March 20, 2027",
      issuer: "KOLEXAI",
      verificationId: "0x7j9k1l3m5n7p9q0r",
      score: 75,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
        <div>
          <h1 className="text-sm font-semibold text-white mb-1">Credentials</h1>
          <p className="text-xs text-gray-400">Your blockchain-verified certificates and badges</p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <Search className="h-3 w-3 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search credentials..."
              className="py-1 pl-7 pr-3 block w-full text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 bg-slate-800/50 border border-white/10 text-white placeholder-gray-400"
            />
          </div>

          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            <Filter className="h-3 w-3 mr-1" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {credentials.map((credential) => (
          <div
            key={credential.id}
            className="bg-slate-900/80 border border-white/10 rounded-lg p-3 hover:border-purple-500/50 transition-colors"
          >
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                <Award className="h-5 w-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-medium text-white">{credential.title}</h3>
                <p className="text-[10px] text-gray-400 mb-2">
                  Issued on {credential.issueDate} • Expires {credential.expiryDate}
                </p>
                <div className="flex items-center">
                  <div className="px-1.5 py-0.5 text-[8px] bg-purple-500/20 text-purple-300 rounded-full flex items-center mr-2">
                    <span className="mr-0.5">Verified</span>
                    <svg className="h-2 w-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"
                        fill="#8B5CF6"
                        fillOpacity="0.2"
                        stroke="#A78BFA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text-[10px] text-gray-400">ID: {credential.verificationId.substring(0, 8)}...</div>
                </div>
              </div>
              <div className="flex space-x-1">
                <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-white">
                  <Share2 className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-white">
                  <Download className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-white">
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="mt-3 p-2 bg-slate-800/50 rounded-lg">
              <div className="aspect-[3/2] relative bg-gradient-to-r from-purple-900 to-blue-900 rounded-md overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="text-[10px] font-medium text-white mb-1">CERTIFICATE OF COMPLETION</div>
                  <div className="text-[8px] text-gray-300 mb-2">This certifies that</div>
                  <div className="text-xs font-semibold text-white mb-1">Ayomide Johnson</div>
                  <div className="text-[8px] text-gray-300 mb-2">has successfully completed</div>
                  <div className="text-[10px] font-medium text-white mb-2">{credential.title}</div>
                  <div className="text-[8px] text-gray-300">with a score of {credential.score}%</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-medium text-white">Credential Activity</h2>
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="h-6 text-[10px] text-gray-400 hover:text-white">
              <Clock className="h-3 w-3 mr-1" />
              Last 30 days
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-white/10 rounded-lg overflow-hidden">
          <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-3 p-2 border-b border-white/5 text-[10px] font-medium text-gray-400">
            <div className="pl-2">Type</div>
            <div>Credential</div>
            <div>Status</div>
            <div>Date</div>
            <div className="pr-2">Actions</div>
          </div>

          <div className="divide-y divide-white/5">
            {[
              { type: "issue", name: "Blockchain Fundamentals Certificate", status: "Issued", date: "May 10, 2025" },
              { type: "view", name: "Blockchain Fundamentals Certificate", status: "Viewed", date: "May 11, 2025" },
              { type: "share", name: "Blockchain Fundamentals Certificate", status: "Shared", date: "May 12, 2025" },
              {
                type: "issue",
                name: "Smart Contract Development Certificate",
                status: "Issued",
                date: "April 15, 2025",
              },
              {
                type: "verify",
                name: "Smart Contract Development Certificate",
                status: "Verified",
                date: "April 16, 2025",
              },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-3 p-2 hover:bg-slate-800/30 text-xs">
                <div className="pl-2">
                  <Award className="h-4 w-4 text-purple-400" />
                </div>
                <div className="text-white truncate">{item.name}</div>
                <div className="text-gray-400">{item.status}</div>
                <div className="text-gray-400">{item.date}</div>
                <div className="pr-2 flex items-center space-x-1">
                  <Button variant="ghost" size="icon" className="h-5 w-5 text-gray-400 hover:text-white">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
