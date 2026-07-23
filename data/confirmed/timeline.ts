import { getHistoricalMedia } from "@/data/confirmed/media";
import type { TimelineItem } from "@/types/timeline";

function media(id: string) {
  const asset = getHistoricalMedia(id);
  return asset ? [asset] : [];
}

export const confirmedTimeline: TimelineItem[] = [
  {
    id: "incorporacion-preescolar-1998",
    year: 1998,
    date: "Agosto de 1998",
    title: "Incorporación de Preescolar",
    summary:
      "El nivel Preescolar queda documentado ante la Secretaría de Educación de Guanajuato.",
    description:
      "La documentación institucional registra el Acuerdo 226-98 y la clave 11PJN0535B. Este hito acredita una incorporación administrativa; no se presenta como fecha de apertura del nivel.",
    stage: "Reconocimiento educativo",
    media: media("comunidad-escolar-religiosas"),
    source:
      "Matriz de seguimiento institucional y Circular de inscripciones 2026-2027.",
    validationStatus: "confirmed",
  },
  {
    id: "incorporacion-preparatoria-2001",
    year: 2001,
    date: "25 de mayo de 2001",
    title: "Incorporación de Preparatoria",
    summary:
      "La Preparatoria cuenta con registro de incorporación ante la Universidad de Guanajuato.",
    description:
      "La documentación consultada registra la clave 11PBH0177L y la fecha de incorporación del 25 de mayo de 2001. El dato describe el reconocimiento administrativo y no determina por sí mismo el inicio de actividades.",
    stage: "Ampliación académica",
    media: media("generacion-escolar"),
    source:
      "Matriz de seguimiento institucional y Circular de inscripciones 2026-2027.",
    validationStatus: "confirmed",
  },
  {
    id: "actualizacion-incorporaciones-2023",
    year: 2023,
    date: "4 de julio y 27 de octubre de 2023",
    title: "Actualización de incorporaciones",
    summary:
      "Primaria y Secundaria cuentan con acuerdos administrativos emitidos durante 2023.",
    description:
      "La documentación registra para Primaria el Acuerdo 058/2023, con fecha 4 de julio, y para Secundaria el Acuerdo 082/2023, con fecha 27 de octubre. Son referencias de incorporación o reincorporación, no fechas de fundación de los niveles.",
    stage: "Continuidad institucional",
    media: media("alumnas-formacion"),
    source:
      "Matriz de seguimiento institucional y Circular de inscripciones 2026-2027.",
    validationStatus: "confirmed",
  },
];
