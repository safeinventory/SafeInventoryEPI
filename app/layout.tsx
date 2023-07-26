import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { preload } from 'react-dom'

const poppins = Poppins({ 
  weight: ['300', '400', '600' ],
  style: 'normal',
  preload: false,
 })

export const metadata: Metadata = {
  title: 'Safe Inventory',
  description: 'Gerenciamento de Estoque EPIs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
