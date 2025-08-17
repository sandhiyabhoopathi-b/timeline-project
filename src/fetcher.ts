// fetcher.ts
import type { EventData } from "./types.js";

export async function fetchEvents(): Promise<EventData[]> {
    const response = await fetch("./events.json");
    return response.json();
}
