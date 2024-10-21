"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  // Datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Definición de campos del formulario para que sean dinámicos
  const formFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Your name",
      required: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Your email",
      required: true,
    },
    {
      id: "message",
      label: "Message",
      component: "textarea",
      placeholder: "Your message",
      required: true,
    },
  ];

  // Información de contacto adicional
  const contactMethods = [
    {
      icon: <Mail className="mr-2 hover:text-[#fbcc21] transition-colors" />,
      label: "Email",
      value: "JUANCARIDAD@GMAIL.COM",
      href: "mailto:JU4NC4R1D4D@GMAIL.com",
    },
    {
      icon: <Phone className="mr-2 hover:text-[#fbcc21] transition-colors" />,
      label: "Phone",
      value: "(+57) 3147327452",
      href: "tel:+57 3147327452",
    },
    {
      icon: <Github className="mr-2 hover:text-[#fbcc21] transition-colors" />,
      label: "GitHub",
      value: "github.com/NAUJVZLA",
      href: "https://github.com/NAUJVZLA",
    },
    {
      icon: <Linkedin className="mr-2 hover:text-[#fbcc21] transition-colors" />,
      label: "LinkedIn",
      value: "linkedin.com/in/JuanCaridad",
      href: "https://www.linkedin.com/in/juan-carlos-caridad-gonzalez-202b54323/",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Contáctame</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="transition-transform hover:translate-x-1  ">
            <CardHeader>
              <CardTitle>Envíame tu mensaje a través de:</CardTitle>
              <CardDescription>
                Los mensajes enviados a través de este medio son leídos y
                respondidos de inmediato.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  {formFields.map((field) => (
                    <div key={field.id} className="flex flex-col space-y-1.5">
                      <Label htmlFor={field.id}>{field.label}</Label>
                      {field.component === "textarea" ? (
                        <Textarea
                          id={field.id}
                          name={field.id}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                        />
                      ) : (
                        <Input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <CardFooter>
                  <Button className="bg-[#151414] hover:bg-[#726e6e] " type="submit">Enviar Mensaje</Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>

          <Card className="transition-transform hover:translate-x-1">
            <CardHeader>
              <CardTitle>Otras formas de contactarme</CardTitle>
              <CardDescription>
                Correo, número de teléfono, GitHub y LinkedIn.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {contactMethods.map((method, index) => (
                  <li key={index} className="flex items-center">
                    {method.icon}
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {method.value}
                    </a>
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
