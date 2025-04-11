import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { Linkedin, Twitter, Github, Mail, BriefcaseBusiness, Zap } from "lucide-react"; // Import Lucide icons

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mt-10 text-left">
        <Image src="/GeoPhoto.jpg" width={80} height={80} className="rounded-full" alt="Profile" />
        <h1 className="text-3xl font-bold mt-4">Educator, Data Enthusiast, and Advocate for Accessible Math Education</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
            I’m <strong>Geovanny Peña</strong>, a passionate educator with over a decade of experience teaching math in Colombia, currently pursuing an Associate Degree in Data Science at Ensign College in Salt Lake City.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            My academic journey includes a Master’s in Mathematical Sciences and a Bachelor’s in Math Education. I've worked as a high school teacher, a government teacher trainer, and currently support students as a Registration Agent at BYU–Pathway.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            I specialize in integrating technology into learning using tools like <strong>Desmos</strong>, <strong>GeoGebra</strong>, <strong>H5P</strong>, and <strong>Derivita</strong>. I'm also building <strong>Math for All LLC</strong>, an initiative to train teachers and provide equitable math tools for underserved communities.
          </p>
        <div className="flex space-x-4 mt-4">
          <Link href="https://www.linkedin.com/in/GeovannyPenaRueda/" target="_blank">
            <Linkedin size={24} className="text-gray-500 hover:text-black dark:hover:text-white" />
          </Link>
          <Link href="https://twitter.com/geovanny84" target="_blank">
            <Twitter size={24} className="text-gray-500 hover:text-black dark:hover:text-white" />
          </Link>
          <Link href="https://github.com/" target="_blank">
            <Github size={24} className="text-gray-500 hover:text-black dark:hover:text-white" />
          </Link>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Articles - Left Column */}
        <section className="md:col-span-2 space-y-6">
          <article className="border-b pb-4">
            <p className="text-sm text-gray-500">September 2018</p>
            <h2 className="text-lg font-semibold">Some Characterization of Supersolubility</h2>
            <p className="text-gray-600 dark:text-gray-300">
              A meritorious master's thesis exploring concepts in Group Theory using GAP software. Developed as part of my MSc in Mathematics at Universidad del Atlántico.
            </p>
            <Link
              href="/thesis.pdf"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View thesis (PDF) →
            </Link>
          </article>

          <article className="border-b pb-4">
            <p className="text-sm text-gray-500">2024 (United States)</p>
            <h2 className="text-lg font-semibold">Math For All – National Interest Project</h2>
            <p className="text-gray-600 dark:text-gray-300">
              A nonprofit initiative designed to empower educators and underserved communities in the U.S. with equitable access to dynamic math learning tools.
            </p>
            <Link
              href="/MathForAll.pdf"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read project (PDF) →
            </Link>
          </article>

          <article className="border-b pb-4">
            <p className="text-sm text-gray-500">2021 (Colombia)</p>
            <h2 className="text-lg font-semibold">Geometry and Movements</h2>
            <p className="text-gray-600 dark:text-gray-300">
              A professional development session delivered to elementary math teachers through the Colombian Ministry of Education's "Todos a Aprender" program.
            </p>
            <Link
              href="/GeometryPTA.pdf"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View presentation (PDF) →
            </Link>
          </article>
        </section>

        {/* Sidebar - Right Column */}
        <aside className="md:col-span-1 space-y-6">
          {/* Subscribe */}
          <div className="p-4 border rounded-md">
            <div className="flex items-center space-x-2">
              <Mail width={24} height={24} className="text-gray-600 dark:text-gray-300" />
              <h3 className="font-semibold">Stay up to date</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Get notified when I publish something new.</p>
            <input type="email" placeholder="Email address" className="border p-2 w-full mt-2" />
            <button className="w-full bg-black text-white p-2 mt-2">Join</button>
          </div>

          {/* Work Experience */}
          <div className="p-4 border rounded-md">
            {/* Title with Icon */}
            <div className="flex items-center space-x-2">
              <BriefcaseBusiness width={24} height={24} className="text-gray-600 dark:text-gray-300" />
              <h3 className="font-semibold">Work</h3>
            </div>

            {/* Work Experience List */}
            <ul className="mt-2 text-sm space-y-3">
              {[
                { company: "BYU-Pathway Worldwide", logo: "/BYUPathway.png", role: "REGISTRATION AGENT", date: "2024 - Present" },
                { company: "Brigham Young University", logo: "/BYULogo.png", role: "INSTRUCTIONAL DESIGNER", date: "2022 - 2023" },
                { company: "Colombian Board of Education", logo: "/MinEducacionLogo.png", role: "TRAINER", date: "2020 - 2021" },
              ].map((job, index) => (
                <li key={index} className="flex justify-between items-center">
                  {/* Left Side: Logo + Job Info */}
                  <div className="flex items-center space-x-3">
                    <Image src={job.logo} width={24} height={24} alt={`${job.company} Logo`} />
                    <div>
                      <span className="font-semibold">{job.company}</span>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">{job.role}</p>
                    </div>
                  </div>

                  {/* Right Side: Date */}
                  <span className="text-gray-500 text-xs">{job.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="p-4 border rounded-md">
            {/* Title with Icon */}
            <div className="flex items-center space-x-2">
              <Zap width={24} height={24} className="text-gray-600 dark:text-gray-300" />
              <h3 className="font-semibold">Skills</h3>
            </div>

            <div className="mt-2 space-y-3">
              {[
                { name: "HTML", logo: "/HTML5Logo.png", color: "bg-red-500", width: "w-4/5" },
                { name: "CSS", logo: "/CSSLogo.png", color: "bg-blue-500", width: "w-3/5" },
                { name: "JavaScript", logo: "/JavascriptLogo.png", color: "bg-yellow-500", width: "w-4/5" },
              ].map((skill, index) => (
                <div key={index}>
                  {/* Skill Name + Logo */}
                  <div className="flex items-center space-x-3">
                    <Image src={skill.logo} width={24} height={24} alt={`${skill.name} Logo`} />
                    <p className="text-xs font-semibold">{skill.name}</p>
                  </div>

                  {/* Skill Progress Bar */}
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-1">
                    <div className={`h-full ${skill.color} ${skill.width}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}