import { Bell, X, FileText, Award, MessageSquare, Wallet, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NotificationsPanelProps {
  darkMode: boolean
}

export default function NotificationsPanel({ darkMode }: NotificationsPanelProps) {
  const notifications = [
    {
      id: 1,
      type: "message",
      title: "New AI Response",
      description: "Your question about smart contracts has been answered",
      time: "2 minutes ago",
      read: false,
      icon: MessageSquare,
    },
    {
      id: 2,
      type: "credential",
      title: "Certificate Issued",
      description: "You've earned a Blockchain Fundamentals certificate",
      time: "1 hour ago",
      read: false,
      icon: Award,
    },
    {
      id: 3,
      type: "quiz",
      title: "Quiz Generated",
      description: "A new quiz on Web3 concepts is ready for you",
      time: "3 hours ago",
      read: true,
      icon: FileText,
    },
    {
      id: 4,
      type: "wallet",
      title: "Tokens Received",
      description: "You've earned 25 EduTokens for completing a course",
      time: "Yesterday",
      read: true,
      icon: Wallet,
    },
    {
      id: 5,
      type: "achievement",
      title: "Achievement Unlocked",
      description: "You've completed 5 consecutive days of learning",
      time: "2 days ago",
      read: true,
      icon: Star,
    },
  ]

  return (
    <div
      className={`absolute right-0 mt-1 w-72 rounded-md shadow-lg py-1 ${
        darkMode ? "bg-slate-800/95 border border-white/10" : "bg-white/95 border border-slate-200/50"
      } backdrop-blur-sm z-50 max-h-[70vh] overflow-y-auto`}
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
        <h3 className={`text-xs font-medium ${darkMode ? "text-white" : "text-slate-800"}`}>Notifications</h3>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="h-5 w-5 text-gray-400 hover:text-white">
            <Bell className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-5 w-5 text-gray-400 hover:text-white">
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <div className="divide-y divide-white/5">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`px-3 py-2 hover:bg-white/5 cursor-pointer ${!notification.read ? "bg-purple-500/10" : ""}`}
          >
            <div className="flex items-start">
              <div
                className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center ${
                  notification.type === "message"
                    ? "bg-blue-500/20 text-blue-400"
                    : notification.type === "credential"
                      ? "bg-purple-500/20 text-purple-400"
                      : notification.type === "quiz"
                        ? "bg-green-500/20 text-green-400"
                        : notification.type === "wallet"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-pink-500/20 text-pink-400"
                }`}
              >
                <notification.icon className="h-3 w-3" />
              </div>
              <div className="ml-2 flex-1 min-w-0">
                <p className={`text-xs font-medium ${darkMode ? "text-white" : "text-slate-800"}`}>
                  {notification.title}
                </p>
                <p className={`text-[10px] ${darkMode ? "text-gray-400" : "text-slate-500"} truncate`}>
                  {notification.description}
                </p>
                <p className={`text-[10px] ${darkMode ? "text-gray-500" : "text-slate-400"} mt-0.5`}>
                  {notification.time}
                </p>
              </div>
              {!notification.read && <div className="ml-2 h-1.5 w-1.5 rounded-full bg-purple-500"></div>}
            </div>
          </div>
        ))}
      </div>

      <div className="px-3 py-2 border-t border-white/10">
        <Button
          variant="ghost"
          className={`w-full justify-center text-xs ${
            darkMode
              ? "text-gray-400 hover:text-white hover:bg-white/5"
              : "text-slate-600 hover:text-slate-800 hover:bg-slate-200/50"
          }`}
        >
          View all notifications
        </Button>
      </div>
    </div>
  )
}
