import type { TimelineItem } from "@/types/timeline";

export const timelineDraft: TimelineItem[] = [
  {
    id: "fecha-fundacional-por-validar",
    year: 1907,
    title: "Fecha fundacional pendiente de validación",
    summary:
      "Las fuentes institucionales consultadas presentan una diferencia entre 1907 y 1909.",
    description:
      "La reseña del Colegio señala 1907 como inicio de labores, mientras que el Ideario HFIC registra 1909 para el Colegio Caudillo Inmortal, antes Miguel Hidalgo, en San Luis de la Paz. Debe verificarse en archivo antes de publicar una fecha fundacional oficial.",
    stage: "Orígenes",
    media: [],
    source:
      "Reseña Colegio Miguel Hidalgo - Secundaria e Ideario de la Pastoral Educativa HFIC, p. 4.",
    validationStatus: "disputed",
  },
];
