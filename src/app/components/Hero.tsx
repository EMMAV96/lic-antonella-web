import { Calendar, Heart, ShieldCheck, Sparkles } from "lucide-react";
import antoPhoto from "../../imports/Anto.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* CONTENIDO */}
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/40 px-4 py-2 rounded-full mb-5">
              <Sparkles className="w-4 h-4 text-accent" />

              <span className="text-sm text-accent-foreground">
                Espacio de escucha y acompañamiento
              </span>
            </div>

            {/* Nombre */}
            <p className="text-sm sm:text-base text-primary mb-3 font-medium">
              Lic. Gómez Antonella · Psicóloga Clínica
            </p>

            {/* Título */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 text-foreground leading-tight font-semibold">
              Un espacio para hablar, sentir y
              <span className="text-primary"> sentirte acompañado/a</span>
            </h1>

            {/* Texto */}
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              A veces atravesamos momentos difíciles, de ansiedad, angustia o
              simplemente sentimos que necesitamos un espacio para nosotros.
              Mi objetivo es acompañarte desde una mirada cercana, respetuosa
              y profesional, para que puedas transitar tu proceso con mayor calma.
            </p>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">

              <a
                href="https://wa.link/fkmctm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full hover:bg-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
              >
                <Calendar className="w-5 h-5" />
                Solicitar información
              </a>

              <a
                href="#sobre-mi"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground px-7 py-4 rounded-full border border-border hover:bg-muted transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
              >
                <Heart className="w-5 h-5 text-accent" />
                Conoce más sobre mí
              </a>
            </div>

            {/* BADGES */}
            <div className="mt-10 flex flex-wrap gap-3">

              <div className="px-4 py-2 rounded-full bg-secondary text-sm text-secondary-foreground">
                Ansiedad
              </div>

              <div className="px-4 py-2 rounded-full bg-secondary text-sm text-secondary-foreground">
                Autoestima
              </div>

              <div className="px-4 py-2 rounded-full bg-secondary text-sm text-secondary-foreground">
                Vínculos
              </div>

            </div>

            {/* CREDIBILIDAD */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-6">
              <ShieldCheck className="w-4 h-4 text-primary" />

              Atención presencial y online para jóvenes y adultos
            </div>

          </div>

          {/* IMAGEN */}
          <div className="relative">

            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full"></div>

            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-3"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                src={antoPhoto}
                alt="Lic. Gómez Antonella - Psicóloga"
                className="w-full h-[550px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}