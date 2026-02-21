import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          <Image
            src="/AndresGalaviz.jpg"
            alt="Andres Galaviz"
            width={120}
            height={120}
            className="rounded-full object-cover ring-2 ring-neutral-800 shrink-0"
            priority
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight font-[family-name:var(--font-geist-sans)]">
              Andres Galaviz
            </h1>
            <p className="mt-2 text-lg text-neutral-400 font-[family-name:var(--font-geist-mono)]">
              Staff Software Engineer at Meta
            </p>
            <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-4 text-sm font-[family-name:var(--font-geist-sans)]">
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
          </div>
        </header>

        <hr className="my-10 border-neutral-800" />

        {/* About */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500 font-[family-name:var(--font-geist-sans)]">
            About
          </h2>
          <p className="mt-4 text-neutral-300 leading-relaxed font-[family-name:var(--font-geist-sans)]">
            Staff Software Engineer at Meta currently working on Ad Serving
            Infrastructure. Previously focused on Cloud Infrastructure and
            Robotics. Passionate about building reliable, high-scale systems
            that serve billions of requests.
          </p>
        </section>

        <hr className="my-10 border-neutral-800" />

        {/* Experience */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500 font-[family-name:var(--font-geist-sans)]">
            Experience
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-neutral-100 font-medium font-[family-name:var(--font-geist-sans)]">
                  Meta
                </h3>
                <span className="text-xs text-neutral-500 font-[family-name:var(--font-geist-mono)]">
                  Staff Software Engineer
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-400 font-[family-name:var(--font-geist-mono)]">
                Ad Serving Infrastructure
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-neutral-100 font-medium font-[family-name:var(--font-geist-sans)]">
                  Microsoft
                </h3>
                <span className="text-xs text-neutral-500 font-[family-name:var(--font-geist-mono)]">
                  Software Engineer
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-400 font-[family-name:var(--font-geist-mono)]">
                Cloud Infrastructure
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-neutral-100 font-medium font-[family-name:var(--font-geist-sans)]">
                  MIT
                </h3>
                <span className="text-xs text-neutral-500 font-[family-name:var(--font-geist-mono)]">
                  Researcher
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-400 font-[family-name:var(--font-geist-mono)]">
                Robotics
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-neutral-800" />

        {/* Education */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500 font-[family-name:var(--font-geist-sans)]">
            Education
          </h2>
          <div className="mt-6">
            <h3 className="text-neutral-100 font-medium font-[family-name:var(--font-geist-sans)]">
              University of Washington
            </h3>
            <p className="mt-1 text-sm text-neutral-400 font-[family-name:var(--font-geist-mono)]">
              M.S. in Computer Science
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
