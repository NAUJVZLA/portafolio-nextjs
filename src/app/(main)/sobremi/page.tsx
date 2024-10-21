import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sobremi() {
  const experiences = [
    { year: "2024", title: "Junior Developer", company: "Proyectos Personales" },
    {
      year: "2024",
      title: "Developer",
      company: "Proyectos Personales.",
    },
    { year: "2024", title: "Junior Developer", company: "Proyectos Personales" },
  ];

  const education = [
    {
      year: "2010",
      degree: "Capic",
      school: "Curso de sistemas ",
    },
    {
      year: "2013",
      degree: "Tegnologo administracion",
      school: "Unidad Educativa I.U.G.E.L",
    },
    {
      year: "2014",
      degree: "Capic",
      school: "Reparacion de Equipos de Computos",
    },

    {
      year: "2015",
      degree: "Capic",
      school: "Curso de Redes wi-fi y alambricas",
    },
    {
      year: "2024",
      degree: "Riwi",
      school: "Development",
    },
  ];

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <Image
              src="/img/juancaridad.jpg"
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-full mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">
              Hola soy Juan Carlos Caridad Gonzalez
            </h2>
            <p className="text-lg mb-4">
              Soy un apasionado desarrollador web con una formación en sistemas, donde tengo más de 15 años de experiencia en conexiones, controles de acceso de CCTV, reparación y mejora de PCs de alto rendimiento, así como en la instalación de sistemas operativos. Durante este tiempo, he aprendido mucho en el campo de la tecnología.

            </p>
            <p className="text-lg">
              Aunque siempre me ha gustado la programación, por diversas razones no había podido dedicarme a ello a tiempo completo. Sin embargo, hace aproximadamente 8 meses decidí dejar todo a un lado para enfocarme en aprender programación desde cero. Actualmente, invierto un mínimo de 8 horas al día en mi desarrollo en este campo y ansío dedicarme por completo a crear y construir proyectos significativos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <Card className="transition-transform duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex justify-center" >Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {experiences.map((exp, index) => (
                  <li key={index} className="flex">
                    <span className="font-semibold w-16">{exp.year}</span>
                    <div>
                      <h3 className="font-semibold">{exp.title}</h3>
                      <p>{exp.company}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-transform duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex justify-center" >Algunas mensiones a mi educacion</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {education.map((edu, index) => (
                  <li key={index} className="flex">
                    <span className="font-semibold w-16">{edu.year}</span>
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p>{edu.school}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
