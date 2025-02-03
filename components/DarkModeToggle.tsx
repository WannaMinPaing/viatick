"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 mr-[20px]  rounded-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white text-gray-800 dark:text-white transition"
    >
      {theme === "dark" ? <FaMoon size={100} className="w-[20px] h-[20px] max-lg:w-[15px] max-lg:h-[15px]  max-sm:w-[10px] max-sm:h-[10px]" /> : <LuSun size={100} className="w-[20px] h-[20px]  max-lg:w-[15px] max-lg:h-[15px] max-sm:w-[10px] max-sm:h-[10px]"/>}
    </button>
  );
}
