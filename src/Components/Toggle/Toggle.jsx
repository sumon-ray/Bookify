import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensuring the component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering during SSR

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg p-2 transition-colors duration-500"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default Toggle;
