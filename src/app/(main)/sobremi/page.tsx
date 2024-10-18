import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sobremi() {
  const experiences = [
    { year: "2023", title: "Junior Developer", company: "Tech Corp" },
    {
      year: "2021",
      title: "Developer",
      company: "Web Solutions Inc.",
    },
    { year: "2019", title: "Junior Developer", company: "HomeWORK" },
  ];

  const education = [
    {
      year: "2019",
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
    },
    {
      year: "2015",
      degree: "Associate Degree in Web Development",
      school: "Community College",
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
              Iam a passionate web developer with over 10 months of experience
              in creating beautiful and functional websites. My expertise
              includes frontend and development, with a focus on modern
              JavaScript frameworks and responsive design.
            </p>
            <p className="text-lg">
              When Iam not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor
              activities like hiking and photography.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <Card className="transition-transform duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle>Experience</CardTitle>
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
              <CardTitle>Education</CardTitle>
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
