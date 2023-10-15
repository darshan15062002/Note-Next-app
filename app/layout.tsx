import { ThemeProvider } from '@/components/providers/them-provider'
import './globals.css'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Note App',
  description: 'Note creatations helps you better and faster work',
  icons:{
    icon:[
      {
      media:"(prefers-color-scheme:light)",
      url:'/log.png',
      href:'/log.png'
    },
    {
      media:"(prefers-color-scheme:dark)",
      url:'/log.png',
      href:'/log.png'
    },

  ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        storageKey='note-theme'>
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
