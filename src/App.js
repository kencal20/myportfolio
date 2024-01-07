import React, { useState, createContext, useEffect } from 'react';
import Router from './components/Router/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const ThemeContext = createContext(null);

export default function App() {
  // Retrieve the theme from localStorage or use 'dark' as the default
  const storedTheme = localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Save the new theme to localStorage
    localStorage.setItem('theme', newTheme);
  };

  // Use useEffect to set the theme class on initial render
  useEffect(() => {
    document.getElementById('root').className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Router />
      </div>
    </ThemeContext.Provider>
  );
}
