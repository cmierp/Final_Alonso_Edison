import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+5214421128407";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Edison%2058`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="button-whatsapp-floating"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary flex items-center justify-center shadow-2xl"
      style={{ boxShadow: "0 4px 30px hsl(39 46% 61% / 0.4)" }}
      title="Contactar por WhatsApp"
    >
      <MessageCircle size={24} className="text-primary-foreground" strokeWidth={1.5} />
      <motion.span
        className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
}
