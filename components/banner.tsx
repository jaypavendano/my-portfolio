'use client';

import { motion } from 'framer-motion';
import { TiBusinessCard } from 'react-icons/ti';

export default function Banner() {
  return (
    <section className="bg-ellipse bg-no-repeat bg-center bg-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="container min-h-screen grid items-center content-center max-w-3xl gap-y-8"
      >
        <div>
          <h3 className="text-2xl text-white">hey there 👋, my name is</h3>
          <h1 className="font-space_Grotesk text-primary text-7xl font-bold mt-5 tracking-wide">
            Jaypee Avendaño
          </h1>
        </div>
        <p className="text-lg">
          I&apos;m a web developer committed to crafting seamless user
          experiences and adept at creating API-driven products.
        </p>
        <div>
          <a
            href="https://drive.google.com/file/d/1kP2Ij5DyEY5ARgKVZy1u5_0O3j-74ove/view?usp=sharing"
            target="_blank"
            className="group relative inline-flex items-center justify-center overflow-hidden border-2 border-primary p-3 px-4 py-2 font-medium text-indigo-600 shadow-md transition duration-300 ease-out hover:shadow-inner hover:shadow-primary"
          >
            <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-primary text-white duration-300 group-hover:translate-x-0">
              <TiBusinessCard className="font-extrabold text-2xl" />
            </span>
            <span className="text-sm ease absolute flex h-full w-full transform items-center justify-center text-primary transition-all duration-300 group-hover:translate-x-full">
              See Resume
            </span>
            <span className="text-sm invisible relative">See Resume</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
