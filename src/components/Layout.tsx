import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header, InstructionsModal } from '@/features/pdf-editor';
import { useTheme } from '@/components/theme-provider';
import { useInstructions, useSidebar } from '@/store';

export const Layout: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { showInstructions, hideInstructions, isOpen: isInstructionsOpen } = useInstructions();
  const { toggleSidebar } = useSidebar();

  return (
    <div className="min-h-screen font-sans antialiased bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 flex flex-col transition-colors duration-300 selection:bg-brand-500/20 selection:text-brand-900 dark:selection:text-brand-100">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onShowInstructions={showInstructions}
        onToggleSidebar={toggleSidebar}
      />
      <Outlet />
      <ScrollRestoration />
      <InstructionsModal isOpen={isInstructionsOpen} onClose={hideInstructions} />
    </div>
  );
};
