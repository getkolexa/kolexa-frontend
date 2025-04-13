"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Monitor } from "lucide-react"

export default function SettingsAppearance() {
  const [theme, setTheme] = useState("dark")

  return (
    <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4">
      <h2 className="text-xs font-medium text-white mb-4">Appearance</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-xs font-medium text-white mb-3">Theme</h3>
          <div className="grid grid-cols-3 gap-3">
            <div
              className={`p-3 bg-slate-800/50 border rounded-lg cursor-pointer flex flex-col items-center ${
                theme === "light" ? "border-purple-500" : "border-white/5 hover:border-white/20"
              }`}
              onClick={() => setTheme("light")}
            >
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-2">
                <Sun className="h-6 w-6 text-amber-500" />
              </div>
              <p className="text-xs text-white">Light</p>
            </div>

            <div
              className={`p-3 bg-slate-800/50 border rounded-lg cursor-pointer flex flex-col items-center ${
                theme === "dark" ? "border-purple-500" : "border-white/5 hover:border-white/20"
              }`}
              onClick={() => setTheme("dark")}
            >
              <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center mb-2">
                <Moon className="h-6 w-6 text-purple-400" />
              </div>
              <p className="text-xs text-white">Dark</p>
            </div>

            <div
              className={`p-3 bg-slate-800/50 border rounded-lg cursor-pointer flex flex-col items-center ${
                theme === "system" ? "border-purple-500" : "border-white/5 hover:border-white/20"
              }`}
              onClick={() => setTheme("system")}
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-white to-slate-900 flex items-center justify-center mb-2">
                <Monitor className="h-6 w-6 text-blue-400" />
              </div>
              <p className="text-xs text-white">System</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-medium text-white mb-3">Font Size</h3>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="h-7 text-xs border-white/10 text-white hover:bg-white/5">
              A-
            </Button>
            <div className="flex-1 h-1 bg-slate-800 rounded-full">
              <div className="w-1/2 h-1 bg-purple-500 rounded-full"></div>
            </div>
            <Button variant="outline" size="sm" className="h-7 text-xs border-white/10 text-white hover:bg-white/5">
              A+
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-medium text-white mb-3">Animations</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white">Enable animations</p>
              <p className="text-[10px] text-gray-400">Show animations throughout the interface</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-medium text-white mb-3">Glassmorphism Intensity</h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="70"
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <div className="flex justify-between">
              <span className="text-[10px] text-gray-400">Subtle</span>
              <span className="text-[10px] text-gray-400">Moderate</span>
              <span className="text-[10px] text-gray-400">Strong</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
