"use client";

import { Check, Share2 } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";

type ShareEventButtonProps = {
  summary: string;
  title: string;
};

export default function ShareEventButton({
  summary,
  title,
}: ShareEventButtonProps) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({ title, text: summary, url });
        return;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }
    }
  }

  return (
    <Button onClick={share} variant="ghost">
      {copied ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Share2 className="h-4 w-4" aria-hidden="true" />
      )}
      {copied ? "Enlace copiado" : "Compartir"}
    </Button>
  );
}
