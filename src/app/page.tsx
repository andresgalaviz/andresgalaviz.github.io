export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-950 text-neutral-100 px-6 py-12">
      <main className="max-w-md w-full space-y-6">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight font-[family-name:var(--font-geist-sans)]">
          Andres Galaviz
        </h1>
        <div className="space-y-2 font-[family-name:var(--font-geist-mono)] text-sm text-neutral-400">
          <p>Staff Software Engineer at Meta</p>
          <p>Ad Serving Infrastructure</p>
          <p>M.S. in CS, University of Washington</p>
        </div>
        <div className="flex gap-4 text-sm font-[family-name:var(--font-geist-sans)]">
          <a
            href="/Andres-Galaviz-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/andresgalaviz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/andresgalaviz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300"
          >
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
