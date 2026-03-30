import styles from "./page.module.css";

const CHROME_WEB_STORE_URL = "https://chromewebstore.google.com";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="Clerra landing page">
        <header className={styles.copy}>
          <h1 className={styles.title}>Clerra.Life</h1>
          <p className={styles.tagline}>Less, but true</p>
        </header>

        <div className={styles.panel} aria-hidden="true" />

        <a
          className={styles.installButton}
          href={CHROME_WEB_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Install Plugin
        </a>
      </section>
    </main>
  );
}
