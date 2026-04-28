import { CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "Experience in REST APIs, SQL & real-time systems",
    "Strong focus on clean architecture & maintainability",
    "Built A/B testing systems improving engagement",
    "Passionate about UI/UX and performance",
    "Business-minded developer who solves real problems",
  ];

  return (
    <section className="py-16 md:py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-4xl font-bold  tracking-tight">About Me</h2>
          <p className="text-zinc-700 mt-3 text-base md:text-lg">
            Full-stack developer focused on scalable systems and clean user
            experiences.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Card */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-zinc-700 text-base md:text-lg leading-relaxed">
              I’m a Full Stack Developer with 5+ years of experience building
              modern web applications.
            </p>

            <p className="text-zinc-700 text-base md:text-lg leading-relaxed mt-5">
              I enjoy turning complex business requirements into fast,
              maintainable products with clean architecture, strong UX, and
              scalable backend systems.
            </p>

            <p className="text-zinc-700 text-base md:text-lg leading-relaxed mt-5">
              My goal is simple: build software that creates measurable value.
            </p>
          </div>

          {/* Right Highlights */}
          <div className="space-y-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4"
              >
                <CheckCircle2
                  className="text-green-500 mt-0.5 shrink-0"
                  size={18}
                />
                <span className="text-zinc-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}