// src/components/EventMarker.tsx
import React from "react";
import { EventData } from "../types";

interface Props {
  event: EventData;
  onClick: () => void;
}

const EventMarker: React.FC<Props> = ({ event, onClick }) => {
  return (
    <button className="year-btn" onClick={onClick}>
      {event.year}
    </button>
  );
};

export default EventMarker;
