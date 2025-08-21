// src/components/EventModal.tsx
import React from "react";
import { EventData } from "../types";

interface Props {
  event: EventData | null;
  onClose: () => void;
}

const EventModal: React.FC<Props> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div id="modal" className="open" style={{ display: "flex" }}>
      <div id="modal-content">
        <span id="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2 id="modal-title">{event.title}</h2>
        <p id="modal-year">Year: {event.year}</p>
        <img
          id="modal-image"
          src={event.imageURL}
          alt={event.title}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <p id="modal-description">{event.description}</p>
        <p id="modal-category">Category: {event.category}</p>
      </div>
    </div>
  );
};

export default EventModal;
