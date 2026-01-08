import Image from "next/image";

const projects = [
  {
    title: "Trafikskola DRV",
    description:
      "Modern e-handels- och kataogplattform för film byggd med Next.js 15 (App Router). Den demonstrerar produktionsmönster för datamodellering, autentiserade flöden, effektiv rendering, design av tillgängliga komponenter och komponerbara serveråtgärder.",
    longDescription:
      "En hemsida byggd med Next.js och React–komponentstruktur med återanvändbara UI–element. Har SEO optimering och responsiv design anpassad för desktop och mobil.",
    image: "/image/mockup-drv.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
    github: "https://github.com/AminaDev13/myapp2",
  },
  {
    title: "Todo App",
    description: "En enkel men kraftfull todo-applikation.",
    longDescription:
      "En CRUD-applikation där användare kan skapa, uppdatera och ta bort tasks. Byggd med React och localStorage.",
    image: "/projects/project-2.png",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/dittnamn/todo-app",
  },
  {
    title: "E-commerce UI",
    description: "Frontend för en e-handelsplattform.",
    longDescription:
      "Ett grupparbete som demonstrerar produktionstänk inom modern webbutveckling. Applikationen hanterar komplexa dataflöden mellan en SQL-databas och ett Next.js 15-frontend.",
    image: "/image/b-movies mockup.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "SQL",
      "API",
      "Better-Auth",
      "Zod",
      "Tailwind",
      "Shadcn UI",
    ],
    github: "https://github.com/dittnamn/ecommerce-ui",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
        Projekt
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={index}
            className="rounded-xl bg-white border border-slate-200"
          >
            {/* Bild */}
            <div className="relative h-72 md:h-80 bg-slate-900">
              <Image
                // src={project.image}
                // alt={project.title}
                // fill
                // className="object-cover md:object-contain"
                // priority

                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Innehåll */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {project.title}
              </h3>

              <p className="text-slate-600 mb-4">{project.longDescription}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-slate-100 text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Länkar */}
              <div className="flex gap-4 text-sm font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-slate-900 underline"
                >
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-900 underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
