// renderer.ts
import type { EventData } from "./types.js";
import { openModal } from "./modal.js";

export function renderTimeline(events: EventData[]): void {
    const container = document.getElementById("timeline-container");
    if (!container) return;

    container.innerHTML = "";

    events.forEach((event) => {
        const btn = document.createElement("button");
        btn.textContent = event.year;
        btn.className = "year-btn";

        btn.addEventListener("click", () => {
            openModal(event);
        });

        container.appendChild(btn);
    });
}
