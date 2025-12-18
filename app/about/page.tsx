import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const skills = {
  languages: ["Python", "C++", "JavaScript", "Java", "SQL"],
  frameworks: ["React", "Node.js", "TensorFlow", "Flask"],
  tools: ["Git", "Docker", "Linux", "AWS", "Figma"],
  concepts: ["Data Structures", "Algorithms", "Machine Learning", "System Design"],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <header className="mb-20">
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">About</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-tight">
              A bit about myself
            </h1>
          </header>

          {/* Bio Section */}
          <section className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground sticky top-32">
                Biography
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
                I am currently pursuing my engineering degree with a focus on building practical solutions to real-world
                problems. My journey in engineering began with a curiosity about how things work, which has evolved into
                a passion for creating systems that are both functional and elegant.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
                Outside of academics, I spend my time working on personal projects, contributing to open-source, and
                continuously learning new technologies. I believe in the power of engineering to make a meaningful
                impact on people&apos;s lives.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
                When I am not coding, you will find me reading technical books, exploring new ideas, or working on side
                projects that challenge my understanding and push my boundaries.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="border-t border-border pt-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground sticky top-32">
                  Technical Skills
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="grid sm:grid-cols-2 gap-12">
                  {/* Languages */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Languages</h3>
                    <ul className="space-y-2">
                      {skills.languages.map((skill) => (
                        <li key={skill} className="text-lg flex items-center gap-3 group">
                          <span className="w-1 h-1 bg-foreground rounded-full group-hover:scale-150 transition-transform" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Frameworks */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Frameworks</h3>
                    <ul className="space-y-2">
                      {skills.frameworks.map((skill) => (
                        <li key={skill} className="text-lg flex items-center gap-3 group">
                          <span className="w-1 h-1 bg-foreground rounded-full group-hover:scale-150 transition-transform" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Tools</h3>
                    <ul className="space-y-2">
                      {skills.tools.map((skill) => (
                        <li key={skill} className="text-lg flex items-center gap-3 group">
                          <span className="w-1 h-1 bg-foreground rounded-full group-hover:scale-150 transition-transform" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Concepts */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Concepts</h3>
                    <ul className="space-y-2">
                      {skills.concepts.map((skill) => (
                        <li key={skill} className="text-lg flex items-center gap-3 group">
                          <span className="w-1 h-1 bg-foreground rounded-full group-hover:scale-150 transition-transform" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="border-t border-border pt-24 mt-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground sticky top-32">
                  Education
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="border-l border-border pl-8 space-y-2">
                  <p className="font-mono text-xs text-muted-foreground">2022 — Present</p>
                  <h3 className="text-xl font-medium">Bachelor of Engineering</h3>
                  <p className="text-muted-foreground">Your University Name</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Relevant coursework: Data Structures, Algorithms, Database Systems, Computer Networks, Machine
                    Learning, Software Engineering
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
