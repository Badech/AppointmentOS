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
  title: 'AppointmentOS - AI-Powered Appointment & Enrollment Workflow System',
  description: 'Convert more leads into booked consultations automatically. A structured AI-powered workflow that ensures every lead gets an instant response, qualification, booking link, and smart follow-up.',
  keywords: ['appointment scheduling', 'lead conversion', 'AI automation', 'booking system', 'consultation booking'],
  authors: [{ name: 'Bader Echchalh' }],
  creator: 'Bader Echchalh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://appointmentos.com',
    title: 'AppointmentOS - AI-Powered Appointment & Enrollment Workflow System',
    description: 'Convert more leads into booked consultations automatically. A structured AI-powered workflow that ensures every lead gets an instant response, qualification, booking link, and smart follow-up.',
    siteName: 'AppointmentOS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppointmentOS - AI-Powered Appointment & Enrollment Workflow System',
    description: 'Convert more leads into booked consultations automatically.',
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
