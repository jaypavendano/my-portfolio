'use client';

import { Section, SectionTitle } from '@/app/constant';
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function Contact() {
  let inInNeedOfJob = true;

  let message = inInNeedOfJob ? (
    <>
    I&apos;m
    <span className=" text-primary">
      {' '}
      actively seeking new opportunities,{' '}
    </span>
    and my inbox is always open. Whether you have a question or just want to
    say hi, I&apos;ll try my best to get back to you!
  </>
  ) : (
    <>
     I&apos;m{' '}
    <span className=" text-primary">
      not currently seeking new opportunities at the moment
    </span>
    , but my inbox is always open. Whether you have a question or just want to
    say hi, I&apos;ll try my best to get back to you!
  </>
  );
  return (
    <Section styles="bg-ellipse bg-no-repeat bg-center bg-auto">
      <div className="min-h-screen grid items-center content-center justify-center">
        <SectionTitle title="Get in Touch" />

        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="max-w-[750px] text-center text-xl mb-14">{message}</p>

          <div className="grid justify-center">
            <a
              href="mailto:jaypavendano@gmail.com"
              className="group relative inline-flex items-center justify-center overflow-hidden border-2 border-primary p-4 px-6 py-3 font-medium text-indigo-600 shadow-md transition duration-300 ease-out hover:border-4 hover:border-double"
            >
              <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-primary text-white duration-300 group-hover:translate-x-0">
                <HiOutlineMail className="font-extrabold text-2xl" />
              </span>
              <span className="ease absolute flex h-full w-full transform items-center justify-center text-primary transition-all duration-300 group-hover:translate-x-full">
                Send an email
              </span>
              <span className="invisible relative">Send an email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
