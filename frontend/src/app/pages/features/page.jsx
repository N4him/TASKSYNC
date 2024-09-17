import Link from "next/link";
import { Input } from "@/components/ui/input";

function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-8 h-auto flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <img src="/images/logo_transparent.png" alt="Logo principal" className="h-24 w-24 max-w-none" />
          <span className="sr-only">Task Manager</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link href="/" className="text-base font-medium hover:underline underline-offset-4" prefetch={false}>
            Inicio
          </Link>
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

      <main className="flex-1 flex flex-col items-center justify-center">
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6 flex flex-col items-center">
            <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-1 justify-center">
              <div className="flex flex-col justify-center space-y-4 items-center text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Características Principales de TaskSync
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl text-center mx-auto">
                    A continuación, puedes explorar las características clave que hacen de TaskSync la herramienta perfecta para la gestión de tareas.
                  </p>
                </div>

                {/* Contenedor de párrafos adicionales */}
                <div className="space-y-4 text-left max-w-[800px]">
                  <div className="p-4 bg-muted rounded-lg shadow-sm">
                    <p>
                      TaskSync permite que las tareas sean asignadas y gestionadas en tiempo real. Cada usuario puede recibir y actualizar sus tareas al instante, manteniendo a todo el equipo sincronizado con las últimas actualizaciones.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg shadow-sm">
                    <p>
                      Las tareas pueden ser marcadas en diferentes estados: "En progreso", "Pendiente" o "Finalizada". Estos estados permiten un seguimiento claro del avance de cada tarea, facilitando la coordinación entre los miembros del equipo.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg shadow-sm">
                    <p>
                      Una de las principales ventajas de TaskSync es la capacidad de asignar tareas a diferentes usuarios. Los administradores o líderes de equipo pueden asignar tareas a cualquier miembro, asegurando que todos tengan responsabilidades claras.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg shadow-sm">
                    <p>
                      TaskSync notifica a los usuarios de cualquier cambio importante en sus tareas, como nuevas asignaciones, cambios de estado o comentarios adicionales, para que siempre estén al tanto de lo que sucede en tiempo real.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg shadow-sm">
                    <p>
                      Los usuarios pueden filtrar sus tareas de acuerdo a diferentes criterios como estado (pendiente, en progreso, finalizada), usuario responsable o fecha de vencimiento, facilitando una visión clara de sus prioridades.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg shadow-sm">
                    <p>
                      TaskSync está diseñado para fomentar la colaboración. Los miembros del equipo pueden comentar y discutir en cada tarea, asegurando que todos estén alineados con los objetivos y avances del proyecto.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg shadow-sm">
                    <p>
                      Cada usuario puede personalizar su panel de tareas, mostrando únicamente lo que es relevante para su trabajo, ya sea por proyecto, fecha de entrega o prioridad.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg shadow-sm">
                    <p>
                      TaskSync ofrece un panel donde se muestra el progreso global del proyecto, con un resumen del estado de las tareas de todos los usuarios, permitiendo a los gerentes identificar cuellos de botella o retrasos.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg shadow-sm">
                    <p>
                      Ya sea en el escritorio o el móvil, TaskSync se adapta perfectamente a cualquier dispositivo, permitiendo que los usuarios gestionen sus tareas sin importar dónde se encuentren.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg shadow-sm">
                    <p>
                      Las tareas de TaskSync se pueden integrar con herramientas de calendario, lo que permite a los usuarios ver sus plazos importantes directamente en sus aplicaciones de calendario, mejorando la organización y planificación.
                    </p>
                  </div>
                </div>
                <div>
                </div>
                <div>
                </div>
                {/* Tarjetas de características */}
                <div className="grid gap-6 lg:grid-cols-3 justify-center mt-8">
                  {/* Primera fila de tarjetas */}
                  <div className="p-4 bg-muted rounded-lg shadow-lg max-w-[300px] transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-bold mb-2">Programación de tareas</h3>
                    <p className="text-muted-foreground">
                      Organiza tus tareas de forma eficiente y mantén un seguimiento claro de tus proyectos.
                    </p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg shadow-lg max-w-[300px] transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-bold mb-2">Colaboración en tiempo real</h3>
                    <p className="text-muted-foreground">
                      Trabaja con tu equipo simultáneamente y mantén a todos sincronizados en cada fase del proyecto.
                    </p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg shadow-lg max-w-[300px]  transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-bold mb-2">Análisis detallados</h3>
                    <p className="text-muted-foreground">
                      Obtén informes sobre el rendimiento y los avances de cada miembro del equipo.
                    </p>
                  </div>

                  {/* Segunda fila de tarjetas adicionales */}
                  <div className="p-4 bg-muted rounded-lg shadow-lg max-w-[300px]  transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-bold mb-2">Integración con calendarios</h3>
                    <p className="text-muted-foreground">
                      Sincroniza tus eventos y tareas con calendarios populares como Google Calendar.
                    </p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg shadow-lg max-w-[300px] transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-bold mb-2">Gestión de archivos</h3>
                    <p className="text-muted-foreground">
                      Sube, comparte y organiza archivos relacionados con tus proyectos sin esfuerzo.
                    </p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg shadow-lg max-w-[300px] transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-bold mb-2">Notificaciones personalizadas</h3>
                    <p className="text-muted-foreground">
                      Recibe alertas personalizadas para recordarte las fechas de vencimiento más importantes.
                    </p>
                  </div>

                  {/* Tercera fila de tarjetas adicionales */}
                  <div className="p-4 bg-muted rounded-lg shadow-lg max-w-[300px] transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-bold mb-2">Gestión de prioridades</h3>
                    <p className="text-muted-foreground">
                      Prioriza tareas para garantizar que lo más importante siempre se atienda primero.
                    </p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg shadow-lg max-w-[300px] transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-bold mb-2">Reportes en tiempo real</h3>
                    <p className="text-muted-foreground">
                      Genera reportes de avance en tiempo real para mantener a todos informados.
                    </p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg shadow-lg max-w-[300px] transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-bold mb-2">Tareas recurrentes</h3>
                    <p className="text-muted-foreground">
                      Programa tareas recurrentes automáticamente para mantener tu flujo de trabajo sin interrupciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Otra sección de texto */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Estás listo para mejorar la productividad de tu equipo?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mx-auto">
                  Regístrate en TaskSync hoy y experimenta la mejor herramienta de tareas cooperativas.
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

export default FeaturesPage;
