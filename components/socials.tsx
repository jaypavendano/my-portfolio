'use client';

import { FiGithub } from 'react-icons/fi';
import { CiLinkedin } from 'react-icons/ci';
import { motion } from 'framer-motion';

export default function Socials() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="1350:fixed 1350:bottom-0 z-50"
    >
      <div className="grid gap-10 justify-items-center pl-5">
        <div className="flex items-center gap-x-3 justify-center pb-10 1350:grid 1350:gap-y-5 1350:justify-items-center 1350:p-0">
          <a href="https://github.com/jaypavendano" target="_blank">
            <CiLinkedin className="text-3xl text-neutral_white hover:text-primary transition ease-in-out delay-100" />
          </a>
          <a
            href="https://www.linkedin.com/in/jaypee-avenda%C3%B1o-17896b215/"
            target="_blank"
          >
            <FiGithub className="text-2xl text-neutral_white hover:text-primary transition ease-in-out delay-100" />
          </a>
        </div>
        <div className="h-32 w-[.5px] bg-neutral_white hidden 1350:block" />
      </div>
    </motion.div>
  );
}
