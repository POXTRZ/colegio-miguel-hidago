import type { HistoricalMediaAsset } from "@/types/media";

export type TimelineValidationStatus = "confirmed" | "pending" | "disputed";

export type TimelineItem = {
  id: string;
  year: number;
  date?: string;
  title: string;
  summary: string;
  description: string;
  stage: string;
  media: HistoricalMediaAsset[];
  source: string;
  validationStatus: TimelineValidationStatus;
};
