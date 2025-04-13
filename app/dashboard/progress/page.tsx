import { Button } from "@/components/ui/button"
import {
  BarChart2,
  Calendar,
  Clock,
  Award,
  BookOpen,
  FileQuestion,
  TrendingUp,
  ChevronDown,
  Filter,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Progress - KOLEXAI",
  description: "Track your learning progress",
}

export default function ProgressPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
        <div>
          <h1 className="text-sm font-semibold text-white mb-1">Learning Progress</h1>
          <p className="text-xs text-gray-400">Track your achievements and learning journey</p>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            <Calendar className="h-3 w-3 mr-1" />
            This Month
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>

          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            <Filter className="h-3 w-3 mr-1" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-900/80 border border-white/10 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-400">Courses Completed</p>
            <div className="h-7 w-7 rounded-full bg-blue-500/20 flex items-center justify-center">
              <BookOpen className="h-3.5 w-3.5 text-blue-400" />
            </div>
          </div>
          <p className="text-xl font-semibold text-white">3</p>
          <div className="flex items-center mt-1">
            <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
            <span className="text-[10px] text-green-400">+1 this month</span>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-white/10 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-400">Quizzes Completed</p>
            <div className="h-7 w-7 rounded-full bg-green-500/20 flex items-center justify-center">
              <FileQuestion className="h-3.5 w-3.5 text-green-400" />
            </div>
          </div>
          <p className="text-xl font-semibold text-white">12</p>
          <div className="flex items-center mt-1">
            <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
            <span className="text-[10px] text-green-400">+3 this month</span>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-white/10 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-400">Certificates Earned</p>
            <div className="h-7 w-7 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Award className="h-3.5 w-3.5 text-purple-400" />
            </div>
          </div>
          <p className="text-xl font-semibold text-white">3</p>
          <div className="flex items-center mt-1">
            <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
            <span className="text-[10px] text-green-400">+1 this month</span>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-white/10 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-400">Study Hours</p>
            <div className="h-7 w-7 rounded-full bg-amber-500/20 flex items-center justify-center">
              <Clock className="h-3.5 w-3.5 text-amber-400" />
            </div>
          </div>
          <p className="text-xl font-semibold text-white">32</p>
          <div className="flex items-center mt-1">
            <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
            <span className="text-[10px] text-green-400">+8 this month</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-3 h-8 mb-4 bg-slate-800/50 border border-white/10 rounded-md p-0.5">
          <TabsTrigger value="overview" className="text-xs h-full rounded-sm">
            Overview
          </TabsTrigger>
          <TabsTrigger value="courses" className="text-xs h-full rounded-sm">
            Courses
          </TabsTrigger>
          <TabsTrigger value="achievements" className="text-xs h-full rounded-sm">
            Achievements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4">
              <h3 className="text-xs font-medium text-white mb-3">Learning Time</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[10px] text-gray-400">This Week</p>
                    <p className="text-xs text-white">8 hours</p>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-[80%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[10px] text-gray-400">Last Week</p>
                    <p className="text-xs text-white">6 hours</p>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-[60%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[10px] text-gray-400">2 Weeks Ago</p>
                    <p className="text-xs text-white">10 hours</p>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-[100%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[10px] text-gray-400">3 Weeks Ago</p>
                    <p className="text-xs text-white">8 hours</p>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-[80%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4">
              <h3 className="text-xs font-medium text-white mb-3">Quiz Performance</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[10px] text-gray-400">Blockchain Fundamentals</p>
                    <p className="text-xs text-white">95%</p>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[10px] text-gray-400">Smart Contracts</p>
                    <p className="text-xs text-white">88%</p>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-[88%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[10px] text-gray-400">Web3 Integration</p>
                    <p className="text-xs text-white">75%</p>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-[75%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[10px] text-gray-400">Average Score</p>
                    <p className="text-xs text-white">86%</p>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-[86%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-slate-900/80 border border-white/10 rounded-lg p-4">
            <h3 className="text-xs font-medium text-white mb-3">Recent Activity</h3>
            <div className="space-y-3">
              {[
                {
                  icon: BookOpen,
                  color: "text-blue-400",
                  bg: "bg-blue-500/20",
                  title: "Completed Smart Contract Development course",
                  time: "2 days ago",
                },
                {
                  icon: FileQuestion,
                  color: "text-green-400",
                  bg: "bg-green-500/20",
                  title: "Scored 92% on Web3 Integration quiz",
                  time: "3 days ago",
                },
                {
                  icon: Award,
                  color: "text-purple-400",
                  bg: "bg-purple-500/20",
                  title: "Earned Blockchain Fundamentals certificate",
                  time: "1 week ago",
                },
                {
                  icon: Clock,
                  color: "text-amber-400",
                  bg: "bg-amber-500/20",
                  title: "Studied for 3 hours on DeFi Principles",
                  time: "1 week ago",
                },
                {
                  icon: BookOpen,
                  color: "text-blue-400",
                  bg: "bg-blue-500/20",
                  title: "Started Web3 Integration course",
                  time: "2 weeks ago",
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className={`h-6 w-6 rounded-full ${activity.bg} flex items-center justify-center mr-2 flex-shrink-0`}
                  >
                    <activity.icon className={`h-3 w-3 ${activity.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-white">{activity.title}</p>
                    <p className="text-[10px] text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="courses">
          <div className="bg-slate-900/80 border border-white/10 rounded-lg overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 p-2 border-b border-white/5 text-[10px] font-medium text-gray-400">
              <div className="pl-2">Course</div>
              <div>Progress</div>
              <div>Time Spent</div>
              <div className="pr-2">Status</div>
            </div>

            <div className="divide-y divide-white/5">
              {[
                {
                  title: "Blockchain Fundamentals",
                  progress: 100,
                  timeSpent: "3 hours",
                  status: "Completed",
                  statusColor: "text-green-400",
                },
                {
                  title: "Smart Contract Development",
                  progress: 75,
                  timeSpent: "4 hours",
                  status: "In Progress",
                  statusColor: "text-amber-400",
                },
                {
                  title: "Web3 Integration",
                  progress: 30,
                  timeSpent: "2 hours",
                  status: "In Progress",
                  statusColor: "text-amber-400",
                },
                {
                  title: "DeFi Principles",
                  progress: 0,
                  timeSpent: "0 hours",
                  status: "Not Started",
                  statusColor: "text-gray-400",
                },
                {
                  title: "Cryptography Basics",
                  progress: 100,
                  timeSpent: "2.5 hours",
                  status: "Completed",
                  statusColor: "text-green-400",
                },
              ].map((course, i) => (
                <div key={i} className="grid grid-cols-[1fr_auto_auto_auto] gap-3 p-2 hover:bg-slate-800/30 text-xs">
                  <div className="pl-2 text-white">{course.title}</div>
                  <div className="flex items-center">
                    <div className="w-20 bg-slate-800 rounded-full h-1.5 mr-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-400">{course.progress}%</span>
                  </div>
                  <div className="text-gray-400">{course.timeSpent}</div>
                  <div className={`pr-2 ${course.statusColor}`}>{course.status}</div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Course Completer",
                description: "Complete 3 courses",
                icon: BookOpen,
                color: "text-blue-400",
                bg: "bg-blue-500/20",
                progress: 100,
                earned: true,
                date: "May 10, 2025",
              },
              {
                title: "Quiz Master",
                description: "Score 90% or higher on 5 quizzes",
                icon: FileQuestion,
                color: "text-green-400",
                bg: "bg-green-500/20",
                progress: 80,
                earned: false,
                date: null,
              },
              {
                title: "Certified Professional",
                description: "Earn 3 certificates",
                icon: Award,
                color: "text-purple-400",
                bg: "bg-purple-500/20",
                progress: 100,
                earned: true,
                date: "May 12, 2025",
              },
              {
                title: "Dedicated Learner",
                description: "Study for 50 hours",
                icon: Clock,
                color: "text-amber-400",
                bg: "bg-amber-500/20",
                progress: 64,
                earned: false,
                date: null,
              },
              {
                title: "Blockchain Expert",
                description: "Complete all blockchain courses",
                icon: BarChart2,
                color: "text-cyan-400",
                bg: "bg-cyan-500/20",
                progress: 60,
                earned: false,
                date: null,
              },
              {
                title: "Perfect Score",
                description: "Get 100% on any quiz",
                icon: FileQuestion,
                color: "text-green-400",
                bg: "bg-green-500/20",
                progress: 0,
                earned: false,
                date: null,
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className={`bg-slate-900/80 border ${
                  achievement.earned ? "border-purple-500/30" : "border-white/10"
                } rounded-lg p-3 hover:border-purple-500/50 transition-colors`}
              >
                <div className="flex items-start">
                  <div className={`h-8 w-8 rounded-full ${achievement.bg} flex items-center justify-center mr-3`}>
                    <achievement.icon className={`h-4 w-4 ${achievement.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-white">{achievement.title}</h3>
                    <p className="text-[10px] text-gray-400 mb-2">{achievement.description}</p>
                    {achievement.earned ? (
                      <div className="flex items-center">
                        <Award className="h-3 w-3 text-purple-400 mr-1" />
                        <span className="text-[10px] text-purple-400">Earned on {achievement.date}</span>
                      </div>
                    ) : (
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] text-gray-400">Progress</span>
                          <span className="text-[10px] text-gray-400">{achievement.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full"
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
