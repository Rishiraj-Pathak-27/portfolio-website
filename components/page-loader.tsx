"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"

function HomePageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Skeleton className="h-5 w-24" />
          <div className="hidden md:flex items-center gap-8">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-36" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <main className="flex-1 pt-20">
        <section className="min-h-[100vh] flex items-center px-4 sm:px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Skeleton className="h-3 w-36 rounded-full" />
                  <Skeleton className="h-20 w-full max-w-2xl" />
                </div>
                <div className="space-y-3 max-w-xl">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-3/4" />
                </div>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Skeleton className="h-11 w-44 rounded-md" />
                  <Skeleton className="h-11 w-32 rounded-md" />
                </div>
                <div className="space-y-3 pt-8 border-t border-border/30">
                  <Skeleton className="h-3 w-20 rounded-full" />
                  <Skeleton className="h-6 w-32" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section Skeleton */}
        <section className="border-t border-border px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 border border-border space-y-4">
                  <div className="flex items-start justify-between">
                    <Skeleton className="h-4 w-8 rounded-full" />
                    <Skeleton className="h-4 w-4" />
                  </div>
                  <Skeleton className="h-7 w-40" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Status Section Skeleton */}
        <section className="border-t border-border px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-5 w-64" />
              </div>
              <Skeleton className="h-4 w-36" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer Skeleton */}
      <footer className="border-t border-border mt-auto pb-24 md:pb-0">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <Skeleton className="h-3 w-24 rounded-full" />
              <Skeleton className="h-6 w-56" />
            </div>
            <div className="flex items-center gap-6">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function AboutPageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Skeleton className="h-5 w-24" />
          <div className="hidden md:flex items-center gap-8">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-36" />
          </div>
        </div>
      </div>

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-20">
            <Skeleton className="h-3 w-16 rounded-full mb-4" />
            <Skeleton className="h-16 w-full max-w-xl" />
          </header>

          {/* Bio Section */}
          <section className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
            <div className="lg:col-span-4">
              <Skeleton className="h-4 w-24 rounded-full" />
            </div>
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/5" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-5/6" />
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="border-t border-border pt-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <Skeleton className="h-4 w-32 rounded-full" />
              </div>
              <div className="lg:col-span-8">
                <div className="grid sm:grid-cols-2 gap-12">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="space-y-4">
                      <Skeleton className="h-4 w-24 rounded-full" />
                      <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((j) => (
                          <Skeleton key={j} className="h-5 w-32" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border mt-auto pb-24 md:pb-0">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <Skeleton className="h-3 w-24 rounded-full" />
              <Skeleton className="h-6 w-56" />
            </div>
            <div className="flex items-center gap-6">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ExperiencePageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Skeleton className="h-5 w-24" />
          <div className="hidden md:flex items-center gap-8">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-36" />
          </div>
        </div>
      </div>

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-20">
            <Skeleton className="h-3 w-24 rounded-full mb-4" />
            <Skeleton className="h-16 w-full max-w-2xl" />
          </header>

          {/* Work History Section */}
          <section className="mb-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <Skeleton className="h-4 w-28 rounded-full" />
              </div>
              <div className="lg:col-span-8 space-y-16">
                {[1, 2].map((i) => (
                  <div key={i} className="space-y-4 pb-8 border-b border-border last:border-0">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-7 w-48" />
                        <Skeleton className="h-5 w-40" />
                      </div>
                      <Skeleton className="h-9 w-28 rounded-md" />
                    </div>
                    <Skeleton className="h-4 w-32 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="border-t border-border pt-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <Skeleton className="h-4 w-20 rounded-full" />
              </div>
              <div className="lg:col-span-8 space-y-16">
                {[1, 2].map((i) => (
                  <div key={i} className="space-y-6">
                    <Skeleton className="h-56 w-full rounded-lg" />
                    <div className="space-y-4">
                      <Skeleton className="h-8 w-3/4" />
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-5 w-5/6" />
                      <div className="flex flex-wrap gap-2 pt-2">
                        {[1, 2, 3, 4].map((j) => (
                          <Skeleton key={j} className="h-6 w-20 rounded-full" />
                        ))}
                      </div>
                      <div className="space-y-2 pt-4">
                        {[1, 2, 3, 4].map((j) => (
                          <Skeleton key={j} className="h-4 w-full max-w-md" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border mt-auto pb-24 md:pb-0">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <Skeleton className="h-3 w-24 rounded-full" />
              <Skeleton className="h-6 w-56" />
            </div>
            <div className="flex items-center gap-6">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ResumePageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Skeleton className="h-5 w-24" />
          <div className="hidden md:flex items-center gap-8">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-36" />
          </div>
        </div>
      </div>

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-20">
            <Skeleton className="h-3 w-32 rounded-full mb-4" />
            <Skeleton className="h-16 w-full max-w-2xl" />
          </header>

          <div className="space-y-24">
            {[1, 2, 3].map((i) => (
              <section key={i} className="border-t border-border pt-16 first:border-0 first:pt-0">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                  <div className="lg:col-span-4">
                    <Skeleton className="h-4 w-24 rounded-full" />
                  </div>
                  <div className="lg:col-span-8 space-y-6">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="space-y-3 pb-6 border-b border-border last:border-0">
                        <Skeleton className="h-6 w-48" />
                        <Skeleton className="h-5 w-36" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-5/6" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-border mt-auto pb-24 md:pb-0">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <Skeleton className="h-3 w-24 rounded-full" />
              <Skeleton className="h-6 w-56" />
            </div>
            <div className="flex items-center gap-6">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    setIsLoading(true)
    
    // Scroll to top on navigation
    window.scrollTo(0, 0)
    
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [pathname, mounted])

  if (!mounted || isLoading) {
    if (pathname === "/about") return <AboutPageSkeleton />
    if (pathname === "/experience") return <ExperiencePageSkeleton />
    if (pathname === "/resume") return <ResumePageSkeleton />
    return <HomePageSkeleton />
  }

  return <>{children}</>
}
