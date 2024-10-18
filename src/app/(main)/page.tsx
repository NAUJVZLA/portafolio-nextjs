"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Palette,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/public/img/iconos de menu.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/public/img/MERKASAVVY.jpeg?height=200&width=300",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/public/img/chat_5444434.jpg?height=200&width=300",
  },
];

const skills = [
  { icon: <Code className="h-6 w-6" />, name: "Frontend Development" },
  { icon: <Terminal className="h-6 w-6" />, name: "Backend Development" },
  { icon: <Palette className="h-6 w-6" />, name: "UI/UX Design" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Carousel */}
      <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setCurrentSlide(
                (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
              )
            }
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
            }
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl mb-8">Showcasing my best work and skills</p>
          <Button asChild>
            <Link href="/contacts">Get in Touch</Link>
          </Button>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <CardDescription className="mt-4">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/projects/${project.id}`}>View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start a project?</h2>
          <p className="mb-8">
            Let's work together to bring your ideas to life!
          </p>
          <Button asChild variant="secondary">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
