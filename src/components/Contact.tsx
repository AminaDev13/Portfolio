
import Image from "next/image";
import {FaLinkedin, FaGithub } from "react-icons/fa";
// import React from 'react'

// function Contact() {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="flex justify-center">
        <Image
          src="/profile-picture.png"
          alt="Kontaktbild"
          className="w-48 h-48 object-cover rounded-md animate-pulse shadow-lg"
          height={50}
          width={50}
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">Kontakta mig</h2>
        <p className="mb-2">📧 amina.balieva@yahoo.com</p>
        <p className="mb-2">📱 +46 73 599 20 26</p>
        <p>🌍 Linköping, Sverige</p>
      </div>

      <div className=" mx-auto flex space-x-2">
        {" "}
            <a
              href="https://www.linkedin.com/in/aminat-balieva-78bb2a164/" //Linkedin länken
              className="hover:text-black"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />{" "}
            </a>{" "}
            <a
              href="https://github.com/AminaDev13" //github länken
              className="hover:text-black"
              aria-label="GitHub"
            >
              <FaGithub size={32} />{" "}
            </a>{" "}
      </div>
    </section>
  );
}
