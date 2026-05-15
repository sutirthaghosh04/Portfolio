import { HiSun, HiMoon } from 'react-icons/hi';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 dark:text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-50 dark:hover:bg-zinc-800"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <HiSun className="h-4 w-4" /> : <HiMoon className="h-4 w-4" />}
    </button>
  );
}
