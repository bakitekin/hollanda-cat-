// app/layout.tsx
import './globals.css' // or any global styles
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
