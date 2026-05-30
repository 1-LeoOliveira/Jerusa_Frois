import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const WHATSAPP_LINK =
  "https://wa.me/5531998403394?text=Olá! Gostaria de agendar uma consulta.";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all z-50"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  );
}
