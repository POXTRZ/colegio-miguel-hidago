export type ImageStatus =
  | "final"
  | "historical"
  | "provisional"
  | "pending-replacement";

export type MediaAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  status?: ImageStatus;
  context?: string;
  source?: string;
  year?: number;
  replaceLater?: boolean;
};

export type ManagedImageAsset = {
  id: string;
  src: string | null;
  alt: string;
  caption: string;
  status: ImageStatus;
  context: string;
  source: string;
  year?: number;
  replaceLater: boolean;
  width: number;
  height: number;
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

export type HistoricalMediaAsset = ManagedImageAsset & {
  src: string;
  status: "historical";
  id: string;
  originalName: string;
  newName: string;
  description: string;
  type: HistoricalMediaType;
  context: string;
  dateStatus: "confirmed" | "pending";
  embeddedText: boolean;
};
