const skills = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Prisma",
  "Zod",
  "Better-Auth",
  "PostgreSQL",
];

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Erfarenheter</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-400 rounded-full hover:bg-blue-200 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
