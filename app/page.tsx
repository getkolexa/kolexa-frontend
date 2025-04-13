import Image from "next/image"
import Link from "next/link"
import { Upload, MessageSquare, Shield, Award, Coins, ArrowRight, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/feature-card"
import HowItWorks from "@/components/how-it-works"
import ComparisonTable from "@/components/comparison-table"
import PricingCard from "@/components/pricing-card"
import LoginPreview from "@/components/login-preview"
import Testimonial from "@/components/testimonial"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        {/* Blockchain nodes background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Smarter Learning Meets Web3 —{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Powered by AI & Blockchain
                  </span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 max-w-xl">
                  Experience real-time AI learning with secure blockchain credentials and EduFi rewards. Own your
                  education journey in the decentralized future.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/signup">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
                    >
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border border-purple-500 text-black hover:bg-purple-500/20 hover:text-white"
                  >
                    <Wallet className="mr-2 h-4 w-4" />
                    Connect Wallet
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="relative w-full h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="AI Learning Assistant"
                      width={500}
                      height={400}
                      className="object-contain"
                    />
                  </div>
                  {/* Floating elements */}
                  <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-white/10 animate-float"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-xl border border-white/10 animate-float-delay"></div>
                  <div className="absolute top-1/2 right-5 w-12 h-12 bg-cyan-500/20 backdrop-blur-sm rounded-xl border border-white/10 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Powerful Features</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
              Our platform combines cutting-edge AI with blockchain technology to create a revolutionary learning
              experience
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Upload />}
                title="Upload PDFs/Images/Docs"
                description="Learn from any content by simply uploading your materials. Our AI will analyze and make them interactive."
              />
              <FeatureCard
                icon={<MessageSquare />}
                title="AI Q&A + Quiz Generator"
                description="Interact with your content through natural conversations and automatically generate quizzes to test your knowledge."
                highlighted={true}
              />
              <FeatureCard
                icon={<Shield />}
                title="Blockchain Credentials"
                description="Secure your learning records on the blockchain, making them tamper-proof and permanently accessible."
              />
              <FeatureCard
                icon={<Award />}
                title="NFT Certificates"
                description="Earn verifiable NFT certificates for completed courses that you truly own and can showcase anywhere."
              />
              <FeatureCard
                icon={<Coins />}
                title="EduFi Rewards"
                description="Earn tokens as you learn and complete courses, creating real value from your educational journey."
              />
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                <div className="relative h-full flex items-center justify-center px-8 py-12 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-white text-xl font-semibold mb-2">More Coming Soon</div>
                    <p className="text-gray-400">
                      We're constantly adding new features to enhance your learning experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">How It Works</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">Get started in just a few simple steps</p>

            <HowItWorks />
          </div>
        </section>

        {/* Why Web3 Matters */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Why Web3 + AI?</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
              The combination of blockchain technology and artificial intelligence creates a powerful new paradigm for
              education
            </p>

            <ComparisonTable />
          </div>
        </section>

        {/* Subscription Plan */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Simple Pricing</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
              Get access to all features with our straightforward pricing plan
            </p>

            <div className="flex justify-center">
              <PricingCard />
            </div>
          </div>
        </section>

        {/* Login Preview */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Multiple Ways to Access</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
              Choose the login method that works best for you
            </p>

            <LoginPreview />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">What Our Users Say</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
              Hear from students and educators who are already using our platform
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Testimonial
                quote="The AI assistant helped me understand complex blockchain concepts that I was struggling with. The NFT certificate I earned is now part of my digital portfolio!"
                author="Sarah K."
                role="Computer Science Student"
              />
              <Testimonial
                quote="As an educator, I can create interactive learning materials in minutes instead of hours. The blockchain verification for certificates adds real value for my students."
                author="Prof. James Wilson"
                role="University Lecturer"
                highlighted={true}
              />
              <Testimonial
                quote="I've earned EduFi tokens while learning, which actually covered my subscription costs. It's like getting paid to study!"
                author="Michael T."
                role="Self-taught Developer"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0">
                <div className="text-2xl font-bold text-white mb-2">
                  KOLEX<span className="text-purple-500">AI</span>
                </div>
                <p className="text-gray-400">Transforming education with AI and blockchain</p>
              </div>
              <div className="flex flex-wrap gap-8">
                <div>
                  <h4 className="text-white font-semibold mb-4">Platform</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">
                        Roadmap
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Company</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Legal</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition">
                        Cookies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">© 2025 KOLEXA. All rights reserved.</div>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
