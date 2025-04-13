"use client"

import { useState } from "react"
import { X, Copy, Twitter, Facebook, Linkedin, Mail, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShareDialogProps {
  onClose: () => void
  messageId: number | null
  darkMode: boolean
}

export default function ShareDialog({ onClose, messageId, darkMode }: ShareDialogProps) {
  const [copied, setCopied] = useState(false)
  const shareUrl = messageId
    ? `https://kolexa.ai/share/message/${messageId}`
    : `https://kolexa.ai/share/chat/blockchain-fundamentals`

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-slate-900/95 border border-white/10 rounded-lg w-full max-w-md p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-white">Share {messageId ? "Message" : "Chat"}</h3>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-white" onClick={onClose}>
            <X className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-1 mb-3">
            <Button
              variant="outline"
              size="sm"
              className="h-7 flex-1 border-white/10 text-white hover:bg-white/5 text-xs"
            >
              <Twitter className="h-3 w-3 mr-1.5" />
              Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-7 flex-1 border-white/10 text-white hover:bg-white/5 text-xs"
            >
              <Facebook className="h-3 w-3 mr-1.5" />
              Facebook
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-7 flex-1 border-white/10 text-white hover:bg-white/5 text-xs"
            >
              <Linkedin className="h-3 w-3 mr-1.5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-7 flex-1 border-white/10 text-white hover:bg-white/5 text-xs"
            >
              <Mail className="h-3 w-3 mr-1.5" />
              Email
            </Button>
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block">Share link</label>
            <div className="flex items-center">
              <div className="flex-1 bg-slate-800 border border-white/10 rounded-l-md px-2 py-1.5 text-xs text-white overflow-hidden">
                <div className="truncate">{shareUrl}</div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-7 rounded-l-none border-white/10 text-white hover:bg-white/5 text-xs"
                onClick={handleCopy}
              >
                {copied ? "Copied!" : <Copy className="h-3 w-3" />}
              </Button>
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block">Permissions</label>
            <div className="space-y-1.5">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="public"
                  name="permissions"
                  className="h-3 w-3 text-purple-500 border-white/10 bg-slate-800 focus:ring-purple-500"
                  defaultChecked
                />
                <label htmlFor="public" className="ml-2 text-xs text-white">
                  Public - Anyone with the link can view
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="restricted"
                  name="permissions"
                  className="h-3 w-3 text-purple-500 border-white/10 bg-slate-800 focus:ring-purple-500"
                />
                <label htmlFor="restricted" className="ml-2 text-xs text-white">
                  Restricted - Only specific people can view
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="wallet"
                  name="permissions"
                  className="h-3 w-3 text-purple-500 border-white/10 bg-slate-800 focus:ring-purple-500"
                />
                <label htmlFor="wallet" className="ml-2 text-xs text-white">
                  Wallet Verified - Only wallet owners can view
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="h-7 border-white/10 text-white hover:bg-white/5 text-xs"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              className="h-7 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 text-xs"
            >
              <LinkIcon className="h-3 w-3 mr-1.5" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
