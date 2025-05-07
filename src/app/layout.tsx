import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { PropsWithChildren } from 'react'

import './globals.css'

const helvetica = localFont({
  src: '../fonts/HelveticaNeue.ttf',
  display: 'swap',
  variable: '--font-helvetica',
})

export const metadata: Metadata = {
  title: 'Club',
  description: 'Club',
  openGraph: {
    title: 'Club',
    description: 'Club',
    locale: 'en_US',
    type: 'website',
  },
}

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`${helvetica.variable} antialiased`}>
      <ThemeProvider
        attribute="class"
        // defaultTheme="system"
        // enableSystem
        forcedTheme="light"
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout
