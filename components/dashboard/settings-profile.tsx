"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera } from "lucide-react"

export default function SettingsProfile() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4">
      <h2 className="text-xs font-medium text-white mb-4">Profile Information</h2>

      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="relative group">
            <Avatar className="h-16 w-16 border-2 border-purple-500">
              <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-medium text-white">Ayomide Johnson</h3>
                <p className="text-xs text-gray-400">Pro Member</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>

            {isEditing ? (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-400">First Name</label>
                    <input
                      type="text"
                      defaultValue="Ayomide"
                      className="w-full h-7 px-2 py-1 text-xs bg-slate-800 border border-white/10 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-400">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Johnson"
                      className="w-full h-7 px-2 py-1 text-xs bg-slate-800 border border-white/10 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-gray-400">Email</label>
                  <input
                    type="email"
                    defaultValue="ayomide@example.com"
                    className="w-full h-7 px-2 py-1 text-xs bg-slate-800 border border-white/10 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-gray-400">Bio</label>
                  <textarea
                    defaultValue="Blockchain enthusiast and Web3 developer learning about decentralized applications."
                    rows={3}
                    className="w-full px-2 py-1 text-xs bg-slate-800 border border-white/10 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    size="sm"
                    className="h-7 text-xs bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] text-gray-400">First Name</p>
                    <p className="text-xs text-white">Ayomide</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400">Last Name</p>
                    <p className="text-xs text-white">Johnson</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-gray-400">Email</p>
                  <p className="text-xs text-white">ayomide@example.com</p>
                </div>

                <div>
                  <p className="text-[10px] text-gray-400">Bio</p>
                  <p className="text-xs text-white">
                    Blockchain enthusiast and Web3 developer learning about decentralized applications.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
