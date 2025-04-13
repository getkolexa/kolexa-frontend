"use client"

import { MessageSquare, MoreHorizontal, FileText, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ChatCardProps {
  chat: {
    id: number
    title: string
    lastMessage: string
    lastActive: string
    messages: number
    library: string
  }
}

export default function ChatCard({ chat }: ChatCardProps) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Link href={`/dashboard/chats/${chat.id}`}>
      <div className="group bg-slate-900/80 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-colors h-full">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
              <MessageSquare className="h-4 w-4 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xs font-medium text-white group-hover:text-purple-400 transition-colors">
                {chat.title}
              </h3>
              <p className="text-[10px] text-gray-400">
                {chat.messages} messages • {chat.library}
              </p>
            </div>
          </div>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-gray-400 hover:text-white"
              onClick={(e) => {
                e.preventDefault()
                setShowMenu(!showMenu)
              }}
            >
              <MoreHorizontal className="h-3 w-3" />
            </Button>

            {showMenu && (
              <div className="absolute right-0 mt-1 w-36 rounded-md shadow-lg py-1 bg-slate-800/95 border border-white/10 backdrop-blur-sm z-50">
                <button
                  className="flex items-center w-full px-3 py-1.5 text-left text-xs text-white hover:bg-white/5"
                  onClick={(e) => {
                    e.preventDefault()
                    // View action
                  }}
                >
                  <MessageSquare className="h-3 w-3 mr-2" />
                  View Chat
                </button>
                <button
                  className="flex items-center w-full px-3 py-1.5 text-left text-xs text-white hover:bg-white/5"
                  onClick={(e) => {
                    e.preventDefault()
                    // Export action
                  }}
                >
                  <FileText className="h-3 w-3 mr-2" />
                  Export Chat
                </button>
                <button
                  className="flex items-center w-full px-3 py-1.5 text-left text-xs text-red-400 hover:bg-white/5"
                  onClick={(e) => {
                    e.preventDefault()
                    // Delete action
                  }}
                >
                  <Trash className="h-3 w-3 mr-2" />
                  Delete Chat
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-3 flex items-center space-x-2">
          <Avatar className="h-5 w-5">
            <AvatarImage src="/placeholder.svg?height=20&width=20" alt="AI" />
            <AvatarFallback className="bg-purple-600 text-[8px]">AI</AvatarFallback>
          </Avatar>
          <div className="flex-1 p-2 bg-slate-800/50 rounded-lg text-[10px] text-gray-300 truncate">
            {chat.lastMessage}
          </div>
        </div>

        <div className="mt-2 text-right">
          <span className="text-[10px] text-gray-400">{chat.lastActive}</span>
        </div>
      </div>
    </Link>
  )
}
