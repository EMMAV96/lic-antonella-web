import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="bg-[#1F2937] text-white py-20 px-4"
    >
      <div className="container mx-auto">

        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* INFO */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Lic. Gómez Antonella
            </h3>

            <p className="text-white/70 leading-relaxed mb-6">
              Psicóloga Clínica especializada en Terapia Integrativa Conductual.
            </p>

            <p className="text-white/60 italic">
              “Dar el primer paso puede transformar tu bienestar emocional.”
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <h4 className="text-lg font-medium mb-5">
              Navegación
            </h4>

            <div className="flex flex-col gap-3">

              <a href="#inicio" className="text-white/70 hover:text-white transition-colors">
                Inicio
              </a>

              <a href="#sobre-mi" className="text-white/70 hover:text-white transition-colors">
                Sobre mí
              </a>

              <a href="#servicios" className="text-white/70 hover:text-white transition-colors">
                Servicios
              </a>

              <a href="#contacto" className="text-white/70 hover:text-white transition-colors">
                Contacto
              </a>

            </div>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="text-lg font-medium mb-5">
              Contacto
            </h4>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-white/70">
                  +54 3625 268478
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-white/70 break-all">
                  lic.gomezantonella@gmail.com
                </span>
              </div>

            </div>

            {/* REDES */}
            <div className="flex gap-3 mt-8">

              {[Instagram, Facebook, Linkedin, MessageCircle].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-accent transition-all duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        
        {/* COPYRIGHT */}
        <div className="border-t border-white/10 pt-6 text-center space-y-2">

          <p className="text-white/50 text-sm">
            © {currentYear} Lic. Gómez Antonella · Todos los derechos reservados.
          </p>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-xs hover:text-accent transition-colors"
          >
            Diseño y desarrollo por Vesoft Studio
          </a>

        </div>
      </div>
    </footer>
  );
}