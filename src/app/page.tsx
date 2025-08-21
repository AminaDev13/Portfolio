
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {

  return (
<main className="min-h-screen bg-gradient-to-br from bg-[#301c49] to-[#140a21] text-white font-sans">
<Navbar/>
<Hero />
<Skills/>
<Projects/>
<Contact/>
<Footer/>
</main>

  );
}