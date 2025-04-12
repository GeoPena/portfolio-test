import Image from 'next/image'; // 👈 Importa el componente de Next.js

export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
};

import ProjectCard from '@/components/ProjectCard';
import { LinkIcon } from 'lucide-react';

const projects = [
  {
    id: 1,
    imageSrc: '/nctm-logo.png',
    company: 'NCTM Membership',
    description: 'Member of the National Council of Teachers of Mathematics to stay current with math education trends and research.',
    projectUrl: 'https://www.nctm.org/',
  },
  {
    id: 2,
    imageSrc: '/BYUPathway.png',
    company: 'BYU–Pathway Worldwide',
    description: 'Currently working as a Registration Agent, helping students from around the world access higher education opportunities.',
    projectUrl: 'https://www.byupathway.edu/',
  },
  {
    id: 3,
    imageSrc: '/SEDBarranquilla.jpg',
    company: 'Barranquilla Board of Education',
    description: 'Worked as a high school math teacher, helping students succeed through personalized instruction and technology integration.',
    projectUrl: 'https://barranquilla.gov.co/educacion',
  },
  {
    id: 4,
    imageSrc: '/PTA_logo.png',
    company: 'Programa Todos a Aprender',
    description: 'Served as a national teacher trainer, coaching elementary educators in math and language through the Ministry of Education.',
    projectUrl: 'https://www.colombiaaprende.edu.co/contenidos/curso/cursos-virtuales-programa-todos-aprender',
  },
  {
    id: 5,
    imageSrc: '/cda-logo.png',
    company: 'CDA Gigantes 2021',
    description: 'Created educational content for teacher professional development, including a video training series for PTA.',
    projectUrl: 'https://www.youtube.com/@CDAGigantes',
  },
  {
    id: 6,
    imageSrc: '/Youtube_logo.png',
    company: 'My YouTube Channel',
    description: 'Personal channel where I share educational math content, music arrangements, and instructional videos.',
    projectUrl: 'https://www.youtube.com/@geovanny84',
  },
];

export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-left mb-4">Building bridges between math, people, and technology.</h1>
      <p className="text-gray-600 dark:text-gray-400 text-left max-w-2xl mx-auto mb-10">
        From classroom innovation in Colombia to data-driven solutions in the U.S., these projects represent my commitment to making quality math education accessible and impactful.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-4 flex items-center space-x-3">
              <Image
                src={project.imageSrc}
                alt={`${project.company} Logo`}
                width={48}
                height={48}
                className="object-contain rounded"
              />
              <h2 className="text-lg font-semibold">{project.company}</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="flex items-center space-x-2">
              <LinkIcon className="text-gray-500" size={18} />
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {project.projectUrl}
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}