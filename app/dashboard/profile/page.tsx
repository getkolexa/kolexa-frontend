import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Award, BookOpen, FileText, Clock, Calendar, Share2, Edit, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Profile - KOLEXAI",
  description: "Your learning profile and achievements",
}

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4 mb-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-purple-500">
            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <div>
                <h1 className="text-sm font-semibold text-white">Ayomide Johnson</h1>
                <p className="text-xs text-gray-400">Blockchain enthusiast and Web3 developer</p>
              </div>
              <div className="flex space-x-2 mt-2 md:mt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5"
                >
                  <Share2 className="h-3 w-3 mr-1" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5"
                >
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5"
                >
                  <Settings className="h-3 w-3 mr-1" />
                  Settings
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
              <div className="bg-slate-800/50 rounded-md p-2">
                <p className="text-xs font-medium text-white">5</p>
                <p className="text-[10px] text-gray-400">Courses</p>
              </div>
              <div className="bg-slate-800/50 rounded-md p-2">
                <p className="text-xs font-medium text-white">12</p>
                <p className="text-[10px] text-gray-400">Quizzes</p>
              </div>
              <div className="bg-slate-800/50 rounded-md p-2">
                <p className="text-xs font-medium text-white">3</p>
                <p className="text-[10px] text-gray-400">Certificates</p>
              </div>
              <div className="bg-slate-800/50 rounded-md p-2">
                <p className="text-xs font-medium text-white">250</p>
                <p className="text-[10px] text-gray-400">EduTokens</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="certificates" className="w-full">
        <TabsList className="grid grid-cols-4 h-8 mb-4 bg-slate-800/50 border border-white/10 rounded-md p-0.5">
          <TabsTrigger value="certificates" className="text-xs h-full rounded-sm">
            Certificates
          </TabsTrigger>
          <TabsTrigger value="courses" className="text-xs h-full rounded-sm">
            Courses
          </TabsTrigger>
          <TabsTrigger value="activity" className="text-xs h-full rounded-sm">
            Activity
          </TabsTrigger>
          <TabsTrigger value="stats" className="text-xs h-full rounded-sm">
            Stats
          </TabsTrigger>
        </TabsList>

        <TabsContent value="certificates">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-slate-900/80 border border-white/10 rounded-lg p-3 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Award className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-medium text-white">Blockchain Fundamentals</h3>
                    <p className="text-[10px] text-gray-400 mb-2">Issued on May {i}, 2025</p>
                    <div className="flex items-center">
                      <div className="px-1.5 py-0.5 text-[8px] bg-purple-500/20 text-purple-300 rounded-full flex items-center mr-2">
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
                      <div className="text-[10px] text-gray-400">ID: 0x3f5e...9a7b</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 text-[10px] text-gray-400 hover:text-white">
                    <Share2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="courses">
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-slate-900/80 border border-white/10 rounded-lg p-3 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-medium text-white">
                      {i === 1
                        ? "Blockchain Fundamentals"
                        : i === 2
                          ? "Smart Contract Development"
                          : i === 3
                            ? "Web3 Integration"
                            : i === 4
                              ? "DeFi Principles"
                              : "NFT Creation"}
                    </h3>
                    <div className="flex items-center mb-2">
                      <p className="text-[10px] text-gray-400 mr-2">Started on April {10 + i}, 2025</p>
                      <div className="px-1.5 py-0.5 text-[8px] bg-green-500/20 text-green-300 rounded-full">
                        {i <= 3 ? "Completed" : "In Progress"}
                      </div>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full"
                        style={{ width: `${i <= 3 ? 100 : i === 4 ? 75 : 30}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activity">
          <div className="bg-slate-900/80 border border-white/10 rounded-lg p-3">
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center mr-2 flex-shrink-0">
                    {i === 1 ? (
                      <Award className="h-3 w-3 text-purple-400" />
                    ) : i === 2 ? (
                      <FileText className="h-3 w-3 text-green-400" />
                    ) : i === 3 ? (
                      <BookOpen className="h-3 w-3 text-blue-400" />
                    ) : i === 4 ? (
                      <Clock className="h-3 w-3 text-amber-400" />
                    ) : (
                      <Calendar className="h-3 w-3 text-red-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white">
                      {i === 1
                        ? "Earned Blockchain Fundamentals Certificate"
                        : i === 2
                          ? "Completed Smart Contract Quiz with 92% score"
                          : i === 3
                            ? "Started Web3 Integration course"
                            : i === 4
                              ? "Spent 2 hours learning DeFi Principles"
                              : "Scheduled NFT Creation workshop for next week"}
                    </p>
                    <p className="text-[10px] text-gray-400">
                      {i} day{i !== 1 ? "s" : ""} ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="stats">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/80 border border-white/10 rounded-lg p-3">
              <h3 className="text-xs font-medium text-white mb-3">Learning Time</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-[10px] text-gray-400">This Week</p>
                  <p className="text-xs text-white">8 hours</p>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-[80%]"></div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[10px] text-gray-400">This Month</p>
                  <p className="text-xs text-white">32 hours</p>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-[65%]"></div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[10px] text-gray-400">Total</p>
                  <p className="text-xs text-white">120 hours</p>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-[90%]"></div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-white/10 rounded-lg p-3">
              <h3 className="text-xs font-medium text-white mb-3">Quiz Performance</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-[10px] text-gray-400">Blockchain Fundamentals</p>
                  <p className="text-xs text-white">95%</p>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-[95%]"></div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[10px] text-gray-400">Smart Contracts</p>
                  <p className="text-xs text-white">88%</p>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-[88%]"></div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[10px] text-gray-400">Web3 Integration</p>
                  <p className="text-xs text-white">75%</p>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
