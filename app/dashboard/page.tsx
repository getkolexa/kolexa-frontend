import DashboardLayout from "@/components/dashboard/dashboard-layout"
import ChatInterface from "@/components/dashboard/chat-interface"

export const metadata = {
  title: "Dashboard - KOLEXAI",
  description: "AI-powered learning assistant dashboard",
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <ChatInterface />
    </DashboardLayout>
  )
}
