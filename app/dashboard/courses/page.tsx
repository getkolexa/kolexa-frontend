import { Button } from "@/components/ui/button"
import { Search, Filter, BookOpen, Clock, ChevronDown, Play } from "lucide-react"
import CourseCard from "@/components/dashboard/course-card"

export const metadata = {
  title: "Courses - KOLEXAI",
  description: "Your learning courses",
}

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Blockchain Fundamentals",
      description: "Learn the core concepts of blockchain technology",
      progress: 100,
      modules: 5,
      duration: "3 hours",
      instructor: "Dr. Sarah Chen",
      status: "completed",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Smart Contract Development",
      description: "Build secure and efficient smart contracts",
      progress: 75,
      modules: 8,
      duration: "5 hours",
      instructor: "Alex Johnson",
      status: "in-progress",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Web3 Integration",
      description: "Connect your applications to the blockchain",
      progress: 30,
      modules: 6,
      duration: "4 hours",
      instructor: "Michael Wong",
      status: "in-progress",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "DeFi Principles",
      description: "Understand decentralized finance concepts",
      progress: 0,
      modules: 7,
      duration: "4.5 hours",
      instructor: "Emma Rodriguez",
      status: "not-started",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
        <div>
          <h1 className="text-sm font-semibold text-white mb-1">Courses</h1>
          <p className="text-xs text-gray-400">Structured learning paths for blockchain and Web3</p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <Search className="h-3 w-3 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              className="py-1 pl-7 pr-3 block w-full text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 bg-slate-800/50 border border-white/10 text-white placeholder-gray-400"
            />
          </div>

          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            <Filter className="h-3 w-3 mr-1" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-medium text-white">Recommended Courses</h2>
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="h-6 text-[10px] text-gray-400 hover:text-white">
              <Clock className="h-3 w-3 mr-1" />
              Sort by
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              id: 5,
              title: "NFT Creation and Trading",
              description: "Create, mint, and trade non-fungible tokens",
              modules: 6,
              duration: "4 hours",
              instructor: "James Wilson",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: 6,
              title: "Blockchain Security",
              description: "Protect your blockchain applications from attacks",
              modules: 7,
              duration: "5 hours",
              instructor: "Lisa Chen",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              id: 7,
              title: "Crypto Economics",
              description: "Understand the economics behind cryptocurrencies",
              modules: 5,
              duration: "3.5 hours",
              instructor: "David Kim",
              image: "/placeholder.svg?height=200&width=300",
            },
          ].map((course) => (
            <div
              key={course.id}
              className="bg-slate-900/80 border border-white/10 rounded-lg overflow-hidden hover:border-purple-500/50 transition-colors"
            >
              <div className="aspect-video relative bg-slate-800">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-2 right-2">
                  <Button
                    size="sm"
                    className="h-6 text-[10px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
                  >
                    <Play className="h-3 w-3 mr-1" />
                    Preview
                  </Button>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xs font-medium text-white mb-1">{course.title}</h3>
                <p className="text-[10px] text-gray-400 mb-2">{course.description}</p>
                <div className="flex items-center justify-between text-[10px] text-gray-400">
                  <div className="flex items-center">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {course.modules} modules
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {course.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
