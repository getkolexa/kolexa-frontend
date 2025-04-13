import { Upload, MessageSquare, FileQuestion, Award } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-6 h-6 text-blue-400" />,
      title: "Upload Material",
      description: "Upload your learning materials in any format - PDFs, images, documents, or links.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      title: "Chat & Learn",
      description: "Interact with your content through AI-powered conversations to deepen your understanding.",
    },
    {
      icon: <FileQuestion className="w-6 h-6 text-cyan-400" />,
      title: "Take Quizzes",
      description: "Test your knowledge with automatically generated quizzes tailored to your learning materials.",
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Get Credentialed",
      description: "Earn blockchain-verified NFT certificates and tokens as you complete your learning journey.",
    },
  ]

  return (
    <div className="relative">
      {/* Connecting line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 hidden md:block"></div>

      <div className="space-y-12 md:space-y-0 relative">
        {steps.map((step, index) => (
          <div key={index} className="md:grid md:grid-cols-2 md:gap-8 items-center">
            <div className={`md:text-right ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <div className={`inline-block md:hidden p-3 rounded-full bg-slate-800 mb-4`}>{step.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>

            <div className={`hidden md:flex ${index % 2 === 0 ? "justify-end" : "justify-start"} relative`}>
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-70"></div>
                <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-slate-800 border border-white/20 z-10">
                  {step.icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
