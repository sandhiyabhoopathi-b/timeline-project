// src/components/Timeline.tsx
import React, { useEffect, useState } from "react";
import { EventData } from "../types";
import EventMarker from "./EventMarker";
import EventModal from "./EventModal";

const Timeline: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <section id="timeline">
      <div id="timeline-container">
        {events.map((event) => (
          <EventMarker
            key={event.year}
            event={event}
            onClick={() => setSelectedEvent(event)}
          />
        ))}
      </div>
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
};

export default Timeline;
