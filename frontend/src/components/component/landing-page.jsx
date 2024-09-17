/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/oAbTqzV7zRx
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-8 h-auto flex items-center justify-between">
          <Link href="/" className="flex items-| justify-center" prefetch={false}>
            <img src="/images/logo_transparent.png" alt="Logo principal" className="h-24 w-24 max-w-none" />
            <span className="sr-only">Task Manager</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4 sm:gap-6"> 
          <Link
            href="/pages/features"
            className="text-base font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Características
            </Link>
          <Link
            href="/pages/prices"
            className="text-base font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Precios
          </Link>
          <Link
            href="/pages/aboutUs"
            className="text-base font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Acerca de nosotros
          </Link>
          <Link
            href="/pages/login"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}>
            Iniciar sesión
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    TaskSync unifica tus tareas, compañeros de equipo y herramientas
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Mantenlo todo en el mismo lugar, aunque tu equipo no lo esté.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/pages/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    ¡Pruébalo ahora!
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Aprende mas
                  </Link>
                </div>
              </div>
              <img
                src="/images/taskmanagement.png"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-3xl">Claves de TaskSync</div>
                <h2 className="text-xl font-bold tracking-tighter sm:text-5xl">
                  Poderosas herramientas para mejorar tú productividad
                </h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl text-center mx-auto">
                  Sencillo, flexible y potente. Todo lo que necesitas son tableros, listas y tarjetas para poder ver de forma clara quién está haciendo qué y las tareas pendientes.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div
                className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="bg-muted rounded-full p-4">
                  <CalendarIcon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Programación de tareas</h3>
                  <p className="text-muted-foreground">
                    Fácil para asignar tareas y marcar su estado de forma intuitiva
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="bg-muted rounded-full p-4">
                  <UsersIcon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Trabajo en equipo</h3>
                  <p className="text-muted-foreground">
                    Invita a tu equipo y colaboren en tiempo real
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="bg-muted rounded-full p-4">
                  <GaugeIcon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Seguimiento de proceso</h3>
                  <p className="text-muted-foreground">
                    Monitorea de forma fácil el progreso de las tareas de tu equipo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Recomendaciones</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Qué dicen nuestros clientes?</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Escucha las recomendaciones de nuestros clientes y cómo TaskSync ha ayudado a su flujo de trabajo
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col items-start space-y-4">
                <div className="bg-muted rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-medium">John Aguirre</p>
                      <p className="text-sm text-muted-foreground">Project Manager</p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-muted-foreground">
                    "TaskSync ha sido un cambio radical para nuestro equipo. La interfaz intuitiva y las potentes funcionalidades nos han ayudado a mantenernos organizados y al tanto de nuestros proyectos."
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="bg-muted rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-medium">Adriana Diaz</p>
                      <p className="text-sm text-muted-foreground">Team Lead</p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-muted-foreground">
                    "Recomiendo encarecidamente TaskSync a cualquier equipo que busque optimizar su flujo de trabajo. Las funciones de colaboración han sido un cambio radical para nosotros."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Estás listo para mejorar la productividad de tu equipo?</h2>
                <p
                  className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mx-auto">
                  Regístrate en TaskSync hoy y experimenta la mejor herramienta de tareas cooperativas
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Ingresa tu correo" className="max-w-lg flex-1" />
                  <Link
                    href="/pages/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Regístrate
                  </Link>
                </form>
                <p className="text-xs text-muted-foreground">
                  Regístrate y empieza hoy. No necesitas tarjeta.{" "}
                  <Link href="#" className="underline underline-offset-2" prefetch={false}>
                    Términos &amp; condiciones
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 TaskSync. Todos los derechos reservados</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Términos del servicio
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>)
}

function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function GaugeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
