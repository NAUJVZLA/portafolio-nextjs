"use client";

import { useState, useEffect, useMemo } from "react";
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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useMemo(() => [
    "/img/img4.jpg",
    "/img/img3.jpg",
    "/img/MERKASAVVY.jpeg",
  ], []);

  const projects = useMemo(() => [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of Project 1",
      image: "/img/MERKASAVVY.jpeg",
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief description of Project 2",
      image: "/img/MERKASAVVY.jpeg",
    },
    {
      id: 3,
      title: "Project 3",
      description: "A brief description of Project 3",
      image: "/img/chat_5444434.jpg",
    },
  ], []);

  const skills = useMemo(() => [
    { icon: <Code className="h-6 w-6" />, name: "Frontend Development" },
    { icon: <Terminal className="h-6 w-6" />, name: "Backend Development" },
    { icon: <Palette className="h-6 w-6" />, name: "UI/UX Design" },
  ], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const changeSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
            className={`transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => changeSlide((currentSlide - 1 + slides.length) % slides.length)}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => changeSlide((currentSlide + 1) % slides.length)}
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              onClick={() => changeSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a mi portafolio</h1>
          <p className="text-xl mb-8">Showcasing my best work and skills</p>
          <Button asChild>
            <Link href="/contacts">Get in Touch</Link>
          </Button>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-100 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
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
      <section className="py-16 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-105"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground animate-fade-in-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start a project?</h2>
          <p className="mb-8">
            Letwork together to bring your ideas to life!
          </p>
          <Button asChild variant="secondary">
            <Link href="/contacts">Contact Me</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}