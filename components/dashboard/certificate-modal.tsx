"use client"

import { useState } from "react"
import { X, Download, Share2, ExternalLink, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Certificate {
  id: number
  title: string
  recipient: string
  issueDate: string
  score: number
  verificationId: string
}

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  certificate: Certificate
}

export default function CertificateModal({ isOpen, onClose, certificate }: CertificateModalProps) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://kolexa.ai/verify/${certificate.verificationId}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-slate-900/95 border border-white/10 rounded-lg w-full max-w-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-white">Certificate of Completion</h3>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-white" onClick={onClose}>
            <X className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-6 mb-4">
          <div className="border border-white/20 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="text-xs text-gray-300 mb-2">KOLEXA AI PRESENTS</div>
            <h2 className="text-xl font-bold text-white mb-1">CERTIFICATE OF COMPLETION</h2>
            <div className="w-16 h-0.5 bg-purple-400 mb-4"></div>
            <p className="text-sm text-gray-200 mb-4">This certifies that</p>
            <p className="text-lg font-bold text-white mb-4">{certificate.recipient}</p>
            <p className="text-sm text-gray-200 mb-2">has successfully completed</p>
            <p className="text-lg font-bold text-white mb-4">{certificate.title}</p>
            <p className="text-sm text-gray-200 mb-2">with a score of</p>
            <div className="bg-white/10 rounded-full px-4 py-1 mb-4">
              <p className="text-lg font-bold text-white">{certificate.score}%</p>
            </div>
            <p className="text-sm text-gray-200 mb-4">Issued on {certificate.issueDate}</p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                <svg
                  className="h-6 w-6 text-purple-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
              <div className="text-left">
                <p className="text-xs font-medium text-white">Blockchain Verified</p>
                <p className="text-[10px] text-gray-400 truncate w-40">{certificate.verificationId}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Verification Link</label>
            <div className="flex items-center">
              <div className="flex-1 bg-slate-800 border border-white/10 rounded-l-md px-2 py-1.5 text-xs text-white overflow-hidden">
                <div className="truncate">https://kolexa.ai/verify/{certificate.verificationId}</div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-7 rounded-l-none border-white/10 text-white hover:bg-white/5 text-xs"
                onClick={handleCopy}
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="h-7 flex-1 border-white/10 text-white hover:bg-white/5 text-xs"
            >
              <Share2 className="h-3 w-3 mr-1.5" />
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-7 flex-1 border-white/10 text-white hover:bg-white/5 text-xs"
            >
              <Download className="h-3 w-3 mr-1.5" />
              Download
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-7 flex-1 border-white/10 text-white hover:bg-white/5 text-xs"
            >
              <ExternalLink className="h-3 w-3 mr-1.5" />
              Verify
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
