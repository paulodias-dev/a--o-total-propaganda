export const SEGMENT_OPTIONS = [
  "Supermercado",
  "Farmácia",
  "Ótica",
  "Loja de roupas",
  "Concessionária / veículos",
  "Açougue",
  "Hortifruti / sacolão",
  "Restaurante / lanchonete",
  "Construtora / imobiliária",
  "Escola / curso",
  "Academia",
  "Clínica / estética",
  "Evento / festa",
  "Inauguração de loja",
  "Campanha política / institucional",
  "Outro",
];

export function formatBrazilianPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits ? `(${digits}` : "";
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function resolveSegment(segment: string, customSegment?: string) {
  if (segment === "Outro") {
    return customSegment?.trim() || "Outro segmento";
  }

  return segment || "Não informado";
}
