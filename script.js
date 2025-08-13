document.addEventListener("DOMContentLoaded", () => {
    const timelineContainer = document.getElementById("timeline-container");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close-btn");

    const modalTitle = document.getElementById("modal-title");
    const modalYear = document.getElementById("modal-year");
    const modalDescription = document.getElementById("modal-description");
    const modalImage = document.getElementById("modal-image");
    const modalCategory = document.getElementById("modal-category");

    // Fetch events from JSON
    fetch("events.json")
        .then(response => response.json())
        .then(events => {
            events.forEach(event => {
                const marker = document.createElement("div");
                marker.classList.add("marker");
                marker.textContent = event.year;

                marker.addEventListener("click", () => {
                    modalTitle.textContent = event.title;
                    modalYear.textContent = `Year: ${event.year}`;
                    modalDescription.textContent = event.description;
                    modalCategory.textContent = `Category: ${event.category}`;
                    modalImage.src = event.imageURL || "";
                    modal.classList.add("open");
                    modal.style.display = "flex";
                });

                timelineContainer.appendChild(marker);
            });
        })
        .catch(err => console.error("Error loading events:", err));

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("open");
    modal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("open");
        modal.style.display = "none";
        }
    });
});

const toggleBtn = document.getElementById("mode-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const imag = toggleBtn.querySelector("img");
    if(document.body.classList.contains("dark-mode")){
        img.src = "/images/night-mode.png";
    }
    else{
        img.src = "/images/night-mode.png";
    }
});