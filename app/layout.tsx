import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Playfair_Display, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { PageLoader } from "@/components/page-loader"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Rishiraj Pathak | Student",
  description: "Portfolio of Rishiraj Pathak - Engineering student showcasing skills, experience, and projects.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <PageLoader>
          {children}
          <MobileBottomNav />
        </PageLoader>
      </body>
    </html>
  )
}
