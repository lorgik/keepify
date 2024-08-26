import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Wrapper from '@/components/Wrapper/Wrapper'
import Script from 'next/script'
import './globals.scss'
import StoreProvider from './StoreProvider'

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
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive"></Script>
        <Script id="tg-script" strategy="beforeInteractive">
          Telegram.WebApp.expand(); Telegram.WebApp.setBackgroundColor(&quot;#efeff4&quot;);
          Telegram.WebApp.setHeaderColor(&quot;#efeff4&quot;); Telegram.WebApp.disableVerticalSwipes();
        </Script>

        <StoreProvider>
          <Wrapper>{children}</Wrapper>
        </StoreProvider>
      </body>
    </html>
  )
}
