import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Wrapper from '@/components/Wrapper/Wrapper'
import './globals.scss'
import Head from 'next/head'
import Script from 'next/script'

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
        <Script src="https://telegram.org/js/telegram-web-app.js"></Script>
      </Head>
      <body className={inter.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
