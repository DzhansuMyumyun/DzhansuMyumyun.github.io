import {
  Database,
  Globe,
  Server,
  Wrench,
} from "lucide-react";



const skillGroups = [
  {
    title: "Frontend",
    icon: <Globe size={20} />,
    items: ["React", "TypeScript", "Tailwind", "Redux", "JavaScript","HTML5", "CSS3", "Storybook"],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    items: [".NET Core", "C#", "REST API Design"],
  },
  {
    title: "Database",
    icon: <Database size={20} />,
    items: ["SQL Server", "PostgreSQL", "Entity Framework"],
  },
  {
    title: "Tools",
    icon: <Wrench size={20} />,
    items: ["Git", "CI/CD", "Docker", "Azure"],
  },
];

export default function SkillsSection () {
  return (
    <section className="py-16 md:py-20 px-6 max-w-6xl mx-auto" id="skills">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-4xl font-bold">Skills</h2>
        <p className="text-zinc-700 text-base md:text-lg mt-3">
          Technologies I use to build scalable applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border text-zinc-700 border-zinc-200 rounded-3xl p-7 bg-white"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="text-green-500">{group.icon}</div>
              <h3 className="text-xl font-semibold">{group.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-xl bg-zinc-100 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};