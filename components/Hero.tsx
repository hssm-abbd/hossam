import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ActionButtons } from './ActionButtons';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full bg-zinc-200 overflow-hidden flex-shrink-0 ring-[5px] ring-brand ring-offset-[5px] ring-offset-zinc-50 dark:ring-offset-zinc-900 shadow-xl">
          <img
            src="/profile.webp"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-lg md:text-xl font-medium text-brand mb-6">
            {PERSONAL_INFO.role}
          </p>
          <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed mb-8 max-w-lg">
            I'm an AI student with a deep interest in utilizing ML/DL for healthcare.
            I focus on building tools that solve real clinical problems. I also build
            AI-powered web applications using Next.js.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <ActionButtons size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
