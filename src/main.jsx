import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

function App() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Vogue home">VOGUE</a>
        <nav aria-label="Main navigation">
          <a href="#collection">The collection</a>
          <a href="#about">Our story</a>
        </nav>
        <a className="shop-link" href="#collection">Discover the edit <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Spring / Summer 2026</p>
          <h1 id="hero-title">A study in<br /><em>quiet luxury.</em></h1>
          <p className="intro">Considered silhouettes. Exceptional materials. A new perspective on the pieces you keep forever.</p>
          <a className="button" href="#collection">Explore the collection <span aria-hidden="true">→</span></a>
        </div>
        <div className="hero-art" role="img" aria-label="Abstract warm-toned editorial fashion artwork">
          <div className="sun" />
          <div className="silhouette" />
          <span className="art-caption">FORM IN FOCUS — 01</span>
        </div>
        <div className="side-note">DESIGNED TO BE KEPT&nbsp; · &nbsp;MADE TO BE WORN</div>
      </section>

      <section className="collection" id="collection">
        <p className="eyebrow">The new perspective</p>
        <h2>Less, but <em>lasting.</em></h2>
        <p>Discover refined tailoring, tactile textures, and enduring essentials—created with intention for the everyday and beyond.</p>
      </section>
      <footer id="about"><span>VOGUE</span><span>Independent style. Enduring by design.</span><span>© 2026</span></footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
