// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header className="head-container">
      <button className="mode-btn-right" onClick={toggleTheme}>
        <img src="/images/night-mode.png" width="30" height="30" alt="theme" />
      </button>
      <nav></nav>
    </header>
  );
};

export default Header;
