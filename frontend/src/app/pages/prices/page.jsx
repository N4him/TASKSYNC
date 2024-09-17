import Link from "next/link";
import { Button } from "@/components/ui/button";

function PricingPage() {
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
        {/* Sección de Precios */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12">Nuestros Planes de Precios</h1>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {/* Plan Básico */}
              <div className="flex flex-col items-center text-center p-6 bg-zinc-600 border border-muted rounded-lg shadow-lg max-w-sm transition-transform transform hover:scale-105">
                <h2 className="text-2xl font-bold mb-4">Básico</h2>
                <p className="text-lg mb-4">$10/mes</p>
                <p className="text-muted-foreground mb-4">
                  Ideal para individuos y pequeños equipos. Incluye funciones básicas para gestionar tareas y proyectos.
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Gestión de tareas</li>
                  <li>Proyectos ilimitados</li>
                  <li>Soporte básico</li>
                </ul>
                <Button className="bg-primary text-primary-foreground">Elegir Plan</Button>
              </div>

              {/* Plan Profesional */}
              <div className="flex flex-col items-center text-center p-6 bg-zinc-600 border border-muted rounded-lg shadow-lg max-w-sm transition-transform transform hover:scale-105">
                <h2 className="text-2xl font-bold mb-4">Profesional</h2>
                <p className="text-lg mb-4">$30/mes</p>
                <p className="text-muted-foreground mb-4">
                  Perfecto para equipos en crecimiento que necesitan más funcionalidades y soporte avanzado.
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Todo en Básico</li>
                  <li>Funciones avanzadas</li>
                  <li>Soporte prioritario</li>
                </ul>
                <Button className="bg-primary text-primary-foreground">Elegir Plan</Button>
              </div>

              {/* Plan Enterprise */}
              <div className="flex flex-col items-center text-center p-6 bg-zinc-600 border border-muted rounded-lg shadow-lg max-w-sm transition-transform transform hover:scale-105">
                <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
                <p className="text-lg mb-4">Contacto</p>
                <p className="text-muted-foreground mb-4">
                  Solución personalizada para grandes organizaciones con necesidades específicas.
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Todo en Profesional</li>
                  <li>Soporte dedicado</li>
                  <li>Funcionalidades personalizadas</li>
                </ul>
                <Button className="bg-primary text-primary-foreground">Contactar para más información</Button>
              </div>
            </div>
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

export default PricingPage;
