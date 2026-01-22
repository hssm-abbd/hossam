import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { TechIcon } from './TechIcon';

interface ActionButtonsProps {
    size?: 'sm' | 'lg';
    hideGitHubOnMobile?: boolean;
}

export const GitHubButton: React.FC<{ size?: 'sm' | 'lg'; hideOnMobile?: boolean }> = ({ size = 'lg', hideOnMobile = false }) => {
    const sizeClasses = size === 'sm'
        ? 'px-4 py-2 text-sm'
        : 'px-6 py-3';
    const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
    const mobileClass = hideOnMobile ? 'hidden md:inline-flex' : 'inline-flex';

    return (
        <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${mobileClass} items-center gap-2 ${sizeClasses} bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-transform`}
        >
            <TechIcon name="Github" className={`${iconSize} [&_*]:fill-white dark:[&_*]:fill-zinc-900`} />
            GitHub
        </a>
    );
};

export const PortfolioButton: React.FC<{ size?: 'sm' | 'lg' }> = ({ size = 'lg' }) => {
    const sizeClasses = size === 'sm'
        ? 'px-4 py-2 text-sm'
        : 'px-6 py-3';
    const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <a
            href="/portfolio.pdf"
            download="portfolio.pdf"
            className={`inline-flex items-center gap-2 ${sizeClasses} bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-transform`}
        >
            <svg
                className={iconSize}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Portfolio
        </a>
    );
};

export const ActionButtons: React.FC<ActionButtonsProps> = ({ size = 'lg', hideGitHubOnMobile = false }) => {
    return (
        <>
            <GitHubButton size={size} hideOnMobile={hideGitHubOnMobile} />
            <PortfolioButton size={size} />
        </>
    );
};
