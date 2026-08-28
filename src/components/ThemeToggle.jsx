import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

/**
 * ThemeToggle Component
 * Toggles dark mode on the HTML element and persists state in localStorage.
 *
 * @param {Object} props
 * @param {string} [props.ariaLabel="Toggle theme"]
 * @param {string} [props.lightLabel="Light Mode"]
 * @param {string} [props.darkLabel="Dark Mode"]
 */
export default function ThemeToggle({
  ariaLabel = 'Toggle theme',
  lightLabel = 'Light Mode',
  darkLabel = 'Dark Mode',
}) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Sync initial state with document element
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch (e) {
        console.warn('localStorage not accessible:', e);
      }
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('theme', 'light');
      } catch (e) {
        console.warn('localStorage not accessible:', e);
      }
    }
  };

  // Prevent layout jump while hydrating
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label={ariaLabel}
        className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      >
        <span className="w-5 h-5 block" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={ariaLabel}
      title={isDark ? lightLabel : darkLabel}
      className="group relative p-1.5 sm:p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-xs active:scale-95"
    >
      {isDark ? (
        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-300 transition-transform duration-300 group-hover:-rotate-12" />
      )}
      <span className="sr-only">{isDark ? lightLabel : darkLabel}</span>
    </button>
  );
}
