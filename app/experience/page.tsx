import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Netfotech Solutions",
    period: "May - July 2025 (Summer)",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver features that improved user experience by 25%.",
    certificateLink: "https://drive.google.com/file/d/1HXAmzaq5TNSjmzKESYldSA7Y2G8InudW/view?usp=drive_link",
  },
];

const projects = [
  {
    id: 1,
    title: "🌌 Dark Matter Classification System",
    description:
      "An intelligent dark matter event classification and anomaly detection system",
    technologies: ["React", "Next.js", "Python", "Machine Learning"],
    features: [
      "🔬 Event Classification - AI-powered dark matter event analysis",
      "📊 Results Dashboard - Real-time visualization and statistics",
      "⚠️ Anomaly Detection - Automatic detection of unusual events",
      "📈 Data Analytics - Comprehensive dataset insights",
      "🤖 Claude AI Integration - Advanced reasoning and analysis",
      "📁 Batch Processing - Upload and analyze multiple events",
    ],
    image:
      "https://cdn.mos.cms.futurecdn.net/LqdSSqy5A2Snp7Fcy6MUHd.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Alumni Portal Ramdeobaba University",
    description:
      "The alumni portal is a secure, user-friendly platform that enables alumni, students, and the university to connect through networking, career opportunities, mentorship, events, updates, and engagement tracking in one place.",
    technologies: ["HTML", "CSS", "Javascript", "Firebase", "Firestore"],
    features: [
      "🎓 Mentorship Program – One-to-one alumni–student mentoring and guidance",
      "📅 Event Management – Alumni meets, reunions, webinars, and workshops",
      "📰 News & Updates – University announcements and alumni success stories",
      "🔔 Networking & Messaging – Direct communication and collaboration tools",
      "📊 Engagement Dashboard – Track participation, events, and contributions",
    ],
    image: "https://rbunagpur.in/wp-content/uploads/2025/03/finallogo.png",
    link: "https://alumni-portal-ramdeobaba-university.vercel.app/",
  },
  
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <header className="mb-20">
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Experience
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-tight">
              Where I have worked
            </h1>
          </header>

          {/* exp sec */}
          <section className="mb-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground sticky top-32">
                  Work History
                </p>
              </div>
              <div className="lg:col-span-8 space-y-16">
                {experiences.map((exp, index) => (
                  <article
                    key={exp.id}
                    className="group relative border-l-2 border-foreground/30 pl-8 pb-8"
                  >
                    {/* timeline dot */}
                    <span className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-background border-2 border-foreground rounded-full group-hover:bg-foreground transition-colors" />

                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <p className="font-mono text-xs text-muted-foreground">
                          {exp.period}
                        </p>
                        <span className="font-mono text-xs text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* View Certificate Button */}
                      {exp.certificateLink && (
                        <a
                          href={exp.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4"
                        >
                          <button className="relative w-40 h-11 bg-foreground text-background border-none rounded-[0.625em] text-base font-bold cursor-pointer overflow-hidden z-10 hover:text-foreground transition-colors duration-500 before:content-[''] before:bg-background before:absolute before:-z-10 before:-left-[20%] before:-right-[20%] before:top-0 before:bottom-0 before:skew-x-[-45deg] before:scale-x-0 before:transition-all before:duration-500 hover:before:scale-x-100">
                            Certificate
                          </button>
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="border-t border-border pt-28">
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden border border-border hover:border-foreground/40 transition-all duration-300"
                    >
                      {/* Project Image */}
                      {project.image && (
                        <div className="relative h-48 overflow-hidden bg-muted/30">
                          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background z-10" />
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`w-full h-full ${
                              project.id === 2 
                                ? "object-contain p-8" 
                                : "object-cover"
                            } opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500`}
                          />
                        </div>
                      )}

                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-medium group-hover:underline underline-offset-4">
                            {project.title}
                          </h3>
                          <ArrowUpRight
                            size={18}
                            className="text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                          />
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Features Section */}
                        {project.features && project.features.length > 0 && (
                          <div className="mb-4 space-y-2">
                            <p className="text-xs font-mono uppercase text-muted-foreground tracking-wider">
                              Key Features
                            </p>
                            <ul className="space-y-1.5">
                              {project.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-muted-foreground flex items-start"
                                >
                                  <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-foreground/50 shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-mono text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
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
  );
}
