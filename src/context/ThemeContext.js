import React, { createContext, useState, useContext, useEffect } from "react";

// 1. Create Context
const ThemeContext = createContext();

// 2. Create Provider Component
export const ThemeProvider = ({ children }) => {
  // Cek localStorage untuk theme yang disimpan
  const getInitialTheme = () => {
    try {
      const savedTheme = localStorage.getItem("app-theme");
      return savedTheme ? savedTheme : "light";
    } catch (error) {
      return "light";
    }
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Function untuk toggle theme
  const toggleTheme = () => {
    console.log("Toggle theme called, current theme:", theme);

    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      console.log("Changing theme to:", newTheme);
      return newTheme;
    });
  };

  // Function untuk set theme langsung
  const setThemeDirect = (newTheme) => {
    console.log("Setting theme to:", newTheme);
    setTheme(newTheme);
  };

  // Simpan theme ke localStorage ketika berubah
  useEffect(() => {
    console.log("Theme changed to:", theme);

    try {
      localStorage.setItem("app-theme", theme);
    } catch (error) {
      console.error("Failed to save theme to localStorage:", error);
    }

    // Terapkan class theme ke body element
    document.body.className = theme;
    document.body.style.backgroundColor =
      theme === "dark" ? "#1a1a1a" : "#ffffff";
    document.body.style.color = theme === "dark" ? "#ffffff" : "#333333";
  }, [theme]);

  // Context value
  const contextValue = {
    theme,
    toggleTheme,
    setTheme: setThemeDirect,
    isDark: theme === "dark",
    isLight: theme === "light",
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`theme-wrapper ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

// 3. Custom Hook untuk menggunakan context
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export default ThemeContext;
