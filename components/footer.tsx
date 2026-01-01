import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-0">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Get in touch</p>
            <a 
              href="mailto:rishirajraj124@gmail.com" 
              className="btn-shine text-foreground hover:text-white right-12 transition-colors inline-block"
            >
              rishirajraj124@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/Rishiraj-Pathak-27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rishiraj-u-pathak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear}  Rishiraj Pathak. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}
