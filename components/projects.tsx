import { Section, SectionTitle } from '@/app/constant';
import Image from 'next/image';

interface ProjectDataTypes {
  key: number;
  subTitle: string;
  title: string;
  description: string;
  img: string;
  techStack: string[];
}

const projects: ProjectDataTypes[] = [
  {
    key: 1,
    subTitle: 'Website Application',
    title: 'Casa Almarenzo Booking ',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    img: '/projects/casabooking.png',
    techStack: [
      'Reactjs',
      'Javascript',
      'Tailwind',
      'Ant Design',
      '.Net Core',
      'SQL',
    ],
  },
  {
    key: 2,
    subTitle: 'Website Application',
    title: 'Metro Lemery Medical Center',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    img: '/projects/mlmc.png',
    techStack: [
      'Nextjs',
      'Typescript',
      'Tailwind',
      'Ant Design',
      '.Net Core',
      'SQL',
    ],
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
            <div
              className="md:grid md:grid-cols-12 items-center"
              key={project.key}
            >
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
                <p className="text-sm mb-10">{project.techStack.join(' - ')}</p>
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
                    quality={50}
                  />
                </div>
              </div>
            </div>
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
