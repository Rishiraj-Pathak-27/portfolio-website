import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const skills = {
  languages: ["Python", "Java", "JavaScript", "HTML", "CSS"],
  frameworks: ["React", "Node.js"],
  tools: ["Git", "Github"],
  
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <header className="mb-20">
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
              About
            </p>
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
                I am pursuing my Engineering (BE) degree in Electronics and Computer
                Science Engineering at Shri Ramdeobaba College of Engineering
                and Management. Along with learning core electronics subjects, I
                am strongly interested in the IT field and software development.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
               I have knowledge of programming, basic data structures,
               algorithms, and data handling, and I enjoy solving problems
               using code.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
                I like learning new technologies and improving my
                skills in software and computing. My goal is to apply what I
                learn to real-world problems and grow as a professional in the
                IT and technology domain.
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
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Languages
                    </h3>
                    <ul className="space-y-2">
                      {skills.languages.map((skill) => (
                        <li
                          key={skill}
                          className="text-lg flex items-center gap-3 group"
                        >
                          <span className="w-1 h-1 bg-foreground rounded-full group-hover:scale-150 transition-transform" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Frameworks */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Frameworks
                    </h3>
                    <ul className="space-y-2">
                      {skills.frameworks.map((skill) => (
                        <li
                          key={skill}
                          className="text-lg flex items-center gap-3 group"
                        >
                          <span className="w-1 h-1 bg-foreground rounded-full group-hover:scale-150 transition-transform" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Tools
                    </h3>
                    <ul className="space-y-2">
                      {skills.tools.map((skill) => (
                        <li
                          key={skill}
                          className="text-lg flex items-center gap-3 group"
                        >
                          <span className="w-1 h-1 bg-foreground rounded-full group-hover:scale-150 transition-transform" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Concepts */}
                  
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
              <div className="lg:col-span-8 space-y-16">
                {/* Bachelor's Degree */}
                <div className="relative pl-8 border-l-2 border-border hover:border-foreground/20 transition-colors">
                  <div className="absolute -left-1.25 top-0 w-2 h-2 bg-foreground rounded-full" />
                  <div className="space-y-3">
                    <p className="font-mono text-xs text-muted-foreground">
                      2024 — Present
                    </p>
                    <h3 className="text-2xl font-medium">
                      Bachelor of Engineering (BE)
                    </h3>
                    <p className="text-lg text-foreground/80">
                      Electronics and Computer Science Engineering
                    </p>
                    <p className="text-muted-foreground">
                      Shri Ramdeobaba College of Engineering and Management, Nagpur
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-sm font-medium text-muted-foreground mb-2">
                        Relevant Coursework:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Data Structures & Algorithms",
                          "Machine Learning",
                          "Operating Systems",
                          "Software Engineering",
                          "Web Technologies",
                          "Electronics Fundamentals"
                        ].map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 text-xs bg-secondary/50 hover:bg-secondary rounded-full transition-colors"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Higher Secondary Education */}
                <div className="relative pl-8 border-l-2 border-border hover:border-foreground/20 transition-colors">
                  <div className="absolute -left-1.25 top-0 w-2 h-2 bg-foreground rounded-full" />
                  <div className="space-y-3">
                    <p className="font-mono text-xs text-muted-foreground">
                      2021 — 2024
                    </p>
                    <h3 className="text-2xl font-medium">
                      Diploma (Polytechnic)
                    </h3>
                    <p className="text-lg text-foreground/80">
                      Computer Engineering
                    </p>
                    <p className="text-muted-foreground">
                      G.H Raisoni Institute of Engineering & Technology, Nagpur 
                    </p>
                  </div>
                </div>

                {/* Secondary Education */}
                <div className="relative pl-8 border-l-2 border-border hover:border-foreground/20 transition-colors">
                  <div className="absolute -left-1.25 top-0 w-2 h-2 bg-foreground rounded-full" />
                  <div className="space-y-3">
                    <p className="font-mono text-xs text-muted-foreground">
                      2020 — 2021
                    </p>
                    <h3 className="text-2xl font-medium">
                      Secondary School Certificate (SSC)
                    </h3>
                    <p className="text-muted-foreground">
                      R.S Mundle English School, Nagpur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
