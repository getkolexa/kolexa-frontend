"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  Edit,
  Copy,
  ThumbsUp,
  ThumbsDown,
  MoreHorizontal,
  Paperclip,
  ImageIcon,
  Mic,
  Send,
  FileText,
  X,
  FileQuestion,
  Award,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Share2,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import ShareDialog from "./share-dialog"

export default function ChatInterface() {
  const [rightPanelOpen, setRightPanelOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isMobile, setIsMobile] = useState(false)
  const [shareDialogOpen, setShareDialogOpen] = useState(false)
  const [activeMessage, setActiveMessage] = useState(null)
  const messagesEndRef = useRef(null)

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const toggleRightPanel = () => {
    setRightPanelOpen(!rightPanelOpen)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    e.target.style.height = "auto"
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`
  }

  const openShareDialog = (messageId) => {
    setActiveMessage(messageId)
    setShareDialogOpen(true)
  }

  // Sample chat messages for demonstration
  const messages = [
    {
      id: 1,
      sender: "user",
      content: "Can you explain the concept of blockchain in simple terms?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      sender: "ai",
      content:
        "A blockchain is like a digital ledger or record book that's shared across many computers. Each 'block' contains information, and once added to the 'chain', it can't be changed.\n\nThink of it like a shared Google Doc, but once someone adds information, it can't be edited or deleted - only new information can be added. This makes it very secure and trustworthy.\n\nThe key features of blockchain are:\n\n1. **Decentralization**: No single entity controls it\n2. **Transparency**: Everyone can see the records\n3. **Immutability**: Records can't be changed once added\n4. **Security**: Uses cryptography to keep data secure\n\nBlockchain is the technology behind cryptocurrencies like Bitcoin, but it has many other applications like supply chain tracking, voting systems, and digital identity verification.",
      timestamp: "10:31 AM",
    },
    {
      id: 3,
      sender: "user",
      content: "How does this relate to Web3?",
      timestamp: "10:33 AM",
    },
    {
      id: 4,
      sender: "ai",
      content:
        "Web3 is built on blockchain technology and represents the next evolution of the internet. Here's how they relate:\n\nWeb1 (1990s-2000s) was read-only - static websites where users consumed content.\n\nWeb2 (2000s-present) is read-write - interactive platforms like social media where users create content, but centralized companies own and control the data and platforms.\n\nWeb3 is read-write-own - it uses blockchain to give users ownership and control over their data and digital assets. In Web3:\n\n- Users own their data and digital assets through wallets and can take them across platforms\n- Applications are often decentralized (dApps) running on blockchain networks\n- Tokens and cryptocurrencies enable new economic models\n- Trust is built into the system through consensus mechanisms rather than relying on central authorities\n\nSo blockchain is the foundational technology that makes Web3 possible by enabling decentralization, ownership, and trustless interactions between users without needing middlemen or central authorities.",
      timestamp: "10:35 AM",
    },
  ]

  return (
    <div className="flex h-[calc(100vh-3rem)]">
      {/* Main chat area */}
      <div
        className={cn("flex flex-col flex-grow transition-all duration-300", {
          "mr-0": !rightPanelOpen,
          "mr-64": rightPanelOpen && !isMobile,
        })}
      >
        {/* Chat header */}
        <div className="flex items-center justify-between p-2 border-b border-white/10 bg-slate-900/90 backdrop-blur-sm rounded-t-lg">
          <div className="flex items-center">
            <h2 className="text-xs font-medium text-white flex items-center">
              Blockchain Fundamentals
              <Button variant="ghost" size="icon" className="ml-1 h-5 w-5 text-gray-400 hover:text-white">
                <Edit className="h-3 w-3" />
              </Button>
            </h2>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-gray-400 hover:text-white"
              onClick={() => openShareDialog(null)}
            >
              <Share2 className="h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-6 border-white/10 text-white hover:bg-white/5 text-xs"
              onClick={toggleRightPanel}
            >
              {rightPanelOpen ? (
                <>
                  <ChevronRight className="h-3 w-3 mr-1" />
                  <span className="hidden sm:inline">Hide</span>
                </>
              ) : (
                <>
                  <ChevronLeft className="h-3 w-3 mr-1" />
                  <span className="hidden sm:inline">Context</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Chat messages */}
        <div className="flex-grow overflow-y-auto p-3 space-y-3">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex max-w-3xl ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`flex-shrink-0 ${message.sender === "user" ? "ml-2" : "mr-2"}`}>
                  {message.sender === "user" ? (
                    <Avatar className="h-5 w-5">
                      <AvatarImage src="/placeholder.svg?height=20&width=20" alt="User" />
                      <AvatarFallback className="text-[8px]">A</AvatarFallback>
                    </Avatar>
                  ) : (
                    <Avatar className="h-5 w-5">
                      <AvatarImage src="/placeholder.svg?height=20&width=20" alt="AI" />
                      <AvatarFallback className="bg-purple-600 text-[8px]">AI</AvatarFallback>
                    </Avatar>
                  )}
                </div>
                <div>
                  <div
                    className={`relative group p-2 rounded-lg text-xs ${
                      message.sender === "user"
                        ? "bg-purple-600/30 border border-purple-500/30 text-white"
                        : "bg-slate-800/90 backdrop-blur-sm border border-white/10 text-white"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    <div
                      className={`absolute ${message.sender === "user" ? "left-1" : "right-1"} bottom-1 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-0.5`}
                    >
                      {message.sender === "ai" && (
                        <>
                          <Button variant="ghost" size="icon" className="h-4 w-4 text-gray-400 hover:text-white">
                            <Copy className="h-2.5 w-2.5" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-4 w-4 text-gray-400 hover:text-white">
                            <ThumbsUp className="h-2.5 w-2.5" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-4 w-4 text-gray-400 hover:text-white">
                            <ThumbsDown className="h-2.5 w-2.5" />
                          </Button>
                        </>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 text-gray-400 hover:text-white"
                        onClick={() => openShareDialog(message.id)}
                      >
                        <Share2 className="h-2.5 w-2.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-4 w-4 text-gray-400 hover:text-white">
                        <MoreHorizontal className="h-2.5 w-2.5" />
                      </Button>
                    </div>
                  </div>
                  <div
                    className={`text-[10px] text-gray-500 mt-0.5 ${message.sender === "user" ? "text-right" : "text-left"}`}
                  >
                    {message.timestamp}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="p-2 border-t border-white/10 bg-slate-900/90 backdrop-blur-sm rounded-b-lg">
          <div className="relative">
            <div className="absolute bottom-0 left-0 p-1.5 flex space-x-0.5">
              <Button variant="ghost" size="icon" className="h-5 w-5 text-gray-400 hover:text-white">
                <Paperclip className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-5 w-5 text-gray-400 hover:text-white">
                <ImageIcon className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-5 w-5 text-gray-400 hover:text-white">
                <Mic className="h-3 w-3" />
              </Button>
            </div>
            <textarea
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ask anything, or drop a file..."
              className="w-full pl-16 pr-10 py-1.5 bg-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent resize-none overflow-hidden"
              style={{ minHeight: "32px", maxHeight: "120px" }}
              rows={1}
            />
            <div className="absolute bottom-0 right-0 p-1.5">
              <Button
                variant="ghost"
                size="icon"
                className={`h-5 w-5 ${inputValue.trim() ? "text-purple-500 hover:text-purple-400" : "text-gray-400 hover:text-white"}`}
                disabled={!inputValue.trim()}
              >
                <Send className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right utility panel */}
      <div
        className={cn(
          "fixed top-12 bottom-0 right-0 w-64 bg-slate-900/90 backdrop-blur-md border-l border-white/10 transition-transform duration-300 overflow-y-auto",
          {
            "translate-x-0": rightPanelOpen,
            "translate-x-full": !rightPanelOpen,
          },
        )}
      >
        <div className="p-3">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-medium text-white">Context Panel</h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5 text-gray-400 hover:text-white"
              onClick={toggleRightPanel}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>

          <div className="space-y-2">
            {/* File preview */}
            <div className="p-2 bg-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center">
                  <FileText className="h-3 w-3 text-blue-400 mr-1.5" />
                  <span className="text-white text-xs font-medium">blockchain_basics.pdf</span>
                </div>
                <Button variant="ghost" size="icon" className="h-4 w-4 text-gray-400 hover:text-white">
                  <X className="h-2.5 w-2.5" />
                </Button>
              </div>
              <div className="aspect-[4/3] relative bg-slate-700/50 rounded-md overflow-hidden mb-1.5">
                <Image
                  src="/placeholder.svg?height=240&width=320"
                  alt="Document preview"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-[10px] text-gray-400">Added 2 days ago • 15 pages</div>
            </div>

            {/* Generate quiz button */}
            <Button className="w-full h-7 text-xs bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
              <Sparkles className="h-3 w-3 mr-1.5" />
              Generate Quiz
            </Button>

            {/* Issue credential button */}
            <Button variant="outline" className="w-full h-7 text-xs border-white/10 text-white hover:bg-white/5">
              <div className="flex items-center">
                <Award className="h-3 w-3 mr-1.5" />
                Issue Credential
                <div className="ml-1.5 px-1 py-0.5 text-[8px] bg-purple-500/20 text-purple-300 rounded-full flex items-center">
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
              </div>
            </Button>

            {/* Related content */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="text-[10px] font-medium text-gray-400">Related Content</h4>
                <Button variant="ghost" size="icon" className="h-4 w-4 text-gray-400 hover:text-white">
                  <Plus className="h-2.5 w-2.5" />
                </Button>
              </div>
              <div className="space-y-1">
                <div className="p-1.5 bg-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-slate-700/50 cursor-pointer">
                  <div className="flex items-center">
                    <FileText className="h-3 w-3 text-gray-400 mr-1.5" />
                    <span className="text-[10px] text-white">Introduction to Smart Contracts</span>
                  </div>
                </div>
                <div className="p-1.5 bg-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-slate-700/50 cursor-pointer">
                  <div className="flex items-center">
                    <FileQuestion className="h-3 w-3 text-gray-400 mr-1.5" />
                    <span className="text-[10px] text-white">Blockchain Quiz #1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Dialog */}
      {shareDialogOpen && (
        <ShareDialog onClose={() => setShareDialogOpen(false)} messageId={activeMessage} darkMode={true} />
      )}
    </div>
  )
}
