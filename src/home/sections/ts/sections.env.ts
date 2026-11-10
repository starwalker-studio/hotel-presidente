import type { ISECTIONS } from "./sections.interface";

export const SECTIONS: ISECTIONS = {
  HERO: {
    TITLE: "Donde el Caribe se vive con elegancia",
    SUBTITLE:
      "Frente al mar turquesa de la Zona Hotelera, Hotel Presidente combina lujo, gastronomía de autor y un servicio que anticipa cada detalle de tu estancia.",
    MAIN_BUTTON: "Reservar ahora",
    SECONDARY_BUTTON: "Explorar habitaciones",
    ADDITIONAL_DATA: [
      { id: 1, label: "5 estrellas · Gran Turismo" },
      { id: 2, label: "212 habitaciones y 100 suites" },
      { id: 3, label: "Playa privada de 300 metros" },
    ],
  },
  WELCOME: {
    TITLE: "Un refugio de lujo frente al Caribe",
    TEXT:
      "Desde 1998, Hotel Presidente ha sido el destino de quienes buscan descansar sin renunciar a la excelencia. Nuestras instalaciones, renovadas en 2024, ofrecen amplias habitaciones con vista al mar, tres restaurantes, un spa de más de 1,500 m² y una playa privada de arena blanca." +
      "Cada rincón fue pensado para que llegues, respires y te olvides del resto. Nuestro equipo te conoce por tu nombre desde el primer día, y esa atención personal es la firma de la casa.",
    EST: [
      { id: 1, text: "25 años de hospitalidad" },
      { id: 2, text: "98% de huéspedes que recomiendan el hotel" },
      { id: 3, text: "3 restaurantes de autor" },
      { id: 4, text: "1 playa privada" },
    ],
    IMG: "/sections/welcome/welcome-beach-lounge.jpg",
  },
  ROOMS: {
    TITLE: "Elige tu espacio ideal",
    SUB_TITLE:
      "Cada habitación incluye balcón o terraza, cama king size, amenidades de cortesía y desayuno disponible.",
    LIST: [
      {
        id: 1,
        img: "/sections/rooms/deluxe-room.jpg",
        label: "Habitación Deluxe",
        desc: "42 m² con balcón y vista parcial al mar. Ideal para parejas.",
        cap: "hasta 2 adultos y 1 niño",
        price: "$280 USD por noche",
        button_label: "Ver detalles",
      },
      {
        id: 2,
        img: "/sections/rooms/junior-suite-sea-view.jpg",
        label: "Junior Suite Vista al Mar",
        desc: "58 m² con sala integrada y terraza frente al Caribe.",
        cap: "hasta 3 adultos",
        price: "$410 USD por noche",
        button_label: "Ver detalles",
      },
      {
        id: 3,
        img: "/sections/rooms/family-suite.jpg",
        label: "Suite Familiar",
        desc: "85 m² con dos recámaras, sala y dos baños. Perfecta para familias.",
        cap: "hasta 4 adultos y 2 niños",
        price: "$560 USD por noche",
        button_label: "Ver detalles",
      },
      {
        id: 4,
        img: "/sections/rooms/presidencial-suite.jpg",
        label: "Suite Presidencial",
        desc: "160 m² con alberca privada, mayordomo 24 horas y vista panorámica.",
        cap: "hasta 4 adultos",
        price: "$1,350 USD por noche",
        button_label: "Ver detalles",
      },
    ],
    NOTE: "precios por noche, sujetos a temporada e impuestos.",
    SEE_ALL_BUTTON: "Ver todas las habitaciones",
  },
  EXPLORE: {
    TITLE: "Más allá del hotel, un destino por descubrir",
    SUBTITLE: "Nuestro concierge organiza todas estas experiencias por ti.",
    EXPERIENCE: [
      {
        id: 1,
        title: "Chichén Itzá",
        desc: "Excursión de día completo a una de las Nuevas Siete Maravillas, con guía certificado y comida incluida.",
        img: "/sections/explore/chichen-itza.jpg",
      },
      {
        id: 2,
        title: "Isla Mujeres",
        desc: "Navegación, snorkel y tiempo libre en la playa, saliendo desde el muelle del hotel.",
        img: "/sections/explore/isla-mujeres.jpg",
      },
      {
        id: 3,
        title: "Cenotes y selva",
        desc: "Tour por cenotes cristalinos con equipo de snorkel y transporte privado.",
        img: "/sections/explore/jungle.jpg",
      },
      {
        id: 4,
        title: "Snorkel en arrecife",
        desc: "Salida en lancha a los arrecifes cercanos con instructor y equipo incluido.",
        img: "/sections/explore/snorkeling.jpg",
      },
    ],
    BUTTON: "Ver todas las experiencias",
  },
  OFFERS: {
    TITLE: "Beneficios para tu próxima estancia",
    PACKAGES: [
      {
        id: 1,
        title: "Escapada romántica",
        text: "3 noches en Junior Suite con cena para dos en Marea, ritual de spa en pareja y late check-out.",
        label: "Ahorra 15%",
        img: "/sections/offers/date.jpg",
        background: "date",
      },
      {
        id: 2,
        title: "Reserva anticipada",
        text: "Reservando con 60 días de anticipación obtén 20% de descuento y desayuno incluido.",
        label: "Ahorra 20%",
        img: "/sections/offers/breakfast.jpg",
        background: "breakfast",
      },
      {
        id: 3,
        title: "Estancia familiar",
        text: "Niños de hasta 12 años se hospedan gratis y reciben acceso al club infantil sin costo.",
        label: "Niños gratis",
        img: "/sections/offers/dinner.jpg",
        background: "dinner",
      },
    ],
  },
  LOCATION: {
    EYEBROW: "UBICACIÓN",
    TITLE: "En el corazón de la Zona Hotelera",
    TEXT: "Estamos en el Blvd. Kukulcán Km 12.5, a 20 minutos del Aeropuerto Internacional de Cancún y a 10 minutos de la zona de restaurantes y centros comerciales.",
    CONTACT: {
      ADDRESS: "Blvd. Kukulcán Km 12.5, Zona Hotelera, Cancún, Q.R., 77500",
      PHONE: { label: "+52 998 555 0142", href: "tel:+529985550142" },
      WHATSAPP: {
        label: "+52 998 555 0187",
        href: "https://wa.me/529985550187",
      },
      EMAIL: {
        label: "reservas@hotelpresidente.example",
        href: "mailto:reservas@hotelpresidente.example",
      },
    },
    DISTANCES: [
      { id: 1, place: "Aeropuerto de Cancún", time: "20 min" },
      { id: 2, place: "Playa Delfines", time: "10 min" },
      { id: 3, place: "Centro de Cancún", time: "18 min" },
      { id: 4, place: "Isla Mujeres (ferry)", time: "25 min" },
    ],
  },
};
