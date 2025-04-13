import { Button } from "@/components/ui/button"
import { Wallet, ExternalLink, Copy, RefreshCw, Clock, ArrowUpRight, ArrowDownRight } from "lucide-react"

export default function SettingsWallet() {
  const transactions = [
    {
      id: 1,
      type: "received",
      amount: "+25 EDT",
      description: "Quiz completion reward",
      date: "Today, 10:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      type: "sent",
      amount: "-10 EDT",
      description: "Certificate issuance fee",
      date: "Yesterday, 3:15 PM",
      status: "Confirmed",
    },
    {
      id: 3,
      type: "received",
      amount: "+50 EDT",
      description: "Course completion bonus",
      date: "May 1, 2025",
      status: "Confirmed",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-medium text-white">Connected Wallet</h2>
          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            <RefreshCw className="h-2.5 w-2.5 mr-1" />
            Refresh
          </Button>
        </div>

        <div className="flex items-center justify-between p-3 bg-slate-800/50 border border-white/5 rounded-lg mb-3">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
              <Wallet className="h-4 w-4 text-purple-400" />
            </div>
            <div>
              <div className="flex items-center">
                <p className="text-xs text-white mr-1.5">0x1a2b3c4d5e6f7g8h9i0j</p>
                <Button variant="ghost" size="icon" className="h-4 w-4 text-gray-400 hover:text-white">
                  <Copy className="h-2.5 w-2.5" />
                </Button>
              </div>
              <p className="text-[10px] text-gray-400">Connected 2 months ago</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-6 text-[10px] text-gray-400 hover:text-white">
            <ExternalLink className="h-2.5 w-2.5 mr-1" />
            View
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 bg-slate-800/50 border border-white/5 rounded-lg">
            <p className="text-[10px] text-gray-400 mb-1">ETH Balance</p>
            <p className="text-sm font-medium text-white">1.25 ETH</p>
            <p className="text-[10px] text-gray-400">≈ $3,750.00 USD</p>
          </div>
          <div className="p-3 bg-slate-800/50 border border-white/5 rounded-lg">
            <p className="text-[10px] text-gray-400 mb-1">EduTokens (EDT)</p>
            <p className="text-sm font-medium text-white">250 EDT</p>
            <p className="text-[10px] text-gray-400">≈ $25.00 USD</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button
            size="sm"
            className="h-7 flex-1 text-xs bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
          >
            Send
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-7 flex-1 text-xs border-white/10 text-white hover:bg-white/5"
          >
            Receive
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-7 flex-1 text-xs border-white/10 text-white hover:bg-white/5"
          >
            Buy EDT
          </Button>
        </div>
      </div>

      <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-medium text-white">Recent Transactions</h2>
          <Button variant="ghost" size="sm" className="h-6 text-[10px] text-gray-400 hover:text-white">
            <Clock className="h-2.5 w-2.5 mr-1" />
            View All
          </Button>
        </div>

        <div className="space-y-2">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-2 hover:bg-slate-800/30 rounded-md"
            >
              <div className="flex items-center">
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center mr-2 ${
                    transaction.type === "received" ? "bg-green-500/20" : "bg-red-500/20"
                  }`}
                >
                  {transaction.type === "received" ? (
                    <ArrowDownRight
                      className={`h-3 w-3 ${transaction.type === "received" ? "text-green-400" : "text-red-400"}`}
                    />
                  ) : (
                    <ArrowUpRight
                      className={`h-3 w-3 ${transaction.type === "received" ? "text-green-400" : "text-red-400"}`}
                    />
                  )}
                </div>
                <div>
                  <p className="text-xs text-white">{transaction.description}</p>
                  <p className="text-[10px] text-gray-400">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-xs font-medium ${
                    transaction.type === "received" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {transaction.amount}
                </p>
                <p className="text-[10px] text-gray-400">{transaction.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
