'use client';

import { Section, SectionTitle } from '@/app/constant';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

interface ProjectDataTypes {
  key: number;
  subTitle: string;
  title: string;
  description: string;
  img: string;
  techStack: string[];
  externalLink: string;
}

const projects: ProjectDataTypes[] = [
  {
    key: 1,
    subTitle: 'Website Application',
    title: 'Casa Almarenzo Booking ',
    description:
      'Revamping the Casa Almarenzo Bed & Breakfast booking web application, including the website app and admin panel, by transitioning it from PHP to reactjs, resulting in improved performance, enchanced use experience, and easier maintenance.',
    img: '/projects/casabooking.webp',
    techStack: [
      'Reactjs',
      'Javascript',
      'Tailwind',
      'Ant Design',
      '.Net Core',
      'SQL',
    ],
    externalLink: 'https://casabooking.comlogikph.com/',
  },
  {
    key: 2,
    subTitle: 'Website Application',
    title: 'Metro Lemery Medical Center',
    description:
      'I developed a website for Metro Lemery Medical Center, featuring an appointment system, online test results, HMO approval system, and patient & doctor portals. I designed and implemented the entire website, handling both front-end and back-end development',
    img: '/projects/mlmc.webp',
    techStack: [
      'Nextjs',
      'Typescript',
      'Tailwind',
      'Ant Design',
      '.Net Core',
      'SQL',
    ],
    externalLink: 'https://new.mlmc.com.ph/',
  },
];

const ProjectList = () => {
  return (
    <div className="grid gap-y-28">
      {projects
        .slice()
        .reverse()
        .map((project, index) => {
          let isEven = index % 2 === 0 ? true : false;
          return (
            <motion.div
              initial={{ opacity: 0, translateY: -30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              key={project.key}
            >
              <div className="md:grid md:grid-cols-12 items-center">
                <div
                  className={`z-10 row-start-1 ${
                    isEven
                      ? ' md:text-end col-end-13 col-start-7'
                      : ' col-end-7 col-start-1'
                  }`}
                >
                  <div>
                    <h6 className="uppercase text-primary text-sm font-medium pb-2 ">
                      {project.subTitle}
                    </h6>
                    <h2 className="font-space_Grotesk text-3xl text-white font-medium">
                      {project.title}
                    </h2>
                  </div>
                  <div
                    className={`my-10 ${
                      isEven
                        ? 'md:bg-gradient-linear-right'
                        : 'md:bg-gradient-linear-left'
                    }`}
                  >
                    <p className="md:p-6 text-left">{project.description}</p>
                  </div>

                  <div className="grid gap-y-5 mb-10">
                    <p className="text-sm ">{project.techStack.join(' - ')}</p>

                    <a
                      href={project.externalLink}
                      target="_blank"
                      className={`md:grid ${
                        isEven ? 'justify-items-end' : 'justify-items-start'
                      }`}
                    >
                      <FiExternalLink className="text-xl" />
                    </a>
                  </div>
                </div>

                <div
                  className={`${
                    isEven
                      ? 'row-start-1 col-end-8 col-start-1'
                      : ' row-start-1 col-end-6 col-start-13'
                  }`}
                >
                  <div className="w-full h-64 md:h-96 bg-primary relative">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'top',
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
    </div>
  );
};

export default function Projects() {
  return (
    <Section>
      <p className="hidden">
        inspired by :{' '}
        <a href="https://v4.brittanychiang.com/">
          Brittany Chiang website portfolio
        </a>
      </p>
      <SectionTitle title="My Projects" />
      <ProjectList />
    </Section>
  );
}
