export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">© {year} Sutirtha Ghosh</p>
        <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}
