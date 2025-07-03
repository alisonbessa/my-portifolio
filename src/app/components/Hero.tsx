'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  resumeLink?: string;
}

export function Hero({ title, subtitle, description, resumeLink }: HeroProps) {
  const [imgExists, setImgExists] = useState(true);

  return (
    <section className="flex flex-1 flex-col items-center text-center md:text-left gap-8 pt-8 sm:pt-12">
      <div className="w-full flex flex-1 flex-col md:flex-row items-center justify-center md:pb-20 gap-6">
        {imgExists && (
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
            <Image
              src="/profile.png"
              alt="Profile picture"
              width={180}
              height={270}
              className="rounded-full shadow-lg object-cover w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-60"
              onError={() => setImgExists(false)}
              priority
            />
          </div>
        )}
        <div className="flex flex-col items-center md:items-start w-full max-w-2xl gap-2 sm:gap-4">
          <motion.h1
            className="text-4xl sm:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            {subtitle}
          </motion.p>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            {description}
          </motion.p>
        </div>
      </div>

      {resumeLink ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          className="w-full flex justify-center mt-6"
        >
          <span className="text-base sm:text-lg text-muted-foreground">
            Browse my projects, experience, and story using the menu or{' '}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              download my resume
            </a>
            .
          </span>
        </motion.div>
      ) : null}
    </section>
  );
}
