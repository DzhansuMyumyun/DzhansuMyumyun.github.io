import { Mail, Send } from "lucide-react";
import GithubIcon from '../assets/github.png';
import LinkedinIcon from '../assets/linkedin.png';
import Resume from '../assets/doc/Resume.pdf';

export default function ContactSection() {
  return (
    <section className="py-16 md:py-20 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-10 md:p-16 shadow-sm">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-5">
              Open to Opportunities
            </span>

            <h2 className="text-4xl md:text-4xl font-bold tracking-tight mb-4">
              Let’s build something great together
            </h2>

            <p className="text-zinc-700 text-base md:text-lg leading-relaxed">
              I'm currently available for full-time Full Stack Developer roles,
              freelance work, or exciting product opportunities.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <a
              href="mailto:dzhansu.myumyun@outlook.com"
              className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-md transition"
            >
              <Mail className="mb-4 text-green-500" size={24} />
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="text-zinc-500 text-sm">dzhansu.myumyun@outlook.com</p>
            </a>

            <a href="https://www.linkedin.com/in/dzhansumyumyun/" target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-md transition" >
            <img 
              src={LinkedinIcon} 
              alt="Linkedin" 
              className="w-5 h-5 mb-5 hover:scale-110 transition-transform" 
            />
              <h3 className="font-semibold text-lg mb-1">LinkedIn</h3>
              <p className="text-zinc-500 text-sm">Connect professionally</p>
          </a>

          <a href="https://github.com/DzhansuMyumyun" target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-md transition" >
            <img 
              src={GithubIcon} 
              alt="GitHub" 
              className="w-5 h-5 mb-5 hover:scale-110 transition-transform" 
            />
              <h3 className="font-semibold text-lg mb-1">GitHub</h3>
              <p className="text-zinc-500 text-sm">View code & projects</p>
          </a>

          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:dzhansu.myumyun@outlook.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-black text-white hover:opacity-90 transition"
            >
              <Send size={18} />
              Contact Me
            </a>

            <a
              href={Resume}
              download
              className="px-6 py-3 rounded-2xl border border-zinc-300 hover:bg-white transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}