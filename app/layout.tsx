import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Wrapper from '@/components/Wrapper/Wrapper'
import './globals.scss'

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
      <body className={inter.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
