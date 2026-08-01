import {
  Ban,
  BadgeCheck,
  CalendarCheck,
  CalendarClock,
  RotateCw,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import {
  eventCategoryLabels,
  eventStatusLabels,
} from "@/components/calendar/calendarUtils";
import type { EventCategory, EventStatus } from "@/types/event";

const statusIcons = {
  confirmed: BadgeCheck,
  upcoming: CalendarClock,
  completed: CalendarCheck,
  rescheduled: RotateCw,
  cancelled: Ban,
} satisfies Record<EventStatus, typeof CalendarClock>;

const statusTones = {
  confirmed: "success",
  upcoming: "info",
  completed: "success",
  rescheduled: "warning",
  cancelled: "error",
} as const;

const categoryTones = {
  academic: "burgundy",
  administrative: "neutral",
  "cultural-sports": "gold",
} as const;

type LabelProps = {
  compact?: boolean;
};

export function EventStatusBadge({
  compact = false,
  status,
}: LabelProps & { status: EventStatus }) {
  const Icon = statusIcons[status];

  return (
    <Badge
      tone={statusTones[status]}
      className={compact ? "px-2 py-0.5 text-[10px]" : undefined}
    >
      <Icon className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
      {eventStatusLabels[status]}
    </Badge>
  );
}

export function EventCategoryBadge({
  category,
  compact = false,
}: LabelProps & {
  category: EventCategory;
}) {
  return (
    <Badge
      tone={categoryTones[category]}
      className={compact ? "px-2 py-0.5 text-[10px]" : undefined}
    >
      {eventCategoryLabels[category]}
    </Badge>
  );
}

export function DemoBadge() {
  return (
    <Badge tone="warning" className="px-2 py-0.5 text-[10px]">
      Demo
    </Badge>
  );
}
