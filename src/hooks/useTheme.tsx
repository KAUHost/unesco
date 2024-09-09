import { useState, useEffect } from 'react';

function useTheme() {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light')); 
  };

  return { theme, toggleTheme }; // Повертаємо об'єкт, а не масив
}

export default useTheme;
