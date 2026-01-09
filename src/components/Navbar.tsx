"use client";
import React, { useState } from "react"; // Importera 'useState' från React för att hantera tillstånd.

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Skapar ett tillstånd för att hålla reda på om menyn är öppen eller stängd.

  return (
    <header className="relative flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200">
      {/* Ladda ner CV-knappen */}
      <a
        href="/cv/cv2.pdf"
        download
        className="px-4 py-2 bg-amber-300 hover:bg-fuchsia-200 rounded-lg transition transform hover:scale-105"
      >
        Download CV
      </a>

      {/* Hamburgermeny-knapp för mobilen */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="ml-4 text-slate-900 md:hidden focus:outline-none"
        aria-label="Öppna meny"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Navigeringslänkar */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-6 items-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 shadow-md md:shadow-none z-10`}
      >
        <a
          href="#hero"
          className="text-slate-700 hover:text-blue-600 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          About Me
        </a>
        <a
          href="#skills"
          className="text-slate-700 hover:text-blue-600 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Experience
        </a>
        <a
          href="#projects"
          className="text-slate-700 hover:text-blue-600 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-slate-700 hover:text-blue-600 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
