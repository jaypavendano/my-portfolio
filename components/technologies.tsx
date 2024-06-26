'use client';

import { Section, SectionTitle } from '@/app/constant';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

interface TechDataTypes {
  key: number;
  img: string;
  name: string;
  width: number;
  height: number;
}

const techData: TechDataTypes[] = [
  {
    key: 1,
    img: '/tech/js.svg',
    name: 'Javascript',
    width: 39.57,
    height: 39.57,
  },
  {
    key: 2,
    img: '/tech/ts.svg',
    name: 'Typescript',
    width: 51.94,
    height: 51.94,
  },
  {
    key: 3,
    img: '/tech/reactjs.svg',
    name: 'Reactjs',
    width: 45.76,
    height: 45.76,
  },
  {
    key: 4,
    img: '/tech/nextjs.svg',
    name: 'Nextjs',
    width: 43.28,
    height: 43.28,
  },
  {
    key: 5,
    img: '/tech/tailwindcss.svg',
    name: 'TailwindCss',
    width: 51.94,
    height: 30.92,
  },
  {
    key: 6,
    img: '/tech/mssql.svg',
    name: 'Microsoft SQL Server',
    width: 51.94,
    height: 51.94,
  },
  {
    key: 7,
    img: '/tech/dotnetcore.svg',
    name: '.Net Core',
    width: 69.25,
    height: 69.25,
  },
];

const TechnologyList = () => (
  <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 relative">
    {techData.map((item, index) => (
      <motion.div
        key={item.key}
        viewport={{ once: true }}
        initial={{ translateX: -32, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1.8, delay: index * 0.2, bounce: 0 }}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>
    ))}
  </div>
);

const Span = ({ name }: { name: string }) => (
  <span className="text-white font-space_Grotesk font-medium"> {name}</span>
);
export default function Technologies() {
  return (
    <Section>
      <SectionTitle title="Technologies I mainly use" />
      <TechnologyList />
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, bounce: 0 }}
      >
        <p className="text-center mt-10">
          Other technologies I used are <Span name="React Native" />,
          <Span name="Nodejs" />,
          <Span name="Express" />,<Span name="Git" />, <Span name="Postman" />{' '}
          and <Span name="Figma" />.
        </p>
      </motion.div>
    </Section>
  );
}
