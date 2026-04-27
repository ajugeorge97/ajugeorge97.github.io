import { useEffect } from "react";

export default function TimelineProgress() {
  useEffect(() => {
    const timeline = document.querySelector<HTMLElement>("[data-timeline]");
    if (!timeline) return;

    const update = () => {
      const rect = timeline.getBoundingClientRect();
      const markers = Array.from(timeline.querySelectorAll<HTMLElement>("[data-timeline-marker]"));
      const firstMarker = markers[0];
      const lastMarker = markers[markers.length - 1];

      if (!firstMarker || !lastMarker) return;

      const firstRect = firstMarker.getBoundingClientRect();
      const lastRect = lastMarker.getBoundingClientRect();
      const firstCenter = firstRect.top - rect.top + firstRect.height / 2;
      const lastCenter = lastRect.top - rect.top + lastRect.height / 2;
      const lastEdge = lastCenter + lastRect.height / 2;
      const span = Math.max(lastEdge - firstCenter, 1);
      const activationLine = window.innerHeight * 0.9;
      const current = activationLine - rect.top;
      const progress = Math.min(Math.max((current - firstCenter) / span, 0), 1);
      const fillHeight = firstCenter + progress * span;

      timeline.style.setProperty("--timeline-progress", `${fillHeight}px`);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}
