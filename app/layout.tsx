import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'AppointmentOS for Study Abroad Agencies - Stop Losing Student Leads',
  description: 'Built for Study Abroad Agencies. AppointmentOS installs a structured AI-powered enrollment workflow that instantly responds, qualifies, and books consultations — so serious student inquiries never go cold.',
  keywords: ['appointment scheduling', 'lead conversion', 'AI automation', 'booking system', 'consultation booking', 'lead response time', 'revenue protection'],
  authors: [{ name: 'Bader Echchalh' }],
  creator: 'Bader Echchalh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://appointmentos.com',
    title: 'AppointmentOS for Study Abroad Agencies',
    description: 'Built for Study Abroad Agencies. Install a structured AI enrollment workflow that protects your pipeline and converts more student inquiries into booked consultations.',
    siteName: 'AppointmentOS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppointmentOS - Stop Losing High-Intent Leads Within 5 Minutes',
    description: 'Stop losing revenue to slow follow-up. Install a structured AI workflow that protects your pipeline.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
