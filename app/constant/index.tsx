'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export const Section = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: string;
}) => {
  return <section className={`container py-28 ${styles}`}>{children}</section>;
};

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      <h3 className="text-white text-4xl text-center font-space_Grotesk font-medium mb-20">
        {title}
      </h3>
    </motion.div>
  );
};
