
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-zinc-200 overflow-hidden flex-shrink-0 ring-4 ring-zinc-100 shadow-xl">
          <img
            src="/img/profile.webp"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-2">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-lg md:text-xl font-medium text-brand mb-6">
            {PERSONAL_INFO.role}
          </p>
          <p className="text-zinc-600 leading-relaxed mb-8 max-w-lg">
            I'm an AI student with a deep interest in utilizing ML/DL for healthcare.
            I focus on building tools that solve real clinical problems. I also like to build
            AI-powered web applications using Next.js.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View GitHub Profile
            </a>
            <a
              href="/portfolio.pdf"
              download="portfolio.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
