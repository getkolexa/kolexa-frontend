"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Home,
  Settings,
  Search,
  Bell,
  ChevronRight,
  Menu,
  X,
  LogOut,
  HelpCircle,
  Wallet,
  Moon,
  Sun,
  MessageSquare,
  FolderOpen,
  BookOpen,
  Award,
  BarChart2,
  Plus,
  User,
  FileText,
  Trash,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import NotificationsPanel from "./notifications-panel"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [walletMenuOpen, setWalletMenuOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const pathname = usePathname()

  const userMenuRef = useRef(null)
  const walletMenuRef = useRef(null)
  const notificationsRef = useRef(null)

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

  // Close sidebar on mobile
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false)
    }
  }, [isMobile])

  // Handle clicks outside of menus
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false)
      }
      if (walletMenuRef.current && !walletMenuRef.current.contains(event.target)) {
        setWalletMenuOpen(false)
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setNotificationsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const toggleUserMenu = (e) => {
    e.stopPropagation()
    setUserMenuOpen(!userMenuOpen)
    setWalletMenuOpen(false)
    setNotificationsOpen(false)
  }

  const toggleWalletMenu = (e) => {
    e.stopPropagation()
    setWalletMenuOpen(!walletMenuOpen)
    setUserMenuOpen(false)
    setNotificationsOpen(false)
  }

  const toggleNotifications = (e) => {
    e.stopPropagation()
    setNotificationsOpen(!notificationsOpen)
    setUserMenuOpen(false)
    setWalletMenuOpen(false)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const mainNavItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: MessageSquare, label: "Chats", href: "/dashboard/chats" },
    { icon: FolderOpen, label: "Library", href: "/dashboard/library" },
    { icon: BookOpen, label: "Courses", href: "/dashboard/courses" },
    { icon: Award, label: "Credentials", href: "/dashboard/credentials" },
    { icon: BarChart2, label: "Progress", href: "/dashboard/progress" },
  ]

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100"
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 ${
            darkMode ? "bg-purple-600" : "bg-purple-300"
          } rounded-full mix-blend-multiply filter blur-3xl opacity-10`}
        ></div>
        <div
          className={`absolute top-1/3 -left-20 w-80 h-80 ${
            darkMode ? "bg-blue-600" : "bg-blue-300"
          } rounded-full mix-blend-multiply filter blur-3xl opacity-10`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 ${
            darkMode ? "bg-cyan-600" : "bg-cyan-300"
          } rounded-full mix-blend-multiply filter blur-3xl opacity-10`}
        ></div>

        {/* Blockchain nodes background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="0.8" fill={darkMode ? "white" : "black"} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Mobile sidebar toggle */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className={`fixed top-3 left-3 z-50 p-1.5 rounded-md ${
            darkMode ? "bg-slate-800/90 text-white" : "bg-white/90 text-slate-800"
          } backdrop-blur-sm border ${darkMode ? "border-white/10" : "border-slate-200/50"}`}
        >
          {sidebarOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 transition-all duration-300 transform",
          {
            "w-52": sidebarOpen && !isMobile,
            "w-14": !sidebarOpen && !isMobile,
            "w-60 translate-x-0": sidebarOpen && isMobile,
            "w-0 -translate-x-full": !sidebarOpen && isMobile,
          },
          darkMode ? "bg-slate-900/90 border-r border-white/10" : "bg-white/90 border-r border-slate-200/50",
          "backdrop-blur-md",
        )}
      >
        <div className="flex flex-col h-full">
          <div className={cn("flex items-center h-12 px-3", !sidebarOpen && !isMobile && "justify-center")}>
            <Link href="/" className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">K</span>
              </div>
              {(sidebarOpen || isMobile) && (
                <span className={`ml-2 text-sm font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>
                  KOLEX<span className="text-purple-500">AI</span>
                </span>
              )}
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto py-3">
            <nav className="px-2 space-y-0.5">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center px-2 py-1.5 rounded-md text-xs font-medium transition-colors",
                    pathname === item.href
                      ? darkMode
                        ? "bg-white/10 text-white"
                        : "bg-slate-200/70 text-slate-800"
                      : darkMode
                        ? "text-gray-400 hover:text-white hover:bg-white/5"
                        : "text-slate-600 hover:text-slate-800 hover:bg-slate-200/50",
                    !sidebarOpen && !isMobile && "justify-center px-2",
                  )}
                >
                  <item.icon
                    className={cn("flex-shrink-0", sidebarOpen || isMobile ? "h-3.5 w-3.5 mr-2" : "h-4 w-4")}
                  />
                  {(sidebarOpen || isMobile) && <span>{item.label}</span>}
                </Link>
              ))}
            </nav>

            <div className={cn("mt-4", sidebarOpen || isMobile ? "px-3" : "px-2")}>
              <div
                className={cn(
                  "py-1.5",
                  sidebarOpen || isMobile ? "px-2" : "px-0",
                  darkMode ? "text-gray-400" : "text-slate-500",
                  !sidebarOpen && !isMobile && "text-center",
                )}
              >
                {(sidebarOpen || isMobile) && (
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium uppercase tracking-wider">Recent Chats</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 text-gray-400 hover:text-white hover:bg-white/5"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
              <div className="space-y-0.5">
                {["Blockchain Basics", "Smart Contracts", "Web3 Development"].map((chat, index) => (
                  <div
                    key={index}
                    className={cn(
                      "group flex items-center rounded-md text-xs",
                      index === 0
                        ? darkMode
                          ? "bg-purple-500/20 text-white"
                          : "bg-purple-100 text-slate-800"
                        : darkMode
                          ? "text-gray-400 hover:text-white hover:bg-white/5"
                          : "text-slate-600 hover:text-slate-800 hover:bg-slate-200/50",
                      sidebarOpen || isMobile ? "px-2 py-1.5" : "justify-center p-1.5",
                    )}
                  >
                    <MessageSquare
                      className={cn("flex-shrink-0", sidebarOpen || isMobile ? "h-3.5 w-3.5 mr-2" : "h-3.5 w-3.5")}
                    />
                    {(sidebarOpen || isMobile) && (
                      <>
                        <span className="truncate flex-1">{chat}</span>
                        <div className="flex space-x-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 text-gray-400 hover:text-white hover:bg-white/10"
                          >
                            <FileText className="h-2.5 w-2.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 text-gray-400 hover:text-white hover:bg-white/10"
                          >
                            <Trash className="h-2.5 w-2.5" />
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={cn("mt-4", sidebarOpen || isMobile ? "px-3" : "px-2")}>
              <div
                className={cn(
                  "py-1.5",
                  sidebarOpen || isMobile ? "px-2" : "px-0",
                  darkMode ? "text-gray-400" : "text-slate-500",
                  !sidebarOpen && !isMobile && "text-center",
                )}
              >
                {(sidebarOpen || isMobile) && (
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium uppercase tracking-wider">Libraries</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 text-gray-400 hover:text-white hover:bg-white/5"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
              <div className="space-y-0.5">
                {["Blockchain", "Smart Contracts", "DeFi"].map((library, index) => (
                  <div
                    key={index}
                    className={cn(
                      "group flex items-center rounded-md text-xs",
                      darkMode
                        ? "text-gray-400 hover:text-white hover:bg-white/5"
                        : "text-slate-600 hover:text-slate-800 hover:bg-slate-200/50",
                      sidebarOpen || isMobile ? "px-2 py-1.5" : "justify-center p-1.5",
                    )}
                  >
                    <FolderOpen
                      className={cn("flex-shrink-0", sidebarOpen || isMobile ? "h-3.5 w-3.5 mr-2" : "h-3.5 w-3.5")}
                    />
                    {(sidebarOpen || isMobile) && (
                      <>
                        <span className="truncate flex-1">{library}</span>
                        <div className="flex space-x-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 text-gray-400 hover:text-white hover:bg-white/10"
                          >
                            <FileText className="h-2.5 w-2.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 text-gray-400 hover:text-white hover:bg-white/10"
                          >
                            <Trash className="h-2.5 w-2.5" />
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-2 space-y-0.5">
            <Link
              href="/dashboard/settings"
              className={cn(
                "flex items-center rounded-md text-xs font-medium transition-colors",
                darkMode
                  ? "text-gray-400 hover:text-white hover:bg-white/5"
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-200/50",
                sidebarOpen || isMobile ? "px-2 py-1.5" : "justify-center p-1.5",
              )}
            >
              <Settings className={cn("flex-shrink-0", sidebarOpen || isMobile ? "h-3.5 w-3.5 mr-2" : "h-4 w-4")} />
              {(sidebarOpen || isMobile) && <span>Settings</span>}
            </Link>

            <div
              className={cn(
                "flex items-center rounded-md text-xs font-medium transition-colors cursor-pointer",
                darkMode
                  ? "text-gray-400 hover:text-white hover:bg-white/5"
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-200/50",
                sidebarOpen || isMobile ? "px-2 py-1.5" : "justify-center p-1.5",
              )}
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <>
                  <Sun className={cn("flex-shrink-0", sidebarOpen || isMobile ? "h-3.5 w-3.5 mr-2" : "h-4 w-4")} />
                  {(sidebarOpen || isMobile) && <span>Light Mode</span>}
                </>
              ) : (
                <>
                  <Moon className={cn("flex-shrink-0", sidebarOpen || isMobile ? "h-3.5 w-3.5 mr-2" : "h-4 w-4")} />
                  {(sidebarOpen || isMobile) && <span>Dark Mode</span>}
                </>
              )}
            </div>

            <div className="pt-1.5 mt-1.5 border-t border-white/10">
              <div className={cn("flex items-center", !sidebarOpen && !isMobile && "justify-center")}>
                <Avatar className="h-6 w-6 border border-purple-500">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="User" />
                  <AvatarFallback className="text-[10px]">A</AvatarFallback>
                </Avatar>
                {(sidebarOpen || isMobile) && (
                  <div className="ml-2 flex-1 min-w-0">
                    <p className={`text-xs font-medium ${darkMode ? "text-white" : "text-slate-800"} truncate`}>
                      Ayomide J.
                    </p>
                    <p className={`text-[10px] ${darkMode ? "text-gray-400" : "text-slate-500"} truncate`}>
                      Pro Member
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        className={cn("transition-all duration-300", {
          "ml-52": sidebarOpen && !isMobile,
          "ml-14": !sidebarOpen && !isMobile,
          "ml-0": isMobile,
        })}
      >
        {/* Top bar */}
        <header
          className={`sticky top-0 z-30 ${
            darkMode ? "bg-slate-900/90 border-b border-white/10" : "bg-white/90 border-b border-slate-200/50"
          } backdrop-blur-md`}
        >
          <div className="flex items-center justify-between h-12 px-3">
            {!isMobile && (
              <button
                onClick={toggleSidebar}
                className={`p-1.5 rounded-md ${
                  darkMode
                    ? "text-gray-400 hover:text-white hover:bg-white/5"
                    : "text-slate-600 hover:text-slate-800 hover:bg-slate-200/50"
                }`}
              >
                <ChevronRight className={`h-3.5 w-3.5 transition-transform ${sidebarOpen ? "rotate-180" : ""}`} />
              </button>
            )}

            <div className={`ml-3 ${darkMode ? "text-white" : "text-slate-800"}`}>
              <h2 className="text-sm font-medium">Hi Ayomide 👋 Ready to study smarter today?</h2>
            </div>

            <div className="flex items-center space-x-2">
              <div
                className={`relative rounded-md ${
                  darkMode ? "bg-white/5 border border-white/10" : "bg-slate-200/50 border border-slate-200/50"
                } ${searchFocused ? (darkMode ? "ring-1 ring-purple-500" : "ring-1 ring-purple-500") : ""}`}
              >
                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                  <Search className={`h-3 w-3 ${darkMode ? "text-gray-400" : "text-slate-500"}`} />
                </div>
                <input
                  type="text"
                  placeholder="Search chats, docs, topics..."
                  className={`py-1 pl-7 pr-3 block w-full text-xs rounded-md focus:outline-none ${
                    darkMode
                      ? "bg-transparent text-white placeholder-gray-400"
                      : "bg-transparent text-slate-800 placeholder-slate-500"
                  }`}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>

              <div className="relative" ref={notificationsRef}>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`relative h-7 w-7 ${
                    darkMode
                      ? "text-gray-400 hover:text-white hover:bg-white/5"
                      : "text-slate-600 hover:text-slate-800 hover:bg-slate-200/50"
                  } ${notificationsOpen ? (darkMode ? "bg-white/10 text-white" : "bg-slate-200 text-slate-800") : ""}`}
                  onClick={toggleNotifications}
                >
                  <Bell className="h-3.5 w-3.5" />
                  <span className="absolute top-0 right-0 block h-1.5 w-1.5 rounded-full bg-red-500"></span>
                </Button>
                {notificationsOpen && <NotificationsPanel darkMode={darkMode} />}
              </div>

              <div className="relative" ref={walletMenuRef}>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`relative h-7 w-7 ${
                    darkMode
                      ? "text-gray-400 hover:text-white hover:bg-white/5"
                      : "text-slate-600 hover:text-slate-800 hover:bg-slate-200/50"
                  } ${walletMenuOpen ? (darkMode ? "bg-white/10 text-white" : "bg-slate-200 text-slate-800") : ""}`}
                  onClick={toggleWalletMenu}
                >
                  <Wallet className="h-3.5 w-3.5" />
                  <span className="absolute top-0 right-0 block h-1.5 w-1.5 rounded-full bg-green-500"></span>
                </Button>
                {walletMenuOpen && (
                  <div
                    className={`absolute right-0 mt-1 w-44 rounded-md shadow-lg py-1 ${
                      darkMode ? "bg-slate-800/95 border border-white/10" : "bg-white/95 border border-slate-200/50"
                    } backdrop-blur-sm z-50`}
                  >
                    <div className={`px-3 py-2 ${darkMode ? "text-white" : "text-slate-800"} text-xs`}>
                      <p className="font-medium">Wallet Connected</p>
                      <p className={`truncate ${darkMode ? "text-gray-400" : "text-slate-500"}`}>0x1a2...3b4c</p>
                    </div>
                    <div className={`border-t ${darkMode ? "border-white/10" : "border-slate-200/50"}`}></div>
                    <div className="px-3 py-1.5">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className={darkMode ? "text-gray-400" : "text-slate-500"}>Balance:</span>
                        <span className={darkMode ? "text-white" : "text-slate-800"}>1.25 ETH</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className={darkMode ? "text-gray-400" : "text-slate-500"}>EduTokens:</span>
                        <span className={darkMode ? "text-white" : "text-slate-800"}>250 EDT</span>
                      </div>
                    </div>
                    <div className={`border-t ${darkMode ? "border-white/10" : "border-slate-200/50"}`}></div>
                    <Link
                      href="#"
                      className={`block px-3 py-1.5 text-xs ${
                        darkMode ? "text-white hover:bg-white/5" : "text-slate-800 hover:bg-slate-200/50"
                      }`}
                    >
                      View on Explorer
                    </Link>
                    <Link
                      href="#"
                      className={`block px-3 py-1.5 text-xs ${
                        darkMode ? "text-white hover:bg-white/5" : "text-slate-800 hover:bg-slate-200/50"
                      }`}
                    >
                      Disconnect
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative" ref={userMenuRef}>
                <Avatar className="cursor-pointer h-6 w-6 border border-purple-500" onClick={toggleUserMenu}>
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="User" />
                  <AvatarFallback className="text-[10px]">A</AvatarFallback>
                </Avatar>
                {userMenuOpen && (
                  <div
                    className={`absolute right-0 mt-1 w-44 rounded-md shadow-lg py-1 ${
                      darkMode ? "bg-slate-800/95 border border-white/10" : "bg-white/95 border border-slate-200/50"
                    } backdrop-blur-sm z-50`}
                  >
                    <div className={`px-3 py-2 ${darkMode ? "text-white" : "text-slate-800"} text-xs`}>
                      <p className="font-medium">Ayomide Johnson</p>
                      <p className={`truncate ${darkMode ? "text-gray-400" : "text-slate-500"}`}>ayomide@example.com</p>
                    </div>
                    <div className={`border-t ${darkMode ? "border-white/10" : "border-slate-200/50"}`}></div>
                    <Link
                      href="/dashboard/profile"
                      className={`block px-3 py-1.5 text-xs ${
                        darkMode ? "text-white hover:bg-white/5" : "text-slate-800 hover:bg-slate-200/50"
                      }`}
                    >
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-2" />
                        Your Profile
                      </div>
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      className={`block px-3 py-1.5 text-xs ${
                        darkMode ? "text-white hover:bg-white/5" : "text-slate-800 hover:bg-slate-200/50"
                      }`}
                    >
                      <div className="flex items-center">
                        <Settings className="h-3 w-3 mr-2" />
                        Settings
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className={`block px-3 py-1.5 text-xs ${
                        darkMode ? "text-white hover:bg-white/5" : "text-slate-800 hover:bg-slate-200/50"
                      }`}
                    >
                      <div className="flex items-center">
                        <HelpCircle className="h-3 w-3 mr-2" />
                        Help & Support
                      </div>
                    </Link>
                    <div className={`border-t ${darkMode ? "border-white/10" : "border-slate-200/50"}`}></div>
                    <Link
                      href="/login"
                      className={`block px-3 py-1.5 text-xs ${
                        darkMode ? "text-white hover:bg-white/5" : "text-slate-800 hover:bg-slate-200/50"
                      }`}
                    >
                      <div className="flex items-center">
                        <LogOut className="h-3 w-3 mr-2" />
                        Sign out
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="p-3">{children}</main>
      </div>
    </div>
  )
}
