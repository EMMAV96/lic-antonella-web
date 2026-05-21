import {
  Users,
  Heart,
  Lightbulb,
  Shield,
  Smile,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Terapia Individual",
    description:
      "Sesiones personalizadas para trabajar en tus desafíos emocionales y alcanzar bienestar.",
  },
  {
    icon: Users,
    title: "Terapia de Pareja",
    description:
      "Fortalece la comunicación y construye vínculos más saludables.",
  },
  {
    icon: Lightbulb,
    title: "Gestión de Ansiedad",
    description:
      "Herramientas terapéuticas para recuperar tranquilidad y equilibrio.",
  },
  {
    icon: Shield,
    title: "Autoestima y Confianza",
    description:
      "Desarrolla una relación más sana contigo mismo/a.",
  },
  {
    icon: Smile,
    title: "Manejo de Emociones",
    description:
      "Aprende a comprender y regular tus emociones de manera saludable.",
  },
  {
    icon: MessageCircle,
    title: "Terapia Online",
    description:
      "Atención virtual cómoda, profesional y confidencial.",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="py-20 sm:py-28 px-4 bg-muted/20"
    >
      <div className="container mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-foreground font-semibold">
            ¿Cómo puedo ayudarte?
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Servicios terapéuticos orientados a tu bienestar emocional y crecimiento personal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                <h3 className="text-xl mb-3 text-foreground font-medium">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}