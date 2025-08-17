export async function fetchEvents() {
    const response = await fetch("./events.json");
    return response.json();
}
//# sourceMappingURL=fetcher.js.map