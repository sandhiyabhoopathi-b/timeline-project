// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import "./../style.css"; // import your existing CSS

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Timeline />
      <main className="main-container">
        <div className="main-container-title">
          <h1 className="main-year">1997</h1>
          <h1>Introduction of the First Personal Computer</h1>
        </div>
        <figure>
          <img src="/images/computer_img.jpg" alt="computer" />
        </figure>
        <article className="main-article">
          The risk personal computer, introduced in 1997,
          revolutionized the way people interacted with
          <br />
          These early systems were more affordable and
          paving the way for the digital age ad transforming various
          <br />
          <br />
          <button>Learn More</button>
        </article>
      </main>
    </div>
  );
};

export default App;
