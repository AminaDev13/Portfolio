
// import React from 'react'

// function Projects() {
//   return (
//     <div>Projects</div>
//   )
// }

// export default Projects


const projects = [
  { title: "Projekt 1", description: "Beskrivning av projektet. Kort info här." },
  { title: "Projekt 2", description: "Beskrivning av projektet. Kort info här." },
  { title: "Projekt 3", description: "Beskrivning av projektet. Kort info här." },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Projekt</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-blue-500/20 backdrop-blur-sm hover:scale-105 transition transform cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

