import React from 'react';
import { ActionButtons } from './ActionButtons';
import { ThemeToggle } from './ThemeToggle';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-700">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <p className="font-bold text-lg tracking-tight hover:text-brand transition-colors">
            HOSSAM
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</a>
          <a href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projects</a>
        </div>

        {/* Right: Actions */}
        <div className="flex-shrink-0 flex items-center gap-3">
          <ThemeToggle />
          <ActionButtons size="sm" hideGitHubOnMobile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
