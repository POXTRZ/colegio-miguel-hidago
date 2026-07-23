export type MediaAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
};

export type HistoricalMediaType =
  | "acontecimientos"
  | "capilla"
  | "documentos"
  | "edificios"
  | "generaciones"
  | "grupos-escolares"
  | "religiosas"
  | "retratos";

export type HistoricalMediaAsset = MediaAsset & {
  id: string;
  originalName: string;
  newName: string;
  description: string;
  type: HistoricalMediaType;
  context: string;
  dateStatus: "confirmed" | "pending";
  caption: string;
  source: string;
  embeddedText: boolean;
};
