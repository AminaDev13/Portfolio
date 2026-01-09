import Image from "next/image";

const projects = [
  {
    title: "Learning game",

    longDescription:
      " Guess the number is a web-based children's game that trains numbers and logical thinking through simple, interactive guesses (1–10).",
    image: "/image/game.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AminaDev13/Gissa-spel",
    //demo: "https://demo.com",
  },
  {
    title: "Driving School Website",
    longDescription:
      "A website built with Next.js and React component structure with reusable UI elements. Has SEO optimization and responsive design adapted for desktop and mobile.",
    image: "/image/mockup-drv.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
    github: "https://github.com/AminaDev13/myapp2",
    //  demo: "https://demo.com",
  },
  {
    title: "E-commerce UI",
    longDescription:
      "A group project that demonstrates production thinking in modern web development. The application handles complex data flows between a SQL database and a Next.js 15 frontend.",
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
    // demo: "https://demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
        Projects
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

                {/* {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-900 underline"
                  >
                    Live Demo
                  </a> */}
                {/* )} */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
