import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  highlighted?: boolean
}

export default function FeatureCard({ icon, title, description, highlighted = false }: FeatureCardProps) {
  return (
    <div className="relative group">
      {highlighted && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-1000"></div>
      )}
      <div
        className={`relative h-full px-8 py-12 bg-slate-900/80 backdrop-blur-sm rounded-xl border ${highlighted ? "border-white/20" : "border-white/10"} group-hover:border-white/20 transition duration-300`}
      >
        <div
          className={`inline-flex p-3 rounded-lg ${highlighted ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20" : "bg-white/5"} mb-4`}
        >
          <div className="w-6 h-6 text-blue-400">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}
