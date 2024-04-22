import { useState } from "react";

const useLocalStorage = (key, defaultValue = null) => {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    if (saved == null) {
      return JSON.parse(saved);
    }
    return defaultValue;
  });

  const setItem = (newValue) => {
    const serializedValue = JSON.stringify(newValue);
    localStorage.setItem(key, serializedValue);
    setValue(serializedValue);
  };

  // useEffect(() => {
  //   setItem((prevValue) => prevValue);
  // }, [value, setValue]);

  return [value, setItem];
};

// src/hooks/useLocalStorage.js
// const useLocalStorage = (key, initialValue) => {
//   const [value, setValue] = useState(() => {
//     const storedValue = localStorage.getItem(key);
//     return storedValue ? JSON.parse(storedValue) : initialValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// };

export default useLocalStorage;
