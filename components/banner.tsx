'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
      </motion.div>
    </section>
  );
}
