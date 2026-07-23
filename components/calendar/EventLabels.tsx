import {
  Ban,
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
  upcoming: CalendarClock,
  completed: CalendarCheck,
  rescheduled: RotateCw,
  cancelled: Ban,
} satisfies Record<EventStatus, typeof CalendarClock>;

const statusTones = {
  upcoming: "info",
  completed: "success",
  rescheduled: "warning",
  cancelled: "error",
} as const;

export function EventStatusBadge({ status }: { status: EventStatus }) {
  const Icon = statusIcons[status];

  return (
    <Badge tone={statusTones[status]}>
      <Icon className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
      {eventStatusLabels[status]}
    </Badge>
  );
}

export function EventCategoryBadge({
  category,
}: {
  category: EventCategory;
}) {
  return (
    <Badge tone="neutral" className="text-[var(--color-guinda)]">
      {eventCategoryLabels[category]}
    </Badge>
  );
}

export function DemoBadge() {
  return <Badge tone="warning">Contenido demo</Badge>;
}
