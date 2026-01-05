"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Briefcase, FileText } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/resume", label: "Achievements", icon: FileText },
]

export function MobileBottomNav() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="md:hidden fixed bottom-3 left-3 right-3 z-50">
      <div className="bg-white/95 backdrop-blur-lg rounded-full px-1 py-1.5 shadow-xl border border-gray-200">
        <ul className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex flex-col items-center justify-center px-3 py-1 rounded-full transition-all duration-300 ${
                    isActive 
                      ? "bg-gray-900 text-white" 
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Icon 
                    size={18} 
                    strokeWidth={isActive ? 2.5 : 2}
                    className="transition-all duration-300"
                  />
                  <span className={`text-[9px] font-medium mt-0.5 transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-80"
                  }`}>
                    {item.label}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
