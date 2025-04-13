import { MessageSquare, Edit, Trash2, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChatListProps {
  darkMode: boolean
}

export default function ChatList({ darkMode }: ChatListProps) {
  const chats = [
    { id: 1, title: "Blockchain Fundamentals", active: true },
    { id: 2, title: "Smart Contract Security" },
    { id: 3, title: "Web3 Development Basics" },
    { id: 4, title: "Cryptography Principles" },
    { id: 5, title: "DeFi Concepts" },
  ]

  return (
    <div className="space-y-1">
      <Button
        className={`w-full justify-start ${darkMode ? "bg-white/10 text-white hover:bg-white/20" : "bg-slate-200/50 text-slate-800 hover:bg-slate-200/80"}`}
      >
        <MessageSquare className="h-4 w-4 mr-2" />
        New Chat
      </Button>

      <div className="mt-2">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`group flex items-center justify-between px-3 py-2 rounded-md ${
              chat.active
                ? darkMode
                  ? "bg-purple-500/20 text-white"
                  : "bg-purple-100 text-slate-800"
                : darkMode
                  ? "text-gray-400 hover:text-white hover:bg-white/10"
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-200/50"
            }`}
          >
            <div className="flex items-center overflow-hidden">
              <MessageSquare className="h-4 w-4 flex-shrink-0 mr-2" />
              <span className="truncate">{chat.title}</span>
            </div>
            <div
              className={`flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? "text-gray-400" : "text-slate-500"}`}
            >
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Edit className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Trash2 className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Share2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
