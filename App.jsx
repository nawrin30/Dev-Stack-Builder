import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

function Logo() {
  return (
    <a href="/" className="logo">
      <img src="/assets/logo.png" alt="Dev Stack" />
    </a>
  );
}


function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="navbar">
      <div className="nav-container">

        {}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {}
        <Logo />

        {}
        <nav className={`nav-links ${menuOpen ? "show-mobile" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#technologies" onClick={() => setMenuOpen(false)}>
            Technologies
          </a>

          {}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
            }}
          >
            Projects
          </a>

          {}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
            }}
          >
            About
          </a>

          {}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        {}
        <div className="nav-actions">
          <a href="#" className="sign-in">
            Sign In
          </a>

          <a href="#" className="sign-up">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-left">
          <h1>
            Build Your Ideal
            <span className="gradient-text">
              Development Stack
            </span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="primary-button">
              Explore Technologies
            </a>

            <a href="#technologies" className="secondary-button">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="./assets/hero.png"
            alt="Development Stack"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}



function TechCard({ tech, added, onAdd }) {
  return (
    <article className={`tech-card ${added ? "card-added" : ""}`}>

      <div className="card-header">
        <img
          src={tech.icon}
          alt={tech.name}
          className="tech-icon"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <span className="tech-badge">
          {tech.badge}
        </span>
      </div>

      <h3>{tech.name}</h3>

      <p className="tech-description">
        {tech.description}
      </p>

      <div className="tech-meta">
        <span className="category">
          {tech.category}
        </span>

        <span className="difficulty">
          {tech.difficulty}
        </span>

        <span className="rating">
          ★ {tech.rating}
        </span>
      </div>

      <button
        className={`add-button ${added ? "added-button" : ""}`}
        onClick={() => onAdd(tech)}
        disabled={added}
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </article>
  );
}



function StackPanel({ selected, onRemove, onRemoveAll }) {
  return (
    <aside className="stack-panel">

      <h2>Your Stack</h2>

      <p className="stack-count">
        {selected.length}{" "}
        {selected.length === 1
          ? "Technology"
          : "Technologies"}{" "}
        Selected
      </p>

      {selected.length === 0 ? (
        <div className="empty-stack">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="stack-items">
            {selected.map((tech) => (
              <div className="stack-item" key={tech.id}>

                <img
                  src={tech.icon}
                  alt={tech.name}
                />

                <div className="stack-item-info">
                  <strong>{tech.name}</strong>
                  <small>{tech.category}</small>
                </div>

                <button
                  className="remove-item"
                  onClick={() => onRemove(tech.id)}
                  aria-label={`Remove ${tech.name}`}
                >
                  ×
                </button>

              </div>
            ))}
          </div>

          <button
            className="remove-all"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}

    </aside>
  );
}



function Technologies({
  technologies,
  selected,
  onAdd,
  onRemove,
  onRemoveAll,
  loading,
}) {
  const selectedIds = useMemo(
    () => new Set(selected.map((item) => item.id)),
    [selected]
  );

  return (
    <section
      className="technologies-section"
      id="technologies"
    >
      <div className="section-title">

        <h2>
          Explore the{" "}
          <span className="gradient-text">
            Technologies
          </span>
        </h2>

        <p>
          Pick one technology per category to build your ideal stack.
        </p>

      </div>

      <div className="technology-layout">

        <div className="technology-grid">

          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading technologies...</p>
            </div>
          ) : (
            technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                added={selectedIds.has(tech.id)}
                onAdd={onAdd}
              />
            ))
          )}

        </div>

        <StackPanel
          selected={selected}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
        />

      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <Logo />

          <p>
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

        </div>

        <div className="footer-column">
          <h4>PRODUCT</h4>

          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Projects
          </a>
        </div>

        {}
        <div className="footer-column" id="contact">
          <h4>COMPANY</h4>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            About
          </a>

          <a href="#contact">
            Contact
          </a>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Careers
          </a>
        </div>

        <div className="footer-column">
          <h4>LEGAL</h4>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Privacy Policy
          </a>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Terms of Service
          </a>
        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 Dev Stack. All rights reserved.
        </span>

        <div>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Privacy
          </a>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Terms
          </a>
        </div>

      </div>

    </footer>
  );
}



export default function App() {

  const [technologies, setTechnologies] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    async function loadTechnologies() {

      try {

        const response = await fetch(
          "/technologies.json"
        );

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data = await response.json();

        setTechnologies(data);

      } catch (error) {

        console.error(error);

        toast.error(
          "Failed to load technology data."
        );

      } finally {

        setLoading(false);

      }
    }

    loadTechnologies();

  }, []);

  
  function addToStack(technology) {

    const alreadyAdded = selected.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {

      toast.warning(
        `${technology.name} is already in your stack.`
      );

      return;
    }

    setSelected((previous) => [
      ...previous,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack.`
    );
  }

  
  function removeFromStack(id) {

    const removed = selected.find(
      (item) => item.id === id
    );

    setSelected((previous) =>
      previous.filter(
        (item) => item.id !== id
      )
    );

    if (removed) {

      toast.info(
        `${removed.name} removed from your stack.`
      );

    }
  }

  
  function removeAll() {

    if (selected.length === 0) {
      return;
    }

    setSelected([]);

    toast.info(
      "All technologies removed from your stack."
    );
  }

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>

        <Hero />

        <Technologies
          technologies={technologies}
          selected={selected}
          onAdd={addToStack}
          onRemove={removeFromStack}
          onRemoveAll={removeAll}
          loading={loading}
        />

      </main>

      <Footer />
    </>
  );
}