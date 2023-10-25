import './globals.css'
import type { Metadata } from 'next'
import NextAuthSessionProvider from '@/providers/sessionProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Banco app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          <ToastContainer/>
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
