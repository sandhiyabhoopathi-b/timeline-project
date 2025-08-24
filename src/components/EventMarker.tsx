import React, { forwardRef } from "react";
import { EventData } from "../types";

interface Props {
  event: EventData;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
}

const EventMarker = forwardRef<HTMLButtonElement, Props>(
  ({ event, onClick, isActive }, ref) => {
    return (
      <button
        ref={ref}
        className="year-btn"
        onClick={onClick}
        aria-current={isActive ? "step" : undefined}
        aria-label={`Timeline event ${event.year}: ${event.title}`}
      >
        {event.year}
      </button>
    );
  }
);

export default EventMarker;
