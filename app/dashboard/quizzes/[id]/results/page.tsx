export const metadata = {
  title: "Quiz Results - KOLEXAI",
  description: "View your quiz results",
}

import QuizResultsClientPage from "./QuizResultsClientPage"

export default function QuizResultsPage({ params }: { params: { id: string } }) {
  return <QuizResultsClientPage params={params} />
}
