import { NextIntlClientProvider, useMessages } from 'next-intl'
import { ReactNode } from 'react'

interface ProviderProps {
  children: ReactNode
  locale: string
}

export function NextIntCustomProvider({ children, locale }: ProviderProps) {
  const messages = useMessages()
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
