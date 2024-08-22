import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Wrapper from '@/components/Wrapper/Wrapper'
import './globals.scss'
import Head from 'next/head'

const inter = Manrope({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Keepify',
  description: 'Keepify description',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>
      <body className={inter.className}>
        <Wrapper>{children}</Wrapper>
        <script>window.Telegram.WebApp.disableVerticalSwipes()</script>
      </body>
    </html>
  )
}
