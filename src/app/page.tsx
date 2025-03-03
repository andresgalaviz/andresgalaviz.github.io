// src/app/page.tsx

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-neutral-900 text-neutral-100">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Andres Galaviz
        </p>
        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Ex-Senior Software Engineering Manager at Microsoft
        </p>
        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Cloud Infrastructure and Robotics
        </p>
        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          [In Progress - Temporary leave] M.S in Computer Science at the University of Washington
        </p>

        {/* Link Section */}
        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <a
            href="/Andres-Galaviz-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          {' • '}
          <a
            href="https://www.linkedin.com/in/andresgalaviz"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {' • '}
          <a
            href="https://github.com/andresgalaviz"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </p>
      </main>
    </div>
  );
}