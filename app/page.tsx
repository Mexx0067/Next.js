import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col items-center justify-between p-8 sm:p-20">
      <header className="w-full flex flex-col items-center mt-8 mb-12">
        <div className="rounded-full overflow-hidden border-4 border-blue-200 shadow-lg w-32 h-32 mb-4">
          {/* <Image
            src="/profile.jpg"
            alt="Profile picture"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          /> */}
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Mehroj Tursunov</h1>
        <p className="text-lg text-gray-600 text-center max-w-xl">
          Full Stack Developer | Building modern web experiences with Next.js, React, and TypeScript.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            aria-label="GitHub"
          >
            <Image src="/github.svg" alt="GitHub" width={28} height={28} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            aria-label="LinkedIn"
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width={28} height={28} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:scale-110 transition"
            aria-label="Email"
          >
            <Image src="/mail.svg" alt="Email" width={28} height={28} />
          </a>
        </div>
      </header>

      <main className="flex flex-col items-center gap-12 w-full max-w-3xl">
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am passionate about crafting performant, accessible, and delightful web applications. With experience in both frontend and backend, I love solving complex problems and learning new technologies.
          </p>
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Projects</h2>
          <ul className="grid gap-6 sm:grid-cols-2">
            <li className="bg-white rounded-lg shadow p-4 border border-blue-100">
              <h3 className="font-bold text-lg mb-1">Project One</h3>
              <p className="text-gray-600 mb-2">A brief description of your project goes here.</p>
              <a
                href="https://github.com/yourusername/project-one"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View on GitHub
              </a>
            </li>
            <li className="bg-white rounded-lg shadow p-4 border border-blue-100">
              <h3 className="font-bold text-lg mb-1">Project Two</h3>
              <p className="text-gray-600 mb-2">Another project description goes here.</p>
              <a
                href="https://github.com/yourusername/project-two"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View on GitHub
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="w-full text-center text-gray-500 text-sm mt-12 mb-4">
        &copy; {new Date().getFullYear()} Mehroj Tursunov. All rights reserved.
      </footer>
    </div>
  );
}
