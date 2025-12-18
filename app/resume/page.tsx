import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Download, Mail, Phone, MapPin, Globe } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <header className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Resume</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-tight">My Resume</h1>
            </div>
            <a
              href="#"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors self-start sm:self-auto"
            >
              <Download size={16} />
              Download PDF
            </a>
          </header>

          {/* Resume Content */}
          <div className="border border-border bg-card p-6 sm:p-10 lg:p-16">
            {/* Resume Header */}
            <div className="border-b border-border pb-8 mb-10">
              <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-2">Your Name</h2>
              <p className="text-lg text-muted-foreground mb-6">Engineering Student</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={14} />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={14} />
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={14} />
                  <span>Your City, Country</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe size={14} />
                  <span>yourportfolio.com</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <section className="mb-10">
              <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Motivated engineering student with hands-on experience in software development and a strong foundation
                in computer science fundamentals. Passionate about building scalable solutions and continuously learning
                new technologies. Seeking opportunities to apply technical skills in a challenging environment.
              </p>
            </section>

            {/* Education */}
            <section className="mb-10">
              <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-medium">Bachelor of Engineering</h4>
                    <span className="font-mono text-xs text-muted-foreground">2022 — 2026 (Expected)</span>
                  </div>
                  <p className="text-muted-foreground">Your University Name</p>
                  <p className="text-sm text-muted-foreground mt-2">GPA: 3.8/4.0 | Dean&apos;s List</p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-10">
              <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-medium">Software Engineering Intern</h4>
                    <span className="font-mono text-xs text-muted-foreground">Summer 2024</span>
                  </div>
                  <p className="text-muted-foreground mb-2">Tech Company Name</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-foreground">—</span>
                      Developed web applications using React and Node.js
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">—</span>
                      Improved application performance by 25% through optimization
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">—</span>
                      Collaborated with cross-functional teams on feature delivery
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-medium">Research Assistant</h4>
                    <span className="font-mono text-xs text-muted-foreground">2023 — Present</span>
                  </div>
                  <p className="text-muted-foreground mb-2">University Lab Name</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-foreground">—</span>
                      Conducted research in machine learning applications
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">—</span>
                      Published findings in departmental journal
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-medium">Teaching Assistant</h4>
                    <span className="font-mono text-xs text-muted-foreground">Fall 2023</span>
                  </div>
                  <p className="text-muted-foreground mb-2">Computer Science Department</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-foreground">—</span>
                      Assisted in teaching programming to 150+ students
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">—</span>
                      Developed supplementary learning materials
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-10">
              <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
                Technical Skills
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Languages:</span> Python, C++, JavaScript, Java, SQL
                </div>
                <div>
                  <span className="text-muted-foreground">Frameworks:</span> React, Node.js, TensorFlow, Flask
                </div>
                <div>
                  <span className="text-muted-foreground">Tools:</span> Git, Docker, Linux, AWS, Figma
                </div>
                <div>
                  <span className="text-muted-foreground">Concepts:</span> Data Structures, Algorithms, ML, System
                  Design
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Achievements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-foreground">—</span>
                  Dean&apos;s List for Academic Excellence (2022-2024)
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">—</span>
                  Second Place, University Hackathon 2023
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">—</span>
                  Open Source Contributor — 50+ contributions
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">—</span>
                  Technical Writing Award, Student Symposium 2024
                </li>
              </ul>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Interested in working together?</p>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 text-lg hover:underline underline-offset-4"
            >
              Get in touch
              <Mail size={18} />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
