import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '远通物流 | 一站式综合物流服务商',
  description:
    '远通物流专注公路运输、仓储配送、国际货运与供应链管理，覆盖全国的智能物流网络，为企业提供安全、准时、高效的一站式物流解决方案。',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1e3a8a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`light ${notoSansSC.className}`}>
      <body className="bg-background antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
