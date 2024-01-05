import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components'


export const metadata: Metadata = {
  title: 'Nikeys',
  description: 'Get the trendiest of nike shoes here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        footer
        </body>
    </html>
  )
}
