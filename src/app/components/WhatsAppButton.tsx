import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.link/fkmctm"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
    </a>
  );
}