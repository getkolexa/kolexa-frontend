import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "KOLEXAI",
  description: "created by Ayomisco",
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'KOLEXAI',
    description: 'created by Ayomisco',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}


import './globals.css'