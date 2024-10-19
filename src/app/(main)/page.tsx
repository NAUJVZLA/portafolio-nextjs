'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, HeartHandshake, Palette, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Project = {
  id: number
  title: string
  description: string
  image: string
  url: string
}

type Skill = {
  icon: React.ReactNode
  name: string
}

export default function Home() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Innovador", "Creativo", "Eficiente", "Adaptable"]

  const projects: Project[] = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Una breve descripción del Proyecto 1",
      image: "/img/1.jpg?height=200&width=300",
      url: "https://gatesteamtres.vercel.app/"
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Una breve descripción del Proyecto 2",
      image: "/img/3.jpg?height=200&width=300",
      url: "https://www.alejandroej.dev/"
    },
    {
      id: 3,
      title: "Gateste am tres",
      description: "Tienda de telefonía Móvil",
      image: "/img/proyecto3.jpg",
      url: "https://gatesteamtres.vercel.app/"
    },
  ]

  const skills: Skill[] = [
    { icon: <Code className="h-6 w-6" />, name: "Desarrollo Frontend" },
    { icon: <HeartHandshake className="h-6 w-6" />, name: "Habilidades Blandas" },
    { icon: <Palette className="h-6 w-6" />, name: "Diseño UI/UX" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {/* Nueva sección de héroe animada */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/img/1.jpg?height=1080&width=1920"
              alt="Fondo abstracto"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
          </div>
          <div className="relative z-10 text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Desarrollador Web
            </motion.h1>
            <motion.div
              className="text-3xl md:text-5xl font-semibold mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="mr-2">Soy</span>
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {words[currentWord]}
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
                <Link href="/contacts">Contáctame</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Proyectos Destacados */}
        <section className="py-16 bg-gray-100 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Proyectos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col transition-transform duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <Image
                        src={project.image}
                        alt={`Vista previa de ${project.title}`}
                        width={300}
                        height={200}
                        className="rounded-lg object-cover w-full mb-4"
                      />
                      <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={project.url} target="_blank" rel="noopener noreferrer">
                          Ver Proyecto
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Mis Habilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-105">
                    <div className="mb-4 text-purple-600">{skill.icon}</div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}