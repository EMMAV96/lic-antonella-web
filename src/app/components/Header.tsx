import { Brain } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/70 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>

            <div>
              <h3 className="text-primary text-sm sm:text-base font-semibold">
                Lic. Gómez Antonella
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground">
                Psicóloga Clínica
              </p>
            </div>
          </div>

          {/* Navegación */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Inicio
            </a>

            <a
              href="#sobre-mi"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre mí
            </a>

            <a
              href="#servicios"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Servicios
            </a>

            <a
              href="#contacto"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* CTA */}
          <a
            href="https://wa.link/26q7ht"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 sm:px-6 py-2.5 rounded-full hover:bg-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base whitespace-nowrap"
          >
            Agendar Turno
          </a>
        </div>
      </div>
    </header>
  );
}