import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Code,
  Briefcase,
  Award,
  GraduationCap,
  Trophy,
  ExternalLink,
  Github,
} from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* header */}
          <header className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
                Achievements
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-tight">
                My Achievements
              </h1>
            </div>
            {/*download btn*/}
            <a
              href="https://drive.google.com/file/d/1Sn5V1wrsgkZJJq3i0uH7XszQUTZEMen1/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block self-start sm:self-auto"
            >
              <button className="group relative w-[140px] h-auto px-4 py-3 text-center bg-transparent border-none text-foreground font-mono text-xs tracking-widest uppercase transition-all duration-500 hover:shadow-[0_5px_15px_rgba(0,0,0,0.5)] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-1 before:w-full before:border-b-4 before:border-l-4 before:border-transparent before:translate-x-full before:transition-all before:duration-300 hover:before:border-foreground hover:before:h-full hover:before:translate-x-0 hover:before:transition-[transform_0.3s_linear,height_0.3s_linear_0.3s] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:border-t-4 after:border-r-4 after:border-transparent after:-translate-x-full after:transition-all after:duration-300 hover:after:border-foreground hover:after:h-full hover:after:translate-x-0 hover:after:transition-[transform_0.3s_linear,height_0.3s_linear_0.5s]">
                <span className="relative z-10">View Resume</span>
              </button>
            </a>
          </header>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="border border-border p-6 hover:border-foreground/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Code size={20} className="text-muted-foreground" />
                <span className="font-mono text-xs uppercase text-muted-foreground">
                  Projects
                </span>
              </div>
              <p className="text-3xl font-serif font-medium">2+</p>
            </div>
            
            <div className="border border-border p-6 hover:border-foreground/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Award size={20} className="text-muted-foreground" />
                <span className="font-mono text-xs uppercase text-muted-foreground">
                  Internships
                </span>
              </div>
              <p className="text-3xl font-serif font-medium">1</p>
            </div>
            <div className="border border-border p-6 hover:border-foreground/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap size={20} className="text-muted-foreground" />
                <span className="font-mono text-xs uppercase text-muted-foreground">
                  Education
                </span>
              </div>
              <p className="text-3xl font-serif font-medium">B.E.</p>
            </div>
          </div>

          {/* Resume Content */}
          <div className="border border-border bg-card p-6 sm:p-10 lg:p-16">
            {/* Resume Header */}
            <div className="border-b border-border pb-8 mb-10">
              <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-2">
                Rishiraj Pathak
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Engineering Student
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={14} />
                  <span>rishirajraj124@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={14} />
                  <span>+91 9823406699</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={14} />
                  <span>Nagpur, India</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe size={14} />
                  <span>rishiraj-portfolio.com</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <section className="mb-10">
              <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
                Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate software engineering student with hands-on experience
                in full-stack web development and machine learning. Proven track
                record of developing innovative solutions including dark matter
                classification systems and alumni portals. Strong foundation in
                modern web technologies and collaborative development practices.
                Seeking opportunities to contribute to impactful projects while
                continuing to grow technical expertise.
              </p>
            </section>

            {/* Education */}
            <section className="mb-10">
              <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-medium">
                      Bachelor of Engineering in Computer Science
                    </h4>
                    <span className="font-mono text-xs text-muted-foreground">
                      2024 — Present
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    Ramdeobaba University, Nagpur
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Focus: Software Engineering, Machine Learning, Web
                    Development
                  </p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-10">
              <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
                Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-medium">Software Engineer Intern</h4>
                    <span className="font-mono text-xs text-muted-foreground">
                      May - July 2025
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Netfotech Solutions
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-foreground">—</span>
                      Developed and maintained web applications using React and
                      Node.js
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">—</span>
                      Improved user experience by 25% through feature
                      optimization
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">—</span>
                      Collaborated with cross-functional teams on feature
                      delivery
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Competitions & Hackathons */}
            <section className="mb-10">
              <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
                Competitions & Hackathons
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-foreground/30 pl-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Trophy size={18} className="text-foreground mt-1" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h4 className="font-medium">
                          Smart India Hackathon 2025
                        </h4>
                        <span className="font-mono text-xs text-muted-foreground">
                          2025
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Participated in India&apos;s largest hackathon
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Built innovative solution for real-world problem
                        statement
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-2 border-foreground/30 pl-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Trophy size={18} className="text-foreground mt-1" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h4 className="font-medium">Claude Solve-A-Thon</h4>
                        <span className="font-mono text-xs text-muted-foreground">
                          2025
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Winner At Indian Institute of Information Technology
                        (IIIT), Nagpur
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Built an AI-powered dark matter event classification and
                        anomaly detection system using Machine Learning and
                        Python. Developed a real-time analytics dashboard with
                        React and Next.js for data visualization and insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* GitHub & Coding Profile Integration */}
          <div className="mt-12 space-y-8">
            {/* GitHub Contribution Graph */}
            <section className="border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Github size={24} className="text-foreground" />
                  <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                    GitHub Activity
                  </h3>
                </div>
                <a
                  href="https://github.com/Rishiraj-Pathak-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  View Profile <ExternalLink size={12} />
                </a>
              </div>

              {/* GitHub Contribution Calendar */}
              <div className="w-full overflow-x-auto">
                <img
                  src="https://ghchart.rshah.org/Rishiraj-Pathak-27"
                  alt="GitHub Contribution Chart"
                  className="w-full max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* GitHub Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <div className="text-center p-4 bg-muted/30 rounded">
                  <p className="text-2xl font-serif font-medium">
                    <img
                      src="https://img.shields.io/github/followers/Rishiraj-Pathak-27?label=Followers&style=social"
                      alt="GitHub Followers"
                      className="inline-block"
                    />
                  </p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded">
                  <p className="text-xs text-muted-foreground mb-1">
                    Public Repos
                  </p>
                  <p className="text-2xl font-serif font-medium">
                    <img
                      src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/Rishiraj-Pathak-27&query=$.public_repos&label=&style=flat-square"
                      alt="Public Repos"
                      className="inline-block"
                    />
                  </p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded col-span-2">
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=Rishiraj-Pathak-27&show_icons=true&theme=transparent&hide_border=true&title_color=888&text_color=888&icon_color=888"
                    alt="GitHub Stats"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Coding Profiles */}
            <section className="border border-border p-6">
              <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-6">
                Coding Profiles
              </h3>

              {/* Codolio Stats Widget */}
              <div className="mb-6 p-4 border border-border bg-muted/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">
                    Codolio - Unified Coding Profile
                  </h4>
                  <a
                    href="https://codolio.com/profile/rishirajpathak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    View Profile <ExternalLink size={12} />
                  </a>
                </div>
                <div className="w-full overflow-hidden rounded">
              
                  <iframe
                    src="https://codolio.com/embed/rishirajpathak"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    className="rounded"
                  />
                </div>
               
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Interested in working together?
            </p>
            <a
              href="mailto:rishirajraj124@gmail.com"
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
  );
}
