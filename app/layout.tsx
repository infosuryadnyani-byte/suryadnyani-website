import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Suryadnyani Renewable Energy',
  description: 'Premium solar energy solutions for residential and commercial customers',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png  ',
  },
  openGraph: {
    type: 'website',
    title: 'Suryadnyani Renewable Energy',
    description: 'Premium solar energy solutions for residential and commercial customers',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-white">{children}</body>
    </html>
  )
}
