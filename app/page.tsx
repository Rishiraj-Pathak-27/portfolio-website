import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Tech3DModel } from "@/components/tech-3d-model";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="min-h-[100vh] flex items-center px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                    Engineering Student
                  </p>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-medium leading-[1.1] tracking-tight">
                    Rishiraj Pathak
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Passionate engineering student specializing in Electronics and Computer Science. 
                  I build innovative software solutions, exploring new technologies 
                  and solving complex problems through hands-on projects.
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 bg-foreground text-background px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium hover:bg-foreground/90 transition-colors rounded-md"
                  >
                    Learn more about me
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/resume"
                    className="inline-flex items-center gap-2 border border-border px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium hover:bg-secondary transition-colors rounded-md"
                  >
                    View Resume
                  </Link>
                </div>

                <div className="space-y-4 pt-8 border-t border-border/30">
                  <p className="font-mono text-xs text-muted-foreground tracking-widest">
                    BASED IN
                  </p>
                  <p className="text-lg">Nagpur, India</p>
                </div>
              </div>

              {/* Right Content - 3D Model */}
              <div className="order-1 lg:order-2 w-full flex items-center justify-center px-4 sm:px-0">
                <div className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-full mx-auto">
                  <Tech3DModel />
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 sm:bottom-1.5 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1">
              <div className="mouse-btn">
                <span className="mouse-scroll"></span>
              </div>
              <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                Scroll Down
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
