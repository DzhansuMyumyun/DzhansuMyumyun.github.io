import { CheckCircle2, Briefcase, CalendarDays } from "lucide-react";

export function Experience() {
  const jobs = [
    {
      role: "Web Developer",
      company: "Splendid Research - Hamburg, Germany",
      period: "2021 — 2025",
      points: [
        "Developed and maintained responsive web applications using HTML, CSS, and JavaScript",
        "Led the relaunch of a panel portal, including UI improvements and style guide creation.",
        "Improved performance and page load speed by 30% through code optimization",
        "Ensured high usability through UX-focused testing and improvements",
        "Collaborated closely with product managers and marketing teams to deliver business requirements"
      ],
    },
    {
      role: "Software Developer / Intern",
      company: "Addvals – Brussels, Belgium",
      period: "2020 — 2021",
      points: [
        "Contributed to building applications using Elsa Workflows",
        "Assisted in implementing security features and assessments",
        "Developed and presented an MVP to stakeholders",
        "Supported A/B testing implementation for web applications"
      ],
    },
    {
      role: "Power Apps Developer / Intern",
      company: "Scholengroep – Brussels, Belgium",
      period: "2019 — 2020",
      points: [
        "Built internal tools using Power Apps and SharePoint",
        "Automated workflows with Power Automate",
        "Improved application performance and usability",
        "Delivered business-focused solutions tailored to user needs"
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 px-6 bg-zinc-50" id="experience">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-4xl tracking-tight font-bold">Experience</h2>
          <p className="text-zinc-700 mt-3 text-base md:text-lg">
            Professional experience delivering business-focused software.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {jobs.map((job) => (
            <div
              key={job.company + job.role}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm"
            >
              {/* Top */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold">{job.role}</h3>
                  <div className="flex items-center gap-2 text-zinc-600 mt-1">
                    <Briefcase size={16} />
                    <span>{job.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <CalendarDays size={16} />
                  <span>{job.period}</span>
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-3">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-zinc-700"
                  >
                    <CheckCircle2
                      className="text-green-500 mt-1 shrink-0"
                      size={16}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}