import { Button } from "@/components/ui/button"
import { Search, Filter, FileQuestion, Clock, ChevronDown, Sparkles, Award } from "lucide-react"
import QuizCard from "@/components/dashboard/quiz-card"

export const metadata = {
  title: "Quizzes - KOLEXAI",
  description: "Your quizzes and assessments",
}

export default function QuizzesPage() {
  const quizzes = [
    {
      id: 1,
      title: "Blockchain Fundamentals",
      questions: 10,
      score: 90,
      completed: "2 days ago",
      library: "Blockchain",
      status: "completed",
    },
    {
      id: 2,
      title: "Smart Contract Security",
      questions: 8,
      score: 85,
      completed: "1 week ago",
      library: "Smart Contracts",
      status: "completed",
    },
    {
      id: 3,
      title: "Web3 Development",
      questions: 12,
      score: 75,
      completed: "2 weeks ago",
      library: "Web3 Development",
      status: "completed",
    },
    {
      id: 4,
      title: "DeFi Principles",
      questions: 15,
      score: null,
      completed: null,
      library: "DeFi Principles",
      status: "in-progress",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
        <div>
          <h1 className="text-sm font-semibold text-white mb-1">Quizzes</h1>
          <p className="text-xs text-gray-400">Test your knowledge and track your progress</p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <Search className="h-3 w-3 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search quizzes..."
              className="py-1 pl-7 pr-3 block w-full text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 bg-slate-800/50 border border-white/10 text-white placeholder-gray-400"
            />
          </div>

          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            <Filter className="h-3 w-3 mr-1" />
            Filter
          </Button>

          <Button
            size="sm"
            className="h-6 text-[10px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
          >
            <Sparkles className="h-3 w-3 mr-1" />
            Generate Quiz
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}

        <div className="bg-slate-900/50 border border-dashed border-white/10 rounded-lg p-4 flex flex-col items-center justify-center h-48">
          <div className="h-10 w-10 rounded-full bg-slate-800/50 flex items-center justify-center mb-2">
            <Sparkles className="h-5 w-5 text-gray-400" />
          </div>
          <p className="text-xs text-white mb-1">Generate New Quiz</p>
          <p className="text-[10px] text-gray-400 text-center mb-3">Create a quiz from your learning materials</p>
          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            <Sparkles className="h-3 w-3 mr-1" />
            Generate Quiz
          </Button>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-medium text-white">Recent Activity</h2>
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="h-6 text-[10px] text-gray-400 hover:text-white">
              <Clock className="h-3 w-3 mr-1" />
              Last 7 days
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-white/10 rounded-lg overflow-hidden">
          <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-3 p-2 border-b border-white/5 text-[10px] font-medium text-gray-400">
            <div className="pl-2">Type</div>
            <div>Quiz</div>
            <div>Score</div>
            <div>Date</div>
            <div className="pr-2">Actions</div>
          </div>

          <div className="divide-y divide-white/5">
            {[
              { type: "quiz", name: "Blockchain Fundamentals", score: "90%", date: "2 days ago" },
              { type: "quiz", name: "Smart Contract Security", score: "85%", date: "1 week ago" },
              { type: "quiz", name: "Web3 Development", score: "75%", date: "2 weeks ago" },
              { type: "certificate", name: "Blockchain Fundamentals Certificate", score: "-", date: "2 days ago" },
              { type: "quiz", name: "Cryptography in Blockchain", score: "95%", date: "3 weeks ago" },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-3 p-2 hover:bg-slate-800/30 text-xs">
                <div className="pl-2">
                  {item.type === "quiz" ? (
                    <FileQuestion className="h-4 w-4 text-green-400" />
                  ) : (
                    <Award className="h-4 w-4 text-purple-400" />
                  )}
                </div>
                <div className="text-white truncate">{item.name}</div>
                <div className="text-gray-400">{item.score}</div>
                <div className="text-gray-400">{item.date}</div>
                <div className="pr-2 flex items-center space-x-1">
                  <Button variant="ghost" size="icon" className="h-5 w-5 text-gray-400 hover:text-white">
                    <FileQuestion className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
