import { FolderOpen, Edit, Trash2, Share2, FileText, CheckSquare, Award, Globe, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LibraryListProps {
  darkMode: boolean
}

export default function LibraryList({ darkMode }: LibraryListProps) {
  const libraries = [
    {
      id: 1,
      title: "Blockchain Basics",
      timestamp: "2 days ago",
      docs: 5,
      quizzes: 2,
      credentials: 1,
      isPublic: true,
    },
    {
      id: 2,
      title: "Smart Contracts",
      timestamp: "1 week ago",
      docs: 3,
      quizzes: 1,
      credentials: 0,
      isPublic: false,
    },
    {
      id: 3,
      title: "Web3 Development",
      timestamp: "3 weeks ago",
      docs: 8,
      quizzes: 4,
      credentials: 2,
      isPublic: true,
    },
  ]

  return (
    <div className="space-y-1">
      <Button
        className={`w-full justify-start ${darkMode ? "bg-white/10 text-white hover:bg-white/20" : "bg-slate-200/50 text-slate-800 hover:bg-slate-200/80"}`}
      >
        <FolderOpen className="h-4 w-4 mr-2" />
        New Library
      </Button>

      <div className="mt-2">
        {libraries.map((library) => (
          <div
            key={library.id}
            className={`group px-3 py-2 rounded-md ${darkMode ? "text-gray-400 hover:text-white hover:bg-white/10" : "text-slate-600 hover:text-slate-800 hover:bg-slate-200/50"}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center overflow-hidden">
                <FolderOpen className="h-4 w-4 flex-shrink-0 mr-2" />
                <span className="truncate">{library.title}</span>
              </div>
              <div
                className={`flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? "text-gray-400" : "text-slate-500"}`}
              >
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Edit className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Trash2 className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Share2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <div className={`mt-1 flex items-center text-xs ${darkMode ? "text-gray-500" : "text-slate-500"}`}>
              <span>{library.timestamp}</span>
              <div className="flex items-center ml-auto space-x-2">
                {library.docs > 0 && (
                  <div className="flex items-center">
                    <FileText className="h-3 w-3 mr-1" />
                    <span>{library.docs}</span>
                  </div>
                )}
                {library.quizzes > 0 && (
                  <div className="flex items-center">
                    <CheckSquare className="h-3 w-3 mr-1" />
                    <span>{library.quizzes}</span>
                  </div>
                )}
                {library.credentials > 0 && (
                  <div className="flex items-center">
                    <Award className="h-3 w-3 mr-1" />
                    <span>{library.credentials}</span>
                  </div>
                )}
                {library.isPublic ? <Globe className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
