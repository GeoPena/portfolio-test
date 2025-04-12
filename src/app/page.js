'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, BriefcaseBusiness, Zap, Linkedin, Twitter, Github } from 'lucide-react';

export default function Home() {
  const workExperience = [
    {
      company: "BYU-Pathway Worldwide",
      logo: "/BYUPathway.png",
      role: "REGISTRATION AGENT",
      date: "2024 - Present",
    },
    {
      company: "Brigham Young University",
      logo: "/BYULogo.png",
      role: "INSTRUCTIONAL DESIGNER",
      date: "2022 - 2023",
    },
    {
      company: "Colombian Board of Education",
      logo: "/MinEducacionLogo.png",
      role: "TRAINER",
      date: "2020 - 2021",
    },
  ];

  const skills = [
    {
      name: "HTML",
      logo: "/HTML5Logo.png",
      color: "bg-red-500",
      width: "w-4/5",
    },
    {
      name: "CSS",
      logo: "/CSSLogo.png",
      color: "bg-blue-500",
      width: "w-3/5",
    },
    {
      name: "JavaScript",
      logo: "/JavascriptLogo.png",
      color: "bg-yellow-500",
      width: "w-4/5",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mt-10 text-left">
        <Image
          src="/GeoPhoto.jpg"
          width={80}
          height={80}
          className="rounded-full"
          alt="Geovanny Peña Profile"
        />
        <h1 className="text-3xl font-bold mt-4">
          Educator, Data Enthusiast, and Advocate for Accessible Math Education
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          I&apos;m <strong>Geovanny Peña</strong>, a passionate educator with over a decade of
          experience teaching math in Colombia, currently pursuing an Associate Degree in Data
          Science at Ensign College in Salt Lake City.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          My academic journey includes a Master&apos;s in Mathematical Sciences and a Bachelor&apos;s in
          Math Education. I&apos;ve worked as a high school teacher, a government teacher trainer, and
          currently support students as a Registration Agent at BYU–Pathway.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          I specialize in integrating technology into learning using tools like <strong>Desmos</strong>,{" "}
          <strong>GeoGebra</strong>, <strong>H5P</strong>, and <strong>Derivita</strong>. I&apos;m also
          building <strong>Math for All LLC</strong>, an initiative to train teachers and provide
          equitable math tools for underserved communities.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4">
          <Link
            href="https://www.linkedin.com/in/GeovannyPenaRueda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} className="text-gray-500 hover:text-black dark:hover:text-white" />
          </Link>
          <Link
            href="https://twitter.com/geovanny84"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={24} className="text-gray-500 hover:text-black dark:hover:text-white" />
          </Link>
          <Link href="https://github.com/GeoPena" target="_blank" rel="noopener noreferrer">
            <Github size={24} className="text-gray-500 hover:text-black dark:hover:text-white" />
          </Link>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Articles - Left Column */}
        <section className="md:col-span-2 space-y-6">
          <Article
            date="September 2018"
            title="Some Characterization of Supersolubility"
            description="A meritorious master&apos;s thesis exploring concepts in Group Theory using GAP software. Developed as part of my MSc in Mathematics at Universidad del Atlántico."
            href="/thesis.pdf"
          />
          <Article
            date="2024 (United States)"
            title="Math For All – National Interest Project"
            description="A nonprofit initiative designed to empower educators and underserved communities in the U.S. with equitable access to dynamic math learning tools."
            href="/MathForAll.pdf"
          />
          <Article
            date="2021 (Colombia)"
            title="Geometry and Movements"
            description="A professional development session delivered to elementary math teachers through the Colombian Ministry of Education&apos;s &quot;Todos a Aprender&quot; program."
            href="/GeometryPTA.pdf"
          />
        </section>

        {/* Sidebar - Right Column */}
        <aside className="md:col-span-1 space-y-6">
          {/* Subscribe */}
          <div className="p-4 border rounded-md">
            <div className="flex items-center space-x-2">
              <Mail width={24} height={24} className="text-gray-600 dark:text-gray-300" />
              <h3 className="font-semibold">Stay up to date</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Get notified when I publish something new.
            </p>
            <input
              type="email"
              placeholder="Email address"
              className="border p-2 w-full mt-2"
            />
            <button className="w-full bg-black text-white p-2 mt-2">Join</button>
          </div>

          {/* Work Experience */}
          <div className="p-4 border rounded-md">
            <div className="flex items-center space-x-2">
              <BriefcaseBusiness width={24} height={24} className="text-gray-600 dark:text-gray-300" />
              <h3 className="font-semibold">Work</h3>
            </div>
            <ul className="mt-2 text-sm space-y-3">
              {workExperience.map((job, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <Image src={job.logo} width={24} height={24} alt={`${job.company} Logo`} />
                    <div>
                      <span className="font-semibold">{job.company}</span>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">{job.role}</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-xs">{job.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="p-4 border rounded-md">
            <div className="flex items-center space-x-2">
              <Zap width={24} height={24} className="text-gray-600 dark:text-gray-300" />
              <h3 className="font-semibold">Skills</h3>
            </div>
            <div className="mt-2 space-y-3">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-3">
                    <Image src={skill.logo} width={24} height={24} alt={`${skill.name} Logo`} />
                    <p className="text-xs font-semibold">{skill.name}</p>
                  </div>
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

function Article({ date, title, description, href }) {
  return (
    <article className="border-b pb-4">
      <p className="text-sm text-gray-500">{date}</p>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <Link
        href={href}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View PDF →
      </Link>
    </article>
  );
}