import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../src/index.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WealthWise - Financial Recovery & Security",
  description: "Expert fund recovery and fraud prevention services. Recover your wealth, regain your peace of mind.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
