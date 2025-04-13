import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  Upload,
  Search,
  Filter,
  Download,
  MessageSquare,
  Sparkles,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata = {
  title: "Library Detail - KOLEXAI",
  description: "View and manage your library content",
}

export default function LibraryDetailPage({ params }: { params: { id: string } }) {
  // Mock data for the library
  const library = {
    id: Number.parseInt(params.id),
    title: "Blockchain Fundamentals",
    description: "Core concepts of blockchain technology",
    items: 12,
    lastUpdated: "2 days ago",
    isPublic: true,
    documents: [
      { id: 1, name: "Blockchain Basics.pdf", type: "pdf", size: "2.4 MB", uploaded: "2 days ago" },
      { id: 2, name: "Consensus Mechanisms.docx", type: "docx", size: "1.8 MB", uploaded: "3 days ago" },
      { id: 3, name: "Cryptography in Blockchain.pdf", type: "pdf", size: "3.2 MB", uploaded: "1 week ago" },
      { id: 4, name: "Distributed Ledger Technology.pdf", type: "pdf", size: "4.1 MB", uploaded: "2 weeks ago" },
    ],
    quizzes: [
      { id: 1, name: "Blockchain Basics Quiz", questions: 10, score: "90%", completed: "Yesterday" },
      { id: 2, name: "Consensus Mechanisms Quiz", questions: 8, score: "85%", completed: "3 days ago" },
      { id: 3, name: "Cryptography Quiz", questions: 12, score: "75%", completed: "1 week ago" },
    ],
    certificates: [{ id: 1, name: "Blockchain Fundamentals Certificate", issued: "1 week ago", verified: true }],
    chats: [
      { id: 1, name: "Blockchain Basics Discussion", messages: 24, lastActive: "Yesterday" },
      { id: 2, name: "Consensus Mechanisms Q&A", messages: 18, lastActive: "3 days ago" },
    ],
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
            <FolderOpen className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-white mb-1">{library.title}</h1>
            <p className="text-xs text-gray-400 flex items-center">
              {library.description}
              {library.isPublic ? (
                <span className="flex items-center ml-2">
                  <Globe className="h-3 w-3 text-gray-400 mr-1" />
                  Public
                </span>
              ) : (
                <span className="flex items-center ml-2">
                  <Lock className="h-3 w-3 text-gray-400 mr-1" />
                  Private
                </span>
              )}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            <Share2 className="h-3 w-3 mr-1" />
            Share
          </Button>

          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            <Edit className="h-3 w-3 mr-1" />
            Edit
          </Button>

          <Button
            size="sm"
            className="h-6 text-[10px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
          >
            <Upload className="h-3 w-3 mr-1" />
            Upload
          </Button>
        </div>
      </div>

      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="grid grid-cols-4 h-8 mb-4 bg-slate-800/50 border border-white/10 rounded-md p-0.5">
          <TabsTrigger value="documents" className="text-xs h-full rounded-sm">
            Documents
          </TabsTrigger>
          <TabsTrigger value="quizzes" className="text-xs h-full rounded-sm">
            Quizzes
          </TabsTrigger>
          <TabsTrigger value="certificates" className="text-xs h-full rounded-sm">
            Certificates
          </TabsTrigger>
          <TabsTrigger value="chats" className="text-xs h-full rounded-sm">
            Chats
          </TabsTrigger>
        </TabsList>

        <TabsContent value="documents">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <Search className="h-3 w-3 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="py-1 pl-7 pr-3 block w-full text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 bg-slate-800/50 border border-white/10 text-white placeholder-gray-400"
                />
              </div>

              <Button
                variant="outline"
                size="sm"
                className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5"
              >
                <Filter className="h-3 w-3 mr-1" />
                Filter
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5"
              >
                <Download className="h-3 w-3 mr-1" />
                Export All
              </Button>

              <Button
                size="sm"
                className="h-6 text-[10px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
              >
                <Upload className="h-3 w-3 mr-1" />
                Upload
              </Button>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-white/10 rounded-lg overflow-hidden">
            <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-3 p-2 border-b border-white/5 text-[10px] font-medium text-gray-400">
              <div className="pl-2">Type</div>
              <div>Name</div>
              <div>Size</div>
              <div>Uploaded</div>
              <div className="pr-2">Actions</div>
            </div>

            <div className="divide-y divide-white/5">
              {library.documents.map((doc) => (
                <div
                  key={doc.id}
                  className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-3 p-2 hover:bg-slate-800/30 text-xs"
                >
                  <div className="pl-2">
                    <FileText className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="text-white truncate">{doc.name}</div>
                  <div className="text-gray-400">{doc.size}</div>
                  <div className="text-gray-400">{doc.uploaded}</div>
                  <div className="pr-2 flex items-center space-x-1">
                    <Button variant="ghost" size="icon" className="h-5 w-5 text-gray-400 hover:text-white">
                      <MessageSquare className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-5 w-5 text-gray-400 hover:text-white">
                      <Download className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-5 w-5 text-gray-400 hover:text-white">
                      <MoreHorizontal className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="quizzes">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-medium text-white">Quizzes</h2>

            <Button
              size="sm"
              className="h-6 text-[10px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
            >
              <Sparkles className="h-3 w-3 mr-1" />
              Generate Quiz
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {library.quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="bg-slate-900/80 border border-white/10 rounded-lg p-3 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                      <FileQuestion className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-white">{quiz.name}</h3>
                      <p className="text-[10px] text-gray-400">
                        {quiz.questions} questions • {quiz.completed}
                      </p>
                    </div>
                  </div>

                  <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-white">
                    <MoreHorizontal className="h-3 w-3" />
                  </Button>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-medium text-white">
                      {quiz.score}
                    </div>
                    <div className="text-[10px] text-gray-400">Your score</div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5"
                  >
                    Take Again
                  </Button>
                </div>
              </div>
            ))}

            <div className="bg-slate-900/50 border border-dashed border-white/10 rounded-lg p-4 flex flex-col items-center justify-center h-[120px]">
              <div className="h-8 w-8 rounded-full bg-slate-800/50 flex items-center justify-center mb-2">
                <Sparkles className="h-4 w-4 text-gray-400" />
              </div>
              <p className="text-xs text-white mb-1">Generate New Quiz</p>
              <p className="text-[10px] text-gray-400 text-center mb-2">Create a quiz from your documents</p>
              <Button
                variant="outline"
                size="sm"
                className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5"
              >
                <Sparkles className="h-3 w-3 mr-1" />
                Generate Quiz
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="certificates">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-medium text-white">Certificates</h2>

            <Button
              size="sm"
              className="h-6 text-[10px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
            >
              <Award className="h-3 w-3 mr-1" />
              Issue Certificate
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {library.certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-slate-900/80 border border-white/10 rounded-lg p-3 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Award className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-medium text-white">{cert.name}</h3>
                    <p className="text-[10px] text-gray-400 mb-2">Issued on {cert.issued}</p>
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
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-white">
                      <Share2 className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-white">
                      <Download className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-white">
                      <MoreHorizontal className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="mt-3 p-2 bg-slate-800/50 rounded-lg">
                  <div className="aspect-[3/2] relative bg-gradient-to-r from-purple-900 to-blue-900 rounded-md overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <div className="text-[10px] font-medium text-white mb-1">CERTIFICATE OF COMPLETION</div>
                      <div className="text-[8px] text-gray-300 mb-2">This certifies that</div>
                      <div className="text-xs font-semibold text-white mb-1">Ayomide Johnson</div>
                      <div className="text-[8px] text-gray-300 mb-2">has successfully completed</div>
                      <div className="text-[10px] font-medium text-white mb-2">Blockchain Fundamentals</div>
                      <div className="text-[8px] text-gray-300">May 1, 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-slate-900/50 border border-dashed border-white/10 rounded-lg p-4 flex flex-col items-center justify-center h-[200px]">
              <div className="h-10 w-10 rounded-full bg-slate-800/50 flex items-center justify-center mb-2">
                <Award className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-xs text-white mb-1">Issue New Certificate</p>
              <p className="text-[10px] text-gray-400 text-center mb-3">Create a blockchain-verified certificate</p>
              <Button
                variant="outline"
                size="sm"
                className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5"
              >
                <Award className="h-3 w-3 mr-1" />
                Issue Certificate
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="chats">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-medium text-white">AI Chats</h2>

            <Button
              size="sm"
              className="h-6 text-[10px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
            >
              <MessageSquare className="h-3 w-3 mr-1" />
              New Chat
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {library.chats.map((chat) => (
              <div
                key={chat.id}
                className="bg-slate-900/80 border border-white/10 rounded-lg p-3 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                      <MessageSquare className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-white">{chat.name}</h3>
                      <p className="text-[10px] text-gray-400">
                        {chat.messages} messages • {chat.lastActive}
                      </p>
                    </div>
                  </div>

                  <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-white">
                    <MoreHorizontal className="h-3 w-3" />
                  </Button>
                </div>

                <div className="mt-3 flex items-center space-x-2">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src="/placeholder.svg?height=20&width=20" alt="AI" />
                    <AvatarFallback className="bg-purple-600 text-[8px]">AI</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 p-2 bg-slate-800/50 rounded-lg text-[10px] text-gray-300 truncate">
                    The key features of blockchain are decentralization, transparency, immutability, and security...
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-slate-900/50 border border-dashed border-white/10 rounded-lg p-4 flex flex-col items-center justify-center h-[120px]">
              <div className="h-8 w-8 rounded-full bg-slate-800/50 flex items-center justify-center mb-2">
                <MessageSquare className="h-4 w-4 text-gray-400" />
              </div>
              <p className="text-xs text-white mb-1">Start New Chat</p>
              <p className="text-[10px] text-gray-400 text-center mb-2">Chat with AI about your documents</p>
              <Button
                variant="outline"
                size="sm"
                className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5"
              >
                <MessageSquare className="h-3 w-3 mr-1" />
                New Chat
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
