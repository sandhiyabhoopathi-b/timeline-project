import React, { useEffect, useRef } from "react";
import { EventData } from "../types";

interface Props {
  event: EventData | null;
  onClose: () => void;
}

const EventModal: React.FC<Props> = ({ event, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (event && modalRef.current) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;

      const focusableEls = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (firstEl) firstEl.focus();

      function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") {
          onClose();
        }
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstEl) {
              e.preventDefault();
              lastEl.focus();
            }
          } else {
            if (document.activeElement === lastEl) {
              e.preventDefault();
              firstEl.focus();
            }
          }
        }
      }

      modalRef.current.addEventListener("keydown", handleKeyDown);

      return () => {
        modalRef.current?.removeEventListener("keydown", handleKeyDown);
        previouslyFocusedElement.current?.focus();
      };
    }
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div
      id="modal"
      className="open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      ref={modalRef}
      tabIndex={-1}
      style={{ display: "flex" }}
    >
      <div id="modal-content">
        <button id="close-btn" onClick={onClose} aria-label="Close dialog">
          &times;
        </button>
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
