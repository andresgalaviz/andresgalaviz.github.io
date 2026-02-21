import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-[family-name:var(--font-geist-sans)]">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <Image
            src="/AndresGalaviz.jpg"
            alt="Andres Galaviz"
            width={128}
            height={128}
            className="rounded-full object-cover ring-2 ring-neutral-800 shrink-0 w-28 h-28 sm:w-32 sm:h-32"
            priority
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Andres Galaviz
            </h1>
            <p className="mt-2 text-neutral-400 font-[family-name:var(--font-geist-mono)]">
              Staff Software Engineer at Meta
            </p>
            <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 text-sm">
              <a
                href="/Andres-Galaviz-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/andresgalaviz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/andresgalaviz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        <hr className="my-10 border-neutral-800/60" />

        {/* About */}
        <section>
          <h2 className="section-heading">About</h2>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            Staff Software Engineer at Meta building Ad Serving Infrastructure.
            Previously spent 7+ years at Microsoft, where I grew from intern to
            Senior Engineering Manager across Azure Cloud Infrastructure and
            Robotics. I also did research at MIT&apos;s Space Systems Lab, where my
            work on satellite docking algorithms was validated aboard the
            International Space Station.
          </p>
        </section>

        <hr className="my-10 border-neutral-800/60" />

        {/* Experience */}
        <section>
          <h2 className="section-heading">Experience</h2>
          <div className="mt-6 space-y-8">
            {/* Meta */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-neutral-100 font-medium">Meta</h3>
                <span className="text-xs text-neutral-500 font-[family-name:var(--font-geist-mono)]">
                  2024 &ndash; Present
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-400">
                Staff Software Engineer
              </p>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                Ad Serving Infrastructure
              </p>
            </div>

            {/* Microsoft */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-neutral-100 font-medium">Microsoft</h3>
                <span className="text-xs text-neutral-500 font-[family-name:var(--font-geist-mono)]">
                  2014 &ndash; 2024
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-400">
                Intern &rarr; Software Engineer &rarr; Senior Engineer &rarr;
                Senior Engineering Manager
              </p>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                Azure Cloud Infrastructure &middot; Azure Core Robotics &middot;
                New Tech (GPU) Buildout
              </p>
            </div>

            {/* MIT */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-neutral-100 font-medium">
                  MIT Space Systems Lab
                </h3>
                <span className="text-xs text-neutral-500 font-[family-name:var(--font-geist-mono)]">
                  2017
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-400">
                Research Assistant
              </p>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                Optimized SPHERES satellite docking algorithms, validated in a
                joint experiment with NASA aboard the ISS
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-neutral-800/60" />

        {/* Education */}
        <section>
          <h2 className="section-heading">Education</h2>
          <div className="mt-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-neutral-100 font-medium">
                  University of Washington
                </h3>
                <p className="text-sm text-neutral-400">
                  M.S. in Computer Science &middot; 3.98 GPA
                </p>
              </div>
              <span className="text-xs text-neutral-500 font-[family-name:var(--font-geist-mono)]">
                2023 &ndash; 2027
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-neutral-100 font-medium">
                  National University of Singapore
                </h3>
                <p className="text-sm text-neutral-400">
                  Exchange Program, Computer Science
                </p>
              </div>
              <span className="text-xs text-neutral-500 font-[family-name:var(--font-geist-mono)]">
                2015 &ndash; 2016
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-neutral-100 font-medium">
                  Tecnol&oacute;gico de Monterrey
                </h3>
                <p className="text-sm text-neutral-400">
                  B.S. in Computer Science
                </p>
              </div>
              <span className="text-xs text-neutral-500 font-[family-name:var(--font-geist-mono)]">
                2012 &ndash; 2017
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
