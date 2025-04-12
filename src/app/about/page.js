export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col-reverse md:flex-row gap-12 justify-center">
      <div className="w-full md:max-w-[464px]">
        <h1 className="text-5xl font-bold leading-[56px] text-gray-900 dark:text-white max-w-[464px]">
          I&apos;m Geo. I live in Provo, where I bring math, education, and technology together.
        </h1>
        <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            I am a Colombian educator with over a decade of experience teaching mathematics across different levels, including to students with hearing impairments. I hold a Bachelor&apos;s degree in Math Education and a Master of Science in Mathematics, and I&apos;m currently pursuing an Associate Degree in Data Science at Ensign College in Salt Lake City, Utah.
          </p>
          <p>
            Throughout my career, I&apos;ve been passionate about integrating technology in math education. I&apos;ve worked with tools like GeoGebra, H5P, Desmos, and Derivita to make learning more engaging. In the U.S., I&apos;ve collaborated with BYU&apos;s Continuing Education department as an Instructional Designer Assistant and currently support students as a Registration Agent with BYU Pathway.
          </p>
          <p>
            I&apos;m driven by the belief that education can be more equitable and impactful through data. That&apos;s why I&apos;m building skills in SQL, Python, and Tableau to apply data science for holistic assessment and improvement strategies in learning environments.
          </p>
          <p>
            Beyond work and study, I enjoy spending time with my wife Katia and our 6-year-old son José. I also love music (especially choir direction), fútbol (soccer and American), and meaningful service in my community. My project &quot;Math for All LLC&quot; reflects my long-term vision to empower vulnerable populations in the U.S. with accessible math learning.
          </p>
        </div>
      </div>

      <div className="w-full md:max-w-[464px] flex flex-col items-center md:items-start">
        <Image
          src="/GeoPhoto.jpg"
          alt="Geo"
          width={300}
          height={400}
          className="rounded-xl w-full max-w-[300px] object-cover"
        />

        <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex items-center gap-2">
            <a
              href="https://x.com/geovanny84"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <span>
                {/* Ícono de X */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </span>
              Follow me on X
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a
              href="https://github.com/GeoPena"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <span>
                {/* Ícono de GitHub */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </span>
              Follow me on GitHub
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/GeovannyPenaRueda/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-700 transition-colors"
            >
              <span>
                {/* Ícono de LinkedIn */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </span>
              Connect with me on LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a href="mailto:geovanny84@gmail.com" className="flex items-center gap-2 hover:text-red-600 transition-colors">
              <span>📧</span> geovanny84@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}