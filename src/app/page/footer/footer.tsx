"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function InteractiveFooter() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateTransform = (index: number) => {
    if (!isMounted) return "none";
    const maxMove = 100; // reduced maximum movement for subtlety
    const speed = 0.03; // reduced speed for smoother movement
    const x =
      (mousePosition.x / window.innerWidth - 0.5) *
      maxMove *
      speed *
      (index + 1);
    const y =
      (mousePosition.y / window.innerHeight - 0.5) *
      maxMove *
      speed *
      (index + 1);
    return `translate(${x}px, ${y}px)`;
  };

  if (!isMounted) {
    return null;
  }

  return (
    <footer className=" py-16 overflow-hidden border-t border-gray-200 ">
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div
            className="text-center md:text-left"
            style={{ transform: calculateTransform(1) }}
          >
            <h3 className="text-xl font-bold mb-2">
              &lt; Juan Carlos Caridad Gonzalez/&gt;
            </h3>
            <p className="flex text-sm justify-center text-gray-600">
              Desarrollador Web
            </p>
          </div>

          <div
            className="text-center md:text-left "
            style={{ transform: calculateTransform(2) }}
          >
            <h4 className="text-lg font-semibold mb-4">
              Enlaces Rápidos
            </h4>
            <nav className="space-y-2 transition-transform duration-300 hover:scale-105 ">
              <Link
                href="/"
                className="block text-gray-600 hover:text-[#fbcc21] transition-colors "
              >
                Inicio
              </Link>
              <Link
                href="/projects"
                className="block text-gray-600 hover:text-[#fbcc21] transition-colors"
              >
                Proyectos
              </Link>
              <Link
                href="/sobremi"
                className="block text-gray-600 hover:text-[#fbcc21] transition-colors"
              >
                Sobre Mí
              </Link>
              <Link
                href="/contacts"
                className="block text-gray-600 hover:text-[#fbcc21] transition-colors"
              >
                Contacto
              </Link>
            </nav>
          </div>

          <div
            className="text-center md:text-left transition-transform duration-300 hover:scale-105"
            style={{ transform: calculateTransform(3) }}
          >
            <h4 className="text-lg  mb-4 transition-transform duration-300 hover:scale-105">
              Conecta Conmigo
            </h4>
            <div className="flex justify-center md:justify-start space-x-4  transition-transform duration-300 hover:scale-105 ">
              <a
                href="https://github.com/NAUJVZLA"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <Github className="h-6 w-6 block text-gray-600 hover:text-[#fbcc21] transition-colors " />
              </a>
              <a
                href="https://www.linkedin.com/in/juan-carlos-caridad-gonzalez-202b54323/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#fbcc21] transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#fbcc21] transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="mailto:tu@email.com"
                className="text-gray-600 hover:text-[#fbcc21] transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div
            className="text-center md:text-left  "
            style={{ transform: calculateTransform(4) }}
          >
            <h4 className="text-lg font-semibold mb-4">
              ¿Listo para iniciar un proyecto?
            </h4>
            <p className="mb-6 block text-gray-600 hover:text-gray-800 transition-colors">
              Trabajemos juntos para dar vida a tus ideas!
            </p>
            <Button asChild className="transition-transform duration-300 hover:scale-105 bg-[#151414] hover:bg-[#726e6e]">
              <Link href="/contacts" className="flex items-center">
                Contáctame
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        <div
          className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500"
          style={{ transform: calculateTransform(5) }}
        >
          <p>
            &copy; {new Date().getFullYear()} &lt;JCCG/&gt; . Casi Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
