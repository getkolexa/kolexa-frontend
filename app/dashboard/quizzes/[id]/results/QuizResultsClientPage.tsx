"use client"

import { Button } from "@/components/ui/button"
import { FileQuestion, Award, CheckCircle, XCircle, Share2, Download, ArrowRight, RefreshCw } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function QuizResultsClientPage({ params }: { params: { id: string } }) {
  // Mock data for the quiz results
  const quizResult = {
    id: Number.parseInt(params.id),
    title: "Blockchain Fundamentals",
    description: "Test your knowledge of blockchain concepts",
    score: 90,
    totalQuestions: 10,
    correctAnswers: 9,
    incorrectAnswers: 1,
    timeSpent: "12 minutes",
    completedAt: "May 10, 2025",
    questions: [
      {
        id: 1,
        question: "What is a blockchain?",
        userAnswer: "A distributed ledger technology",
        correctAnswer: "A distributed ledger technology",
        isCorrect: true,
        explanation:
          "A blockchain is a distributed ledger technology that records transactions across multiple computers.",
      },
      {
        id: 2,
        question: "What is the purpose of mining in blockchain?",
        userAnswer: "To create new blocks and validate transactions",
        correctAnswer: "To create new blocks and validate transactions",
        isCorrect: true,
        explanation:
          "Mining is the process of adding transaction records to the blockchain by solving complex mathematical problems.",
      },
      {
        id: 3,
        question: "What is a smart contract?",
        userAnswer: "Self-executing contract with the terms directly written into code",
        correctAnswer: "Self-executing contract with the terms directly written into code",
        isCorrect: true,
        explanation:
          "Smart contracts are self-executing contracts with the terms directly written into code that automatically execute when conditions are met.",
      },
      {
        id: 4,
        question: "Which consensus mechanism does Bitcoin use?",
        userAnswer: "Proof of Work",
        correctAnswer: "Proof of Work",
        isCorrect: true,
        explanation:
          "Bitcoin uses Proof of Work (PoW) as its consensus mechanism, which requires miners to solve complex mathematical problems.",
      },
      {
        id: 5,
        question: "What is a 51% attack?",
        userAnswer: "When a single entity controls more than 51% of the network's mining power",
        correctAnswer: "When a single entity controls more than 51% of the network's mining power",
        isCorrect: true,
        explanation:
          "A 51% attack occurs when a single entity controls more than 51% of the network's mining power, allowing them to potentially manipulate the blockchain.",
      },
      {
        id: 6,
        question: "What is a private key in blockchain?",
        userAnswer: "A cryptographic key that allows access to your blockchain assets",
        correctAnswer: "A cryptographic key that allows access to your blockchain assets",
        isCorrect: true,
        explanation:
          "A private key is a cryptographic key that allows access to your blockchain assets and is used to sign transactions.",
      },
      {
        id: 7,
        question: "What is a fork in blockchain?",
        userAnswer: "A change in protocol that creates two paths forward",
        correctAnswer: "A change in protocol that creates two paths forward",
        isCorrect: true,
        explanation:
          "A fork is a change in protocol that creates two paths forward, either temporarily (soft fork) or permanently (hard fork).",
      },
      {
        id: 8,
        question: "What is the purpose of a hash function in blockchain?",
        userAnswer: "To convert data of any size into a fixed-size output",
        correctAnswer: "To convert data of any size into a fixed-size output",
        isCorrect: true,
        explanation:
          "Hash functions convert data of any size into a fixed-size output, which is essential for creating the chain of blocks in a blockchain.",
      },
      {
        id: 9,
        question: "What is a node in blockchain?",
        userAnswer: "A computer connected to the blockchain network",
        correctAnswer: "A computer connected to the blockchain network",
        isCorrect: true,
        explanation:
          "A node is a computer connected to the blockchain network that maintains a copy of the blockchain and validates transactions.",
      },
      {
        id: 10,
        question: "Which of the following is NOT a characteristic of blockchain?",
        userAnswer: "Centralization",
        correctAnswer: "Centralization",
        isCorrect: false,
        explanation:
          "Blockchain is characterized by decentralization, not centralization. Other characteristics include transparency, immutability, and security.",
      },
    ],
    certificateEligible: true,
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
            <FileQuestion className="h-4 w-4 text-green-400" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-white">{quizResult.title} - Results</h1>
            <p className="text-xs text-gray-400">Completed on {quizResult.completedAt}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            <Share2 className="h-3 w-3 mr-1" />
            Share
          </Button>
          <Button variant="outline" size="sm" className="h-6 text-[10px] border-white/10 text-white hover:bg-white/5">
            <Download className="h-3 w-3 mr-1" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-slate-800/80 flex items-center justify-center text-xl font-bold text-white mb-2">
            {quizResult.score}%
          </div>
          <p className="text-xs text-gray-400">Your Score</p>
        </div>

        <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-white">Correct Answers</p>
            <p className="text-xs text-white">
              {quizResult.correctAnswers}/{quizResult.totalQuestions}
            </p>
          </div>
          <Progress value={(quizResult.correctAnswers / quizResult.totalQuestions) * 100} className="h-1.5 mb-3" />
          <div className="flex items-center">
            <CheckCircle className="h-3.5 w-3.5 text-green-400 mr-1.5" />
            <span className="text-[10px] text-gray-400">
              You answered {quizResult.correctAnswers} questions correctly
            </span>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4">
          <div className="flex flex-col h-full justify-between">
            <div>
              <p className="text-xs text-white mb-1">Quiz Details</p>
              <div className="flex items-center mb-1">
                <span className="text-[10px] text-gray-400 w-24">Time Spent:</span>
                <span className="text-[10px] text-white">{quizResult.timeSpent}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[10px] text-gray-400 w-24">Questions:</span>
                <span className="text-[10px] text-white">{quizResult.totalQuestions}</span>
              </div>
            </div>

            {quizResult.certificateEligible && (
              <Button
                size="sm"
                className="h-7 text-xs bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 mt-3"
              >
                <Award className="h-3.5 w-3.5 mr-1.5" />
                Get Certificate
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4 mb-4">
        <h2 className="text-xs font-medium text-white mb-3">Question Review</h2>

        <div className="space-y-4">
          {quizResult.questions.map((question) => (
            <div key={question.id} className="border border-white/5 rounded-lg p-3">
              <div className="flex items-start">
                <div className="mr-2 mt-0.5">
                  {question.isCorrect ? (
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-medium text-white mb-1">
                    {question.id}. {question.question}
                  </h3>
                  <div className="mb-2">
                    <p className="text-[10px] text-gray-400">Your answer: {question.userAnswer}</p>
                    <p className="text-[10px] text-gray-400">Correct answer: {question.correctAnswer}</p>
                  </div>
                  <p className="text-[10px] text-gray-400">{question.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" className="h-7 text-xs border-white/10 text-white hover:bg-white/5">
          <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
          Retake Quiz
        </Button>

        <Button
          size="sm"
          className="h-7 text-xs bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
        >
          Next Quiz
          <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
        </Button>
      </div>

      {/* Certificate Modal would be triggered by the "Get Certificate" button */}
      {/* <CertificateModal isOpen={false} onClose={() => {}} certificate={{
        id: 1,
        title: "Blockchain Fundamentals",
        recipient: "Ayomide Johnson",
        issueDate: "May 10, 2025",
        score: 90,
        verificationId: "0x3f5e9a7b2c1d8e4f",
      }} /> */}
    </div>
  )
}
