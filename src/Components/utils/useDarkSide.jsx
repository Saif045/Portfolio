import React, { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function useDarkSide() {
  const [isDarkTheme, setDarkTheme] = useLocalStorage("dark", true);

  const toggleTheme = () => {
    setDarkTheme((prevValue) => !prevValue);
  };

  const colorTheme = isDarkTheme ? "light" : "dark";
  const otherTheme = isDarkTheme ? "dark" : "light";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(otherTheme);
  }, [isDarkTheme, colorTheme]);

  return [isDarkTheme, toggleTheme];
}
