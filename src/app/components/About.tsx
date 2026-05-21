import { Award, BookOpen, GraduationCap, Heart } from "lucide-react";

export function About() {
  return (
    <section id="sobre-mi" className="py-12 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-foreground font-semibold">
              Sobre mí
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Soy la Lic. Gómez Antonella, psicóloga clínica especializada en terapia 
              integrativa conductual. Acompaño a jovenes y adultos en procesos 
              orientados al bienestar emocional, la gestión de ansiedad, autoestima y vínculos.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Mi enfoque terapéutico integra herramientas cognitivas, emocionales y conductuales, 
              creando un espacio seguro, empático y libre de juicios donde puedas sentirte escuchado/a.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Creo profundamente en la capacidad de cada persona para transformar su vida y construir 
              nuevas formas de relacionarse consigo misma y con los demás. Mi objetivo es acompañarte 
              en ese camino de crecimiento y bienestar.
            </p>

            <a
              href="https://wa.me/5491123456789?text=Hola,%20me%20gustaría%20conocer%20más%20sobre%20tus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-primary transition-all duration-300 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              Comencemos tu proceso
            </a>
          </div>
          
          <div className="space-y-4 sm:space-y-6 mt-8 md:mt-0">
            <div className="bg-card p-5 sm:p-6 rounded-2xl border border-border hover:shadow-lg transition-all">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-1 sm:mb-2 text-foreground text-sm sm:text-base">Formación Académica</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Licenciada en Psicología por la Universidad de Ciencias Empresariales y Sociales(UCES)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-5 sm:p-6 rounded-2xl border border-border hover:shadow-lg transition-all">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-1 sm:mb-2 text-foreground text-sm sm:text-base">Especialización</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Terapia Cognitivo-Conductual (TCC) y Mindfulness
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-5 sm:p-6 rounded-2xl border border-border hover:shadow-lg transition-all">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-1 sm:mb-2 text-foreground text-sm sm:text-base">Certificaciones</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Certificada en Terapia de Ansiedad y Gestión del Estrés
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-5 sm:p-6 rounded-2xl border border-border hover:shadow-lg transition-all">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-1 sm:mb-2 text-foreground text-sm sm:text-base">Experiencia</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    +10 años de práctica clínica con más de 500 pacientes
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