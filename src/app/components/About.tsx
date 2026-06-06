import {
  Award,
  GraduationCap,
  Heart,
} from "lucide-react";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="py-20 sm:py-28 px-4"
    >
      <div className="container mx-auto">

        {/* GRID PRINCIPAL */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* TEXTO */}
          <div className="max-w-2xl">

            <h2 className="text-3xl sm:text-4xl mb-6 text-foreground font-semibold">
              Sobre mí
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              Soy la Lic. Gómez Antonella, psicóloga clínica especializada en
              enfoque cognitivo integrativo. Acompaño a jóvenes y adultos en
              procesos orientados al bienestar emocional, ansiedad, autoestima
              y vínculos.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              Mi enfoque terapéutico integra herramientas cognitivas,
              emocionales y conductuales, creando un espacio seguro, empático
              y libre de juicios donde puedas sentirte escuchado/a.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Creo profundamente en la capacidad de cada persona para
              transformar su vida y construir nuevas formas de relacionarse
              consigo misma y con los demás.
            </p>

            <a
              href="https://w.app/injscb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full hover:bg-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
            >
              <Heart className="w-5 h-5" />
              Comencemos tu proceso
            </a>

          </div>

          {/* INFO */}
          <div className="space-y-5">

            {/* Formación */}
            <div className="bg-card p-6 rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>

                <div>
                  <h4 className="mb-2 text-foreground font-medium">
                    Formación Académica
                  </h4>

                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Licenciada en Psicología por la Universidad de Ciencias
                    Empresariales y Sociales (UCES).
                  </p>
                </div>

              </div>
            </div>

            {/* Especialización */}
            <div className="bg-card p-6 rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>

                <div>
                  <h4 className="mb-2 text-foreground font-medium">
                    Especialización
                  </h4>

                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Posgrado en Psicoterapia Cognitiva Integrativa
                    (Fundación AIGLÉ).
                  </p>
                </div>

              </div>
            </div>

            {/* Experiencia */}
            <div className="bg-card p-6 rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-accent" />
                </div>

                <div>
                  <h4 className="mb-2 text-foreground font-medium">
                    Experiencia
                  </h4>

                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Experiencia en residencias geriátricas y atención clínica
                    individual.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}