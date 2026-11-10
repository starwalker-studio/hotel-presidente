import type { IFOOTER } from "./footer.interface";

export const FOOTER: IFOOTER = {
  BRAND: {
    NAME: "HOTEL PRESIDENTE",
    TEXT: "Hotel de lujo frente al Caribe mexicano. Hospitalidad, gastronomía y bienestar desde 1998.",
  },
  SOCIALS: [
    { id: 1, label: "Instagram", href: "#" },
    { id: 2, label: "Facebook", href: "#" },
    { id: 3, label: "TikTok", href: "#" },
    { id: 4, label: "YouTube", href: "#" },
  ],
  COLUMNS: [
    {
      id: 1,
      title: "Explorar",
      links: [
        { id: 1, label: "Habitaciones", href: "#" },
        { id: 2, label: "Restaurantes", href: "#" },
        { id: 3, label: "Spa", href: "#" },
        { id: 4, label: "Experiencias", href: "#" },
        { id: 5, label: "Eventos y bodas", href: "#" },
        { id: 6, label: "Ofertas", href: "#" },
      ],
    },
    {
      id: 2,
      title: "Información",
      links: [
        { id: 1, label: "Preguntas frecuentes", href: "#" },
        { id: 2, label: "Políticas del hotel", href: "#" },
        { id: 3, label: "Cómo llegar", href: "#" },
        { id: 4, label: "Trabaja con nosotros", href: "#" },
      ],
    },
  ],
  CONTACT_TITLE: "Contacto",
  CONTACT: {
    ADDRESS: "Blvd. Kukulcán Km 12.5, Zona Hotelera, Cancún, Q.R., 77500",
    PHONE: { label: "+52 998 555 0142", href: "tel:+529985550142" },
    WHATSAPP: { label: "+52 998 555 0187", href: "https://wa.me/529985550187" },
    EMAIL: {
      label: "reservas@hotelpresidente.example",
      href: "mailto:reservas@hotelpresidente.example",
    },
  },
  LEGAL: [
    { id: 1, label: "Aviso de privacidad", href: "#" },
    { id: 2, label: "Términos y condiciones", href: "#" },
  ],
  DISCLAIMER: "Demo con fines demostrativos.",
};
