export function openModal(event) {
    const modal = document.getElementById("modal");
    if (!modal)
        return;
    document.getElementById('modal-title').textContent = event.title;
    document.getElementById('modal-year').textContent = `Year: ${event.year}`;
    document.getElementById("modal-description").textContent = event.description;
    document.getElementById('modal-category').textContent = `Category: ${event.category}`;
    const img = document.getElementById("modal-image");
    if (img) {
        img.src = event.imageURL;
        img.alt = event.title;
    }
    modal.style.display = "block";
}
export function closeModal() {
    const modal = document.getElementById("modal");
    if (modal)
        modal.style.display = "none";
}
//# sourceMappingURL=modal.js.map