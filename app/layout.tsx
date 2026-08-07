import type { Metadata } from 'next'
import { Bricolage_Grotesque, Newsreader, JetBrains_Mono } from 'next/font/google'
import SmoothScroll from '@/components/SmoothScroll'
import './globals.css'
import { ReactNode } from 'react'

// Display — headings, /engineering wordmark. Variable font, weight set per use.
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

// Body — paragraphs, everywhere. The serif-body/sans-display inversion is deliberate.
const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

// Utility — eyebrows, labels, the stack line. /engineering only.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hikzenlabs.com'),
  title: 'HikzenLabs',
  description:
    'Websites, design and photography for travel operators, craft houses and food brands in Kashmir.',
  openGraph: {
    siteName: 'HikzenLabs',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

interface LayoutProps {
  children: ReactNode
}


export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${newsreader.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
