
// import React from 'react'

import Image from "next/image";

// function Hero() {
//   return (
//     <div>Hero</div>
//   )
// }

export default function Hero() {
  return (
    <section id="hero" className="container mx-auto mt-5 px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-950  mb-4">Hej,</h1>
        <p className=" text-2xl text-gray-200">
          Jag är en passionerad frontend-utvecklare med en stark drivkraft att bygga vackra och intuitiva användarupplevelser.Jag skapar effektiva och prestandaoptimerade webbapplikationer som imponerar. Jag brinner för att lösa komplexa problem och är alltid redo att bidra med nya idéer för att driva projekt framåt.
        </p>
      </div>
      <div className="flex justify-center">
     <Image
  src="/profile-picture.jpg"
  alt="Profilbild"
  className="w-94 h-94 object-cover mt-15 animate-pulse rounded-full shadow-lg"
  height={600}
  width={600}
/>
      </div>
    </section>
  );
}



