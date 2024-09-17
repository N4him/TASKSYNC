import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-8 h-auto flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <img src="/images/logo_transparent.png" alt="Logo principal" className="h-24 w-24 max-w-none" />
          <span className="sr-only">TaskSync</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link href="/" className="text-base font-medium hover:underline underline-offset-4" prefetch={false}>
            Inicio
          </Link>
          <Link href="/pages/features" className="text-base font-medium hover:underline underline-offset-4" prefetch={false}>
            Características
          </Link>
          <Link href="/pages/prices" className="text-base font-medium hover:underline underline-offset-4" prefetch={false}>
            Precios
          </Link>
          <Link href="/pages/aboutUs" className="text-base font-medium hover:underline underline-offset-4" prefetch={false}>
            Acerca de nosotros
          </Link>
          <Link href="/pages/login" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
            Iniciar sesión
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center">
        {/* Sección de Introducción */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre TaskSync</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              En TaskSync, nuestra misión es simplificar la gestión de tareas y proyectos para equipos de todos tamaños. Creemos en la eficiencia y la colaboración, y nuestra plataforma está diseñada para mantener a todos sincronizados y enfocados en lo que realmente importa.
            </p>
          </div>
        </section>

        {/* Sección del Equipo */}
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold mb-8">Conoce a Nuestro Equipo</h2>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg shadow-lg max-w-xs transition-transform transform hover:scale-105">
                <Avatar>
                  <AvatarImage src="/images/team-member1.jpg" alt="Miembro del equipo" />
                  <AvatarFallback>EH</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mt-4">Esteban Hernández</h3>
                <p className="text-muted-foreground">CEO</p>
                <p className="mt-2">
                  Esteban lidera el equipo de TaskSync con pasión y visión. Con más de 10 años de experiencia en el desarrollo de software, su enfoque está en mejorar continuamente la plataforma para satisfacer las necesidades de nuestros usuarios.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg shadow-lg max-w-xs transition-transform transform hover:scale-105">
                <Avatar>
                  <AvatarImage src="/images/team-member2.jpg" alt="Miembro del equipo" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mt-4">Johan Loaiza</h3>
                <p className="text-muted-foreground">CTO</p>
                <p className="mt-2">
                  Johan se encarga de la tecnología detrás de TaskSync. Su experiencia en ingeniería de software y su pasión por la innovación aseguran que nuestra plataforma esté siempre a la vanguardia.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg shadow-lg max-w-xs transition-transform transform hover:scale-105">
                <Avatar>
                  <AvatarImage src="/images/team-member3.jpg" alt="Miembro del equipo" />
                  <AvatarFallback>MV</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mt-4">Miguel Velazco</h3>
                <p className="text-muted-foreground">Desarrollador Backend Senior
                </p>
                <p className="mt-2">
                Miguel es la mente maestra detrás de la robusta infraestructura de TaskSync, su profunda experiencia en arquitecturas escalables, su trabajo garantiza que nuestra plataforma sea fiable y eficiente.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg shadow-lg max-w-xs transition-transform transform hover:scale-105">
                <Avatar>
                  <AvatarImage src="/images/team-member4.jpg" alt="Miembro del equipo" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mt-4">Juan Pantoja</h3>
                <p className="text-muted-foreground">Desarrollador Backend</p>
                <p className="mt-2">
                Juan aporta su experiencia en desarrollo backend para construir y mantener la lógica del servidor de TaskSync.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Contacto */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Si tienes alguna pregunta o deseas obtener más información sobre TaskSync, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.
            </p>
            <form className="max-w-lg mx-auto space-y-4">
              <Input type="text" placeholder="Tu nombre" className="w-full" />
              <Input type="email" placeholder="Tu correo electrónico" className="w-full" />
              <Input type="text" placeholder="Asunto" className="w-full" />
              <textarea placeholder="Tu mensaje" className="w-full h-40 p-2 border border-muted rounded-lg"></textarea>
              <Button type="submit" className="w-full bg-primary text-primary-foreground">Enviar Mensaje</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 TaskSync. Todos los derechos reservados</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Términos del servicio
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}

export default AboutUsPage;
