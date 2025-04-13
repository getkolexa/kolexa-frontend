interface TestimonialProps {
  quote: string
  author: string
  role: string
  highlighted?: boolean
}

export default function Testimonial({ quote, author, role, highlighted = false }: TestimonialProps) {
  return (
    <div className="relative group">
      {highlighted && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-1000"></div>
      )}
      <div
        className={`relative h-full px-6 py-8 bg-slate-900/80 backdrop-blur-sm rounded-xl border ${highlighted ? "border-white/20" : "border-white/10"} group-hover:border-white/20 transition duration-300`}
      >
        <div className="mb-4">
          <svg className="h-8 w-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-300 mb-6">{quote}</p>
        <div>
          <p className="text-white font-semibold">{author}</p>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}
