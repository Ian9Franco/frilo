export function money(value) {
  if (value == null || Number.isNaN(Number(value))) return "Consultar";
  const [ints, decimals] = Number(value).toFixed(2).split(".");
  const grouped = ints.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$${grouped},${decimals}`;
}

export const clubs = [
  "River",
  "Boca",
  "Racing",
  "Independiente",
  "San Lorenzo",
  "Huracán",
  "Vélez",
  "Banfield",
  "Lanús",
  "Rosario Central",
  "Estudiantes",
  "Tigre",
  "Gimnasia",
  "Argentinos",
  "Albiceleste",
];
