import type { EventData } from "./types.js";

// Open modal and center content
export function openModal(event: EventData): void {
    const modal = document.getElementById("modal");
    if (!modal) return;

    // Fill modal content
    (document.getElementById('modal-title') as HTMLElement).textContent = event.title;
    (document.getElementById('modal-year') as HTMLElement).textContent = `Year: ${event.year}`;
    (document.getElementById('modal-description') as HTMLElement).textContent = event.description;
    (document.getElementById('modal-category') as HTMLElement).textContent = `Category: ${event.category}`;

    const img = document.getElementById("modal-image") as HTMLImageElement;
    if (img) {
        img.src = event.imageURL;
        img.alt = event.title;
    }

    modal.style.display = "flex";
}

// Close modal
export function closeModal(): void {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Initialize modal close events
export function initModal(): void {
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close-btn");

    if (!modal || !closeBtn) return;

    // Close modal on close button click
    closeBtn.addEventListener("click", () => {
        closeModal();
    });

    // Close modal when clicking outside the modal-content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}
