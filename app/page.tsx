const CHROME_WEB_STORE_URL = "https://chromewebstore.google.com";
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Clerra.Life",
      url: "https://clerra.life",
      description:
        "Clerra is a browser extension that declutters pages, reduces noise, and helps you focus on the content that matters.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Clerra",
      applicationCategory: "BrowserApplication",
      operatingSystem: "Google Chrome",
      description:
        "A browser extension that declutters pages and helps you focus on the content worth your attention.",
      url: "https://clerra.life",
      downloadUrl: CHROME_WEB_STORE_URL,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-4 py-8 text-[#050505] sm:px-6 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section
        className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-10 px-2 sm:gap-12 sm:px-6 md:px-10"
        aria-label="Clerra"
      >
        <header className="flex w-fit max-w-full flex-col items-center py-4 sm:py-6">
          <h1 className="text-center text-[clamp(3.8rem,9vw,5.9rem)] font-semibold leading-[0.92] tracking-[-0.075em] drop-shadow-[0_10px_18px_rgba(0,0,0,0.06)]">
            Clerra.Life
          </h1>

          <p className="mt-4 text-center text-[clamp(1.35rem,3.1vw,2.1rem)] font-medium leading-none tracking-[-0.05em]">
            Less, but true.
          </p>
        </header>

        <div className="h-[clamp(18rem,42vw,26rem)] w-full max-w-[44rem] rounded-[2.15rem] bg-white/95 shadow-[0_18px_55px_rgba(0,0,0,0.08)] ring-1 ring-black/4" />

        <a
          className="inline-flex min-h-14 min-w-[12rem] items-center justify-center rounded-[0.8rem] bg-black px-8 text-[clamp(1.2rem,2vw,1.45rem)] font-semibold leading-none tracking-[-0.035em] text-white shadow-[0_14px_28px_rgba(0,0,0,0.16)] transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#161616] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          href={CHROME_WEB_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
        >
          Add to Chrome
        </a>
      </section>
    </main>
  );
}
