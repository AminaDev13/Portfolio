import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto mt-10 px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      {/* Text */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Hej, jag är <span className="text-amber-500">Amina</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
          Jag är en passionerad frontend-utvecklare med en stark drivkraft att
          bygga vackra och intuitiva användarupplevelser.Jag skapar effektiva
          och prestandaoptimerade webbapplikationer som imponerar. Jag brinner
          för att lösa komplexa problem och är alltid redo att bidra med nya
          idéer för att driva projekt framåt. .
        </p>

        {/* Call to action */}
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-amber-300 text-black rounded-lg hover:bg-amber-600 transition"
          >
            Se projekt
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:border-amber-600 hover:text-white-600 transition font-weight: 700"
          >
            Kontakta mig
          </a>
        </div>
      </div>

      {/* Bild */}
      <div className="flex justify-center">
        <Image
          src="/profile-picture.jpg"
          alt="Profilbild"
          width={420}
          height={420}
          className="rounded-full object-cover shadow-lg ring-4 ring-slate-100"
          priority
        />
      </div>
    </section>
  );
}
