// theme.ts
export function initThemeToggle() {
    const toggleBtn = document.getElementById("mode-toggle");
    if (!toggleBtn)
        return;
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const img = toggleBtn.querySelector("img");
        if (!img)
            return;
        // Change image src if needed
        img.src = "/images/night-mode.png";
    });
}
//# sourceMappingURL=theme.js.map