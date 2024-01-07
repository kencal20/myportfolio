import React, { useState, createContext } from 'react';
import Router from './components/Router/router';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export const ThemeContext = createContext(null)

export default function App() {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Router />
      </div>
    </ThemeContext.Provider >
  );
};
