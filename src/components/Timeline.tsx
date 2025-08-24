import React, { useEffect, useRef, useState } from "react";
import { EventData } from "../types";
import EventMarker from "./EventMarker";
import EventModal from "./EventModal";

const Timeline: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const markerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % events.length;
      markerRefs.current[nextIndex]?.focus();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + events.length) % events.length;
      markerRefs.current[prevIndex]?.focus();
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedEvent(events[index]);
    }
  };

  return (
    <section id="timeline">
      <div id="timeline-container" role="list">
        {events.map((event, index) => (
          <EventMarker
            key={event.year}
            event={event}
            onClick={() => setSelectedEvent(event)}
            isActive={selectedEvent?.year === event.year}
            ref={(el) => (markerRefs.current[index] = el)}
            onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e, index)}
          />
        ))}
      </div>
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
};

export default Timeline;
