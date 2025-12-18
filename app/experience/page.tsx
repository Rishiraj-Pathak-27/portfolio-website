import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "Tech Company Name",
    period: "Summer 2024",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver features that improved user experience by 25%.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: 2,
    role: "Research Assistant",
    company: "University Lab Name",
    period: "2023 — Present",
    description:
      "Conducting research in machine learning applications for data analysis. Published findings in departmental journal and presented at student symposium.",
    technologies: ["Python", "TensorFlow", "Data Analysis", "Research"],
  },
  {
    id: 3,
    role: "Teaching Assistant",
    company: "Computer Science Department",
    period: "Fall 2023",
    description:
      "Assisted in teaching introductory programming course to 150+ students. Held office hours, graded assignments, and developed supplementary learning materials.",
    technologies: ["Python", "Teaching", "Curriculum Development"],
  },
]

const projects = [
  {
    id: 1,
    title: "Personal Project One",
    description:
      "A full-stack web application that helps users track and manage their daily tasks with smart categorization.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 2,
    title: "Open Source Contribution",
    description:
      "Contributed bug fixes and feature improvements to popular open-source libraries in the JavaScript ecosystem.",
    technologies: ["JavaScript", "TypeScript", "Git"],
    link: "#",
  },
  {
    id: 3,
    title: "Hackathon Project",
    description:
      "Built a prototype solution for local community challenges during 48-hour hackathon, winning second place.",
    technologies: ["Python", "Flask", "Machine Learning"],
    link: "#",
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <header className="mb-20">
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Experience</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-tight">
              Where I have worked
            </h1>
          </header>

          {/* Work Experience Section */}
          <section className="mb-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground sticky top-32">
                  Work History
                </p>
              </div>
              <div className="lg:col-span-8 space-y-16">
                {experiences.map((exp, index) => (
                  <article key={exp.id} className="group relative border-l border-border pl-8 pb-8">
                    {/* Timeline dot */}
                    <span className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-background border-2 border-foreground rounded-full group-hover:bg-foreground transition-colors" />

                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
                        <span className="font-mono text-xs text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-xs font-mono border border-border bg-secondary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="border-t border-border pt-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground sticky top-32">
                  Projects
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="grid gap-8">
                  {projects.map((project) => (
                    <a
                      key={project.id}
                      href={project.link}
                      className="group block p-6 border border-border hover:border-foreground/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-medium group-hover:underline underline-offset-4">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          size={18}
                          className="text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                        />
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-xs font-mono text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
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
