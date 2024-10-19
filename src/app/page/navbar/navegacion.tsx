'use client'

import * as React from "react"
import Link from "next/link"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Facebook, FolderCode, Instagram, Youtube, Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/ui/dark-mode"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Primera Web",
    href: "/",
    description:
      "En esta primera web use lenguajes como css - html - unicamente ya que fue mi primera web",
  },
  {
    title: "Calculadora",
    href: "/",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Lista De Tareas",
    href: "/",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Clon de imstagram",
    href: "/",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Jewel",
    href: "/",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Web Systems",
    href: "/",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function NavigationPrincipal() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <FolderCode className="h-6 w-6" />
          <span className="font-bold text-xl">&lt; Juan Carlos /&gt;</span>
        </Link>

        {isMobile ? (
          <>
            <button onClick={toggleMenu} className="z-50">
              {isOpen ? <X /> : <Menu />}
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-background pt-16 px-4"
                >
                  <div className="bg-slate-500 flex flex-col space-y-4">
                    <Link href="/sobremi" className="text-lg" onClick={toggleMenu}>Acerca de mí</Link>
                    <Link href="/proyectos" className="text-lg" onClick={toggleMenu}>Proyectos</Link>
                    <Link href="/experiencia" className="text-lg" onClick={toggleMenu}>Mi Experiencia Laboral</Link>
                    <Link href="/contacts" className="text-lg" onClick={toggleMenu}>Contacto</Link>
                    <div className="flex space-x-4 mt-4">
                      <Youtube className="h-6 w-6" />
                      <Facebook className="h-6 w-6" />
                      <Instagram className="h-6 w-6" />
                    </div>
                    <ModeToggle />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <div className="flex justify-center container mt-6 my-5 ml-5">
            <NavigationMenu className="transition-transform duration-300 hover:scale-105">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Menu De Portafolio</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <FolderCode className="h-20 w-20" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              &lt; Juan Carlos Caridad Gonzalez/&gt;
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Web developer
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/sobremi" title="Acerca de mi ">
                        Naci en Maracaibo-VZLA Tengo 34 Me gusta Crear Soluciones ,
                        Desde los 14
                      </ListItem>
                      <ListItem href="/proyectos" title="Proyectos">
                        He tenido la Oportunidad de conocer diferentes tecnologias las
                        cuales
                      </ListItem>
                      <ListItem href="/contacts" title="Contacto">
                        <div className="flex flex-row justify-center items-center space-x-4">
                          <Youtube />
                          <Facebook />
                          <Instagram />
                        </div>
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Proyectos</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/experiencia" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Mi Experiencia Laboral
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </div>
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"