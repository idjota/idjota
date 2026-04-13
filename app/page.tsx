const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jonatan Waibsnaider — Building high-scale, revenue-critical systems",
  url: "https://idjota.com",
  jobTitle: "Senior Software Engineer",
  description:
    "Senior Software Engineer. Building production systems. TypeScript, React, Node.js & AI engineering.",
  worksFor: {
    "@type": "Organization",
    name: "Mercado Libre",
  },
  sameAs: ["https://github.com/idjota", "https://www.linkedin.com/in/idjota"],
  knowsAbout: [
    "TypeScript",
    "React",
    "Node.js",
    "Scalable Systems",
    "Frontend Architecture",
    "AI Engineering",
    "GraphQL",
    "Distributed Systems",
  ],
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col items-center justify-center text-center gap-8">
        <h1 className="text-2xl sm:text-3xl tracking-tight text-black">
          Building high-scale, revenue-critical systems
        </h1>
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/idjota"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.43 7.87 10.96.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.97-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.09 1.77 1.2 1.77 1.2 1.03 1.78 2.7 1.27 3.36.97.1-.75.4-1.27.73-1.57-2.56-.3-5.26-1.29-5.26-5.73 0-1.27.45-2.3 1.2-3.12-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.64 1.65.24 2.87.12 3.17.75.82 1.2 1.85 1.2 3.12 0 4.45-2.7 5.42-5.28 5.72.41.36.78 1.07.78 2.17 0 1.57-.01 2.84-.01 3.23 0 .31.2.67.8.56A11.54 11.54 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/idjota"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.71h.05c.53-1 1.84-2.06 3.79-2.06C21.17 8.65 22 10.73 22 14.03V21h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.61-2.38 3.27V21h-4V9Z" />
            </svg>
          </a>
          <a
            href="mailto:joniwaibs@gmail.com"
            aria-label="Gmail"
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.6-.5 7.4 5.55L19.4 6h-14.8Zm15.4 2.5-7.4 5.55a1 1 0 0 1-1.2 0L4 8.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8.5Z" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
