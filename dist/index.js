// index.ts
import { fetchEvents } from "./fetcher.js";
import { renderTimeline } from "./renderer.js";
import { initThemeToggle } from "./theme.js";
import { closeModal } from "./modal.js";
async function init() {
    initThemeToggle();
    const events = await fetchEvents();
    renderTimeline(events);
    // Close modal logic
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close-btn");
    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => closeModal());
        window.addEventListener("click", (e) => {
            if (e.target === modal)
                closeModal();
        });
    }
}
document.addEventListener("DOMContentLoaded", init);
//# sourceMappingURL=index.js.map