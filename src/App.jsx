import React from 'react'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Web Importer for Notion</h2>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Tired of Copy-Pasting? Get any web data into your Notion database in one click.</h1>
          
          <p className={styles.subheadline}>
            Stop wasting time on manual data entry. Paste a URL, link your database, and let our tool do the rest. No code, no complex setups, no 'playbooks' to learn.
          </p>

          <img 
            src="/demo-animation.gif" 
            alt="Animation showing a URL being pasted and data appearing in a Notion database"
            className={styles.demoGif}
          />

          <a 
            href="https://tally.so/r/wo4gae" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Sign up for the private beta
          </a>

          <p className={styles.ctaSupportText}>
            Price: $10/mo. Only 100 spots available.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Web Importer for Notion</p>
      </footer>
    </div>
  )
}

export default App
