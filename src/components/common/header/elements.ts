interface IHEADER {
  id: number;
  label: string;
  path: string;
}

export const HEADER: IHEADER[] = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Habitaciones", path: "/Habitaciones" },
  { id: 3, label: "Restaurante", path: "/Restaurante" },
  { id: 4, label: "Spa", path: "/Spa" },
  { id: 5, label: "Experiencias", path: "/Experiencias" },
  { id: 6, label: "Contacto", path: "/Contacto" },
];
