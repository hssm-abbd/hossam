
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <footer className="py-10 text-center text-xs text-zinc-400 dark:text-zinc-500 border-t border-zinc-100 dark:border-zinc-700">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}.</p>
      </footer>
    </div>
  );
};

export default App;
