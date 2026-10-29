import { useEffect, useState } from "react";
// Step 1: a custom hook. Same shape as useState, but the value survives a page refresh.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
    } catch {
      return saved !== null ? JSON.parse(saved) : initialValue;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      //storage full
    }
  }, [key, value]);
  return [value, setValue];
}
export default useLocalStorage;
