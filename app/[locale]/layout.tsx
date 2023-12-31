import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { NextIntCustomProvider } from '@/shared/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface PropsWithChildren {
    children: React.ReactNode
    params: {
      locale: string | undefined
    }
  }

export default async function RootLayout({
  children, params }: PropsWithChildren) {
    const locale = useLocale()

    if (params.locale !== locale) {
        notFound()
      }

  return (
    <html lang={locale}>
        <NextIntCustomProvider locale={locale}>
        <body className={inter.className}>{children}</body>
        </NextIntCustomProvider>
    </html>
  )
}
