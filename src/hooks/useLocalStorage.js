import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const values = window.localStorage.getItem(key);
    return values ? JSON.parse(values) : initialValue;
  });
  const setDarkMode = value => {
    setStoredValue(value);
    console.log(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue];
};
