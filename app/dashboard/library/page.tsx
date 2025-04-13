import { Button } from "@/components/ui/button"
import { Plus, Search, Filter, FileText, FileQuestion, Award, Clock, ChevronDown } from "lucide-react"
import LibraryCard from "@/components/dashboard/library-card"

export const metadata = {
  title: "Library - KOLEXAI",
  description: "Your learning materials and resources",
}

export default function LibraryPage() {
  const libraries = [
    {
      id: 1,
      title: "Blockchain Fundamentals",
      description: "Core concepts of blockchain technology",
      items: 12,
      lastUpdated: "2 days ago",
      isPublic: true,
    },
    {
      id: 2,
      title: "Smart Contracts",
      description: "Development and security of smart contracts",
      items: 8,
      lastUpdated: "1 week ago",
      isPublic: false,
    },
    {
      id: 3,
      title: "Web3 Development",
      description: "Building decentralized applications",
      items: 15,
      lastUpdated: "3 days ago",
      isPublic: true,
    },
    {
      id: 4,
      title: "DeFi Principles",
      description: "Decentralized finance concepts and applications",
      items: 6,
      lastUpdated: "Yesterday",
      isPublic: false,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
        <div>
          <h1 className="text-sm font-semibold text-white mb-1">Your Library</h1>
          <p className="text-xs text-gray-400">Manage your learning materials and resources</p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <Search className="h-3 w-3 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search libraries..."
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
            <Plus className="h-3 w-3 mr-1" />
            New Library
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {libraries.map((library) => (
          <LibraryCard key={library.id} library={library} />
        ))}

        <div className="bg-slate-900/50 border border-dashed border-white/10 rounded-lg p-4 flex flex-col items-center justify-center h-48">
          <div className="h-10 w-10 rounded-full bg-slate-800/50 flex items-center justify-center mb-2">
            <Plus className="h-5 w-5 text-gray-400" />
          </div>
          <p className="text-xs text-white mb-1">Create New Library</p>
          <p className="text-[10px] text-gray-400 text-center mb-3">Organize your learning materials</p>
          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            <Plus className="h-3 w-3 mr-1" />
            New Library
          </Button>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-medium text-white">Recent Items</h2>
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="h-6 text-[10px] text-gray-400 hover:text-white">
              <Clock className="h-3 w-3 mr-1" />
              Last 7 days
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-white/10 rounded-lg overflow-hidden">
          <div className="grid grid-cols-[auto_1fr_auto_auto] gap-3 p-2 border-b border-white/5 text-[10px] font-medium text-gray-400">
            <div className="pl-2">Type</div>
            <div>Name</div>
            <div>Library</div>
            <div className="pr-2">Date</div>
          </div>

          <div className="divide-y divide-white/5">
            {[
              { type: "document", name: "Blockchain Basics.pdf", library: "Blockchain Fundamentals", date: "Today" },
              { type: "quiz", name: "Smart Contracts Quiz", library: "Smart Contracts", date: "Yesterday" },
              {
                type: "certificate",
                name: "Web3 Development Certificate",
                library: "Web3 Development",
                date: "2 days ago",
              },
              { type: "document", name: "DeFi Explained.pdf", library: "DeFi Principles", date: "3 days ago" },
              {
                type: "quiz",
                name: "Blockchain Security Quiz",
                library: "Blockchain Fundamentals",
                date: "4 days ago",
              },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr_auto_auto] gap-3 p-2 hover:bg-slate-800/30 text-xs">
                <div className="pl-2">
                  {item.type === "document" ? (
                    <FileText className="h-4 w-4 text-blue-400" />
                  ) : item.type === "quiz" ? (
                    <FileQuestion className="h-4 w-4 text-green-400" />
                  ) : (
                    <Award className="h-4 w-4 text-purple-400" />
                  )}
                </div>
                <div className="text-white truncate">{item.name}</div>
                <div className="text-gray-400">{item.library}</div>
                <div className="text-gray-400 pr-2">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
