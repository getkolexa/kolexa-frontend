"use client"

import { FileQuestion, MoreHorizontal, Award, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

interface QuizCardProps {
  quiz: {
    id: number
    title: string
    questions: number
    score: number | null
    completed: string | null
    library: string
    status: "completed" | "in-progress" | "not-started"
  }
}

export default function QuizCard({ quiz }: QuizCardProps) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Link
      href={quiz.status === "in-progress" ? `/dashboard/quizzes/${quiz.id}` : `/dashboard/quizzes/${quiz.id}/results`}
    >
      <div className="group bg-slate-900/80 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-colors h-full">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
              <FileQuestion className="h-4 w-4 text-green-400" />
            </div>
            <div>
              <h3 className="text-xs font-medium text-white group-hover:text-purple-400 transition-colors">
                {quiz.title}
              </h3>
              <p className="text-[10px] text-gray-400">
                {quiz.questions} questions • {quiz.library}
              </p>
            </div>
          </div>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-gray-400 hover:text-white"
              onClick={(e) => {
                e.preventDefault()
                setShowMenu(!showMenu)
              }}
            >
              <MoreHorizontal className="h-3 w-3" />
            </Button>

            {showMenu && (
              <div className="absolute right-0 mt-1 w-36 rounded-md shadow-lg py-1 bg-slate-800/95 border border-white/10 backdrop-blur-sm z-50">
                <button
                  className="flex items-center w-full px-3 py-1.5 text-left text-xs text-white hover:bg-white/5"
                  onClick={(e) => {
                    e.preventDefault()
                    // View action
                  }}
                >
                  <FileQuestion className="h-3 w-3 mr-2" />
                  View Quiz
                </button>
                <button
                  className="flex items-center w-full px-3 py-1.5 text-left text-xs text-white hover:bg-white/5"
                  onClick={(e) => {
                    e.preventDefault()
                    // Regenerate action
                  }}
                >
                  <Clock className="h-3 w-3 mr-2" />
                  Regenerate
                </button>
                {quiz.status === "completed" && (
                  <button
                    className="flex items-center w-full px-3 py-1.5 text-left text-xs text-white hover:bg-white/5"
                    onClick={(e) => {
                      e.preventDefault()
                      // Certificate action
                    }}
                  >
                    <Award className="h-3 w-3 mr-2" />
                    Get Certificate
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4">
          {quiz.status === "completed" ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-slate-800/80 flex items-center justify-center text-xs font-medium text-white">
                  {quiz.score}%
                </div>
                <div className="ml-2">
                  <p className="text-[10px] text-gray-400">Your score</p>
                  <p className="text-[10px] text-gray-400">{quiz.completed}</p>
                </div>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-1" />
                <span className="text-[10px] text-green-400">Completed</span>
              </div>
            </div>
          ) : quiz.status === "in-progress" ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-slate-800/80 flex items-center justify-center text-xs font-medium text-white">
                  <Clock className="h-4 w-4 text-amber-400" />
                </div>
                <div className="ml-2">
                  <p className="text-[10px] text-gray-400">In progress</p>
                  <p className="text-[10px] text-gray-400">Continue quiz</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5"
              >
                Continue
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-slate-800/80 flex items-center justify-center text-xs font-medium text-white">
                  <AlertCircle className="h-4 w-4 text-gray-400" />
                </div>
                <div className="ml-2">
                  <p className="text-[10px] text-gray-400">Not started</p>
                  <p className="text-[10px] text-gray-400">Start quiz</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5"
              >
                Start
              </Button>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
