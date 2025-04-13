"use client"

import { BookOpen, Clock, MoreHorizontal, Play, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Progress } from "@/components/ui/progress"

interface CourseCardProps {
  course: {
    id: number
    title: string
    description: string
    progress: number
    modules: number
    duration: string
    instructor: string
    status: "completed" | "in-progress" | "not-started"
    image: string
  }
}

export default function CourseCard({ course }: CourseCardProps) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Link href={`/dashboard/courses/${course.id}`}>
      <div className="group bg-slate-900/80 border border-white/10 rounded-lg overflow-hidden hover:border-purple-500/50 transition-colors h-full">
        <div className="aspect-video relative bg-slate-800">
          <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
          {course.status === "completed" && (
            <div className="absolute top-2 right-2 bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full flex items-center">
              <CheckCircle className="h-2.5 w-2.5 mr-1" />
              Completed
            </div>
          )}
          <div className="absolute bottom-2 right-2">
            <Button
              size="sm"
              className="h-6 text-[10px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
              onClick={(e) => {
                e.preventDefault()
                // Play action
              }}
            >
              <Play className="h-3 w-3 mr-1" />
              {course.status === "not-started" ? "Start" : "Continue"}
            </Button>
          </div>
        </div>
        <div className="p-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xs font-medium text-white group-hover:text-purple-400 transition-colors">
                {course.title}
              </h3>
              <p className="text-[10px] text-gray-400 mb-2">{course.description}</p>
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
                    <BookOpen className="h-3 w-3 mr-2" />
                    View Course
                  </button>
                  <button
                    className="flex items-center w-full px-3 py-1.5 text-left text-xs text-white hover:bg-white/5"
                    onClick={(e) => {
                      e.preventDefault()
                      // Play action
                    }}
                  >
                    <Play className="h-3 w-3 mr-2" />
                    {course.status === "not-started" ? "Start Course" : "Continue"}
                  </button>
                  {course.status === "completed" && (
                    <button
                      className="flex items-center w-full px-3 py-1.5 text-left text-xs text-white hover:bg-white/5"
                      onClick={(e) => {
                        e.preventDefault()
                        // Certificate action
                      }}
                    >
                      <Award className="h-3 w-3 mr-2" />
                      View Certificate
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {course.progress > 0 && (
            <div className="mb-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-gray-400">Progress</span>
                <span className="text-[10px] text-gray-400">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-1" />
            </div>
          )}

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
    </Link>
  )
}
