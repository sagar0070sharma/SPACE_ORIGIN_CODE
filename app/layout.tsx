import type { Metadata } from 'next'
import { Orbitron, Poppins } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['400','500','600','700'] })

export const metadata: Metadata = { title: 'Space Origin | Advanced Space Education', description: 'Explore, discover and innovate with future-ready STEM education.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-[#050816]"><body className={`${orbitron.variable} ${poppins.variable}`}>{children}</body></html>
}
