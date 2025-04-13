"use client"

import {
  FolderOpen,
  FileText,
  FileQuestion,
  Award,
  MoreHorizontal,
  Globe,
  Lock,
  Share2,
  Edit,
  Trash,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

interface LibraryCardProps {
  library: {
    id: number
    title: string
    description: string
    items: number
    lastUpdated: string
    isPublic: boolean
  }
}

export default function LibraryCard({ library }: LibraryCardProps) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Link href={`/dashboard/library/${library.id}`}>
      <div className="group bg-slate-900/80 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-colors h-full">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
              <FolderOpen className="h-4 w-4 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xs font-medium text-white group-hover:text-purple-400 transition-colors">
                {library.title}
              </h3>
              <p className="text-[10px] text-gray-400">{library.description}</p>
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
                    // Edit action
                  }}
                >
                  <Edit className="h-3 w-3 mr-2" />
                  Edit
                </button>
                <button
                  className="flex items-center w-full px-3 py-1.5 text-left text-xs text-white hover:bg-white/5"
                  onClick={(e) => {
                    e.preventDefault()
                    // Share action
                  }}
                >
                  <Share2 className="h-3 w-3 mr-2" />
                  Share
                </button>
                <button
                  className="flex items-center w-full px-3 py-1.5 text-left text-xs text-red-400 hover:bg-white/5"
                  onClick={(e) => {
                    e.preventDefault()
                    // Delete action
                  }}
                >
                  <Trash className="h-3 w-3 mr-2" />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <FileText className="h-3.5 w-3.5 text-gray-400 mr-1" />
              <span className="text-[10px] text-gray-400">{Math.floor(library.items * 0.6)}</span>
            </div>
            <div className="flex items-center">
              <FileQuestion className="h-3.5 w-3.5 text-gray-400 mr-1" />
              <span className="text-[10px] text-gray-400">{Math.floor(library.items * 0.3)}</span>
            </div>
            <div className="flex items-center">
              <Award className="h-3.5 w-3.5 text-gray-400 mr-1" />
              <span className="text-[10px] text-gray-400">{Math.floor(library.items * 0.1)}</span>
            </div>
          </div>

          <div className="flex items-center">
            {library.isPublic ? (
              <Globe className="h-3.5 w-3.5 text-gray-400" />
            ) : (
              <Lock className="h-3.5 w-3.5 text-gray-400" />
            )}
            <span className="text-[10px] text-gray-400 ml-1">{library.lastUpdated}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
