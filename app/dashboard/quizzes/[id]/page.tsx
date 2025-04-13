import { Button } from "@/components/ui/button"
import { FileQuestion, Clock, ChevronLeft, ChevronRight, HelpCircle } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

export const metadata = {
  title: "Quiz - KOLEXAI",
  description: "Test your knowledge",
}

export default function QuizPage({ params }: { params: { id: string } }) {
  // Mock data for the quiz
  const quiz = {
    id: Number.parseInt(params.id),
    title: "DeFi Principles",
    description: "Test your knowledge of decentralized finance concepts",
    questions: [
      {
        id: 1,
        question: "What does DeFi stand for?",
        options: ["Decentralized Finance", "Digital Finance", "Distributed Finance", "Direct Finance"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which of the following is NOT a common DeFi protocol?",
        options: ["Uniswap", "Aave", "Compound", "BitPay"],
        correctAnswer: 3,
      },
      {
        id: 3,
        question: "What is the primary purpose of a liquidity pool in DeFi?",
        options: [
          "To store user credentials",
          "To facilitate trading between different assets",
          "To mine new cryptocurrencies",
          "To verify blockchain transactions",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "What is yield farming?",
        options: [
          "A method of growing cryptocurrency by staking it",
          "The process of mining new tokens",
          "Lending assets to earn interest and additional token rewards",
          "Creating new DeFi protocols",
        ],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "Which blockchain currently hosts the majority of DeFi applications?",
        options: ["Bitcoin", "Ethereum", "Solana", "Cardano"],
        correctAnswer: 1,
      },
    ],
    currentQuestion: 2,
    timeLimit: 15, // minutes
    timeRemaining: 10, // minutes
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
            <FileQuestion className="h-4 w-4 text-green-400" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-white">{quiz.title}</h1>
            <p className="text-xs text-gray-400">{quiz.description}</p>
          </div>
        </div>

        <div className="flex items-center">
          <Clock className="h-3.5 w-3.5 text-amber-400 mr-1.5" />
          <span className="text-xs text-white">{quiz.timeRemaining} min remaining</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-gray-400">
            Question {quiz.currentQuestion} of {quiz.questions.length}
          </span>
          <span className="text-xs text-gray-400">
            {Math.round((quiz.currentQuestion / quiz.questions.length) * 100)}% complete
          </span>
        </div>
        <Progress value={(quiz.currentQuestion / quiz.questions.length) * 100} className="h-1.5" />
      </div>

      <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4 mb-4">
        <div className="mb-4">
          <h2 className="text-sm font-medium text-white mb-1">{quiz.questions[quiz.currentQuestion - 1].question}</h2>
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="h-6 text-[10px] text-gray-400 hover:text-white p-0">
              <HelpCircle className="h-3 w-3 mr-1" />
              Need a hint?
            </Button>
          </div>
        </div>

        <RadioGroup defaultValue="option-0">
          {quiz.questions[quiz.currentQuestion - 1].options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 mb-3 last:mb-0">
              <RadioGroupItem
                value={`option-${index}`}
                id={`option-${index}`}
                className="border-white/20 text-purple-500"
              />
              <Label
                htmlFor={`option-${index}`}
                className="text-xs text-white cursor-pointer py-2 flex-1 hover:text-purple-400"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          className="h-7 text-xs border-white/10 text-white hover:bg-white/5"
          disabled={quiz.currentQuestion === 1}
        >
          <ChevronLeft className="h-3.5 w-3.5 mr-1.5" />
          Previous
        </Button>

        {quiz.currentQuestion < quiz.questions.length ? (
          <Button
            size="sm"
            className="h-7 text-xs bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
          >
            Next
            <ChevronRight className="h-3.5 w-3.5 ml-1.5" />
          </Button>
        ) : (
          <Button
            size="sm"
            className="h-7 text-xs bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
          >
            Submit Quiz
          </Button>
        )}
      </div>
    </div>
  )
}
