const CHROME_WEB_STORE_URL = "https://chromewebstore.google.com";

export default function Home() {
  return (
    <main className="landing-shell">
      <a
        className="landing-link"
        href={CHROME_WEB_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Install the Clerra plugin from the Chrome Web Store"
      >
        <span className="sr-only">Clerra.Life. Less, but true.</span>
      </a>
    </main>
  );
}
