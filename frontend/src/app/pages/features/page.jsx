import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-8 h-auto flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
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
            href="#"
            className="text-base font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Precios
          </Link>
          <Link
            href="#"
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
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Características destacadas de TaskSync
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Descubre cómo TaskSync puede transformar la manera en que trabajas.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/pages/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    ¡Empieza ahora!
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Aprende más
                  </Link>
                </div>
              </div>
              <img
                src="/images/features.png"
                width="550"
                height="550"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-3xl">Características Clave</div>
                <h2 className="text-xl font-bold tracking-tighter sm:text-5xl">
                  Herramientas poderosas para tu productividad
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl text-center mx-auto">
                  TaskSync te ofrece un conjunto completo de herramientas para gestionar tus tareas y colaborar con tu equipo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="bg-muted rounded-full p-4">
                  <CalendarIcon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Programación de tareas</h3>
                  <p className="text-muted-foreground">
                    Asigna y rastrea tareas fácilmente con una interfaz intuitiva.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="bg-muted rounded-full p-4">
                  <UsersIcon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Trabajo en equipo</h3>
                  <p className="text-muted-foreground">
                    Colabora con tu equipo en tiempo real y mantén todos en la misma página.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="bg-muted rounded-full p-4">
                  <GaugeIcon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Seguimiento de proceso</h3>
                  <p className="text-muted-foreground">
                    Monitorea el progreso de las tareas y obtén una visión clara del estado de los proyectos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonios</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Lo que dicen nuestros usuarios</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Escucha las experiencias de nuestros usuarios y cómo TaskSync ha mejorado su gestión de tareas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
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
                    "TaskSync ha transformado la forma en que nuestro equipo gestiona las tareas. La facilidad de uso y las funcionalidades son excepcionales."
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="bg-muted rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-medium">Maria Salazar</p>
                      <p className="text-sm text-muted-foreground">Desarrolladora</p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-muted-foreground">
                    "Recomiendo TaskSync a cualquier equipo que quiera mejorar su eficiencia y colaboración. Ha sido un cambio positivo para nosotros."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¡Comienza hoy mismo con TaskSync!</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mx-auto">
                  Regístrate ahora y experimenta cómo TaskSync puede mejorar tu flujo de trabajo.
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
                  Regístrate hoy y comienza a utilizar TaskSync. No se requiere tarjeta de crédito.{" "}
                  <Link href="#" className="underline underline-offset-2" prefetch={false}>
                    Términos &amp; condiciones
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
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
    </div>
  );
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

export default FeaturesPage;
