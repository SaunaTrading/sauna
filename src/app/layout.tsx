import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import MetaProvider from "@/context/providers/Provider"

import { cn } from "@/lib/utils"
import TopNav from "@/components/ui/top-nav"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <MetaProvider>
        <TopNav />
        {children}
        </MetaProvider>
      </body>
    </html>
  )
}
