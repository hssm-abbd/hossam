
import React from 'react';
import { TechIcon, AVAILABLE_ICONS } from './TechIcon';

const Skills: React.FC = () => {


  return (
    <section id="skills" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-12 text-center">Skills</h2>

        <div className="space-y-12">
          {/* AI/ML Section */}
          <div>
            <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 border-l-4 border-brand pl-4">AI / ML</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {AVAILABLE_ICONS.filter(tech => ['Python', 'TensorFlow', 'Numpy', 'Pandas'].includes(tech)).map((tech) => (
                <div key={tech} className="flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <TechIcon name={tech} className="w-full h-full" />
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium text-sm text-center">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Web Dev Section */}
          <div>
            <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 border-l-4 border-brand pl-4">Web Dev</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {AVAILABLE_ICONS.filter(tech => ['Git', 'Github', 'npm', 'JavaScript', 'TypeScript', 'Tailwind', 'React', 'Next.js'].includes(tech)).map((tech) => (
                <div key={tech} className="flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <TechIcon name={tech} className="w-full h-full" />
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium text-sm text-center">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
