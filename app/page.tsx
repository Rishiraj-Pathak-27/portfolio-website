import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center px-6">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-4">
                  <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                    Engineering Student
                  </p>
                  <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-medium leading-[0.9] tracking-tight text-balance">
                    Rishiraj Pathak
                  </h1>
                </div>

                <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Passionate engineering student specializing in Electronics and Computer Science. 
                  I build innovative software solutions, exploring new technologies 
                  and solving complex problems through hands-on projects.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
                  >
                    Learn more about me
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/resume"
                    className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    View Resume
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-8">
                {/* my photo */}
                <div className="relative group w-full max-w-xs sm:max-w-sm lg:max-w-none">
                  <div className="absolute inset-0 bg-foreground rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto lg:mx-0 rounded-full overflow-hidden border-2 border-foreground/20 group-hover:border-foreground/40 transition-all duration-300 shadow-2xl">
                    <img
                      src="/professional-photo.jpg"
                      alt="Rishiraj Pathak"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-4 text-center lg:text-right w-full">
                  <p className="font-mono text-xs text-muted-foreground tracking-widest">
                    BASED IN
                  </p>
                  <p className="text-lg">Nagpur, India</p>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-6 hidden lg:flex items-center gap-3 text-muted-foreground">
              <ArrowDownRight size={16} className="animate-bounce" />
              <span className="font-mono text-xs tracking-widest uppercase">
                Scroll
              </span>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="border-t border-border px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <Link
                href="/about"
                className="group block p-6 border border-border hover:border-foreground/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    01
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">About & Skills</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  My background, technical skills, and what drives me as an
                  engineer.
                </p>
              </Link>

              <Link
                href="/experience"
                className="group block p-6 border border-border hover:border-foreground/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    02
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">Experience</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Internships, projects, and hands-on work that shaped my
                  journey.
                </p>
              </Link>

              <Link
                href="/resume"
                className="group block p-6 border border-border hover:border-foreground/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    03
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">Resume</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A complete overview of my education, skills, and achievements.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Status Section */}
        <section className="border-t border-border px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-foreground"></span>
                </span>
                <span className="text-sm">
                  Currently open to internship opportunities
                </span>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Last updated: December 2025
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
