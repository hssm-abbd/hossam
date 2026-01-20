
import React from 'react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'UCN-WIKI',
    description: 'A repository of courses and exams for CS students.',
    githubUrl: 'https://github.com/hssm-abbd/UCN-WIKI',
    liveUrl: 'https://ucn-wiki.pages.dev',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: '2',
    title: 'Voice Pathology Detection Using Machine Learning',
    description: 'A machine learning project for voice pathology detection using the Saarbruecken Voice Database.',
    githubUrl: 'https://github.com',
    technologies: ['Python', 'TensorFlow', 'Numpy', 'Pandas']
  },
  {
    id: '3',
    title: 'E-Commerce Website',
    description: 'An E-Commerce website built with PHP, featuring a modern design.',
    githubUrl: 'https://github.com',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap']
  },
  {
    id: '4',
    title: 'Examec',
    description: 'AI powered exam generation for algerian teachers.',
    githubUrl: 'https://github.com',
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind']
  }
];

export const PERSONAL_INFO = {
  name: 'ABBAD Hossam',
  role: 'AI Student & Web Developer',
  email: 'abbdmail@gmail.com',
  github: 'https://github.com/hssm-abbd',
};
