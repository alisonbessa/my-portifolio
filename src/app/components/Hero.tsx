'use client';
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
              className="rounded-full shadow-lg object-cover w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-60 transition-all duration-700 ease-out"
              onError={() => setImgExists(false)}
              priority
              loading="eager"
              quality={85}
            />
          </div>
        )}
        <div className="flex flex-col items-center md:items-start w-full max-w-2xl gap-2 sm:gap-4">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight transition-all duration-700 ease-out">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl transition-all duration-700 ease-out">
            {subtitle}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl transition-all duration-700 ease-out">
            {description}
          </p>
        </div>
      </div>

      {resumeLink ? (
        <div className="w-full flex justify-center mt-6 transition-all duration-700 ease-out">
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
        </div>
      ) : null}
    </section>
  );
}
