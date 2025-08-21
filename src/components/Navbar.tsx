"use client"
import React, { useState } from 'react'; // Importera 'useState' från React för att hantera tillstånd.

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Skapar ett tillstånd för att hålla reda på om menyn är öppen eller stängd.

  return (
    <header className="flex gap-8  items-center p-6 bg-purple-950 text-white relative">
      
      {/* Ladda ner CV-knappen */}
      <a
        href="/cv/mycv1.pdf"
        download
        className="px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg transition transform hover:scale-105"
      >
        Ladda ner CV
      </a>

      {/* Hamburgermeny-knapp för mobilen */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className="text-white focus:outline-none md:hidden" 
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {/* Navigeringslänkar */}
      <nav 
        className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 items-center absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-6 md:p-0 z-10`}
      >
        <a href="#hero" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Om mig</a>
        <a href="#skills" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Erfarenheter</a>
        <a href="#projects" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Projekt</a>
        <a href="#contact" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
      </nav>
    </header>
  );
}