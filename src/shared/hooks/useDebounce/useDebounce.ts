import { useEffect, useState } from "react";

export const useDebounce = (value: string, deplay: number) => {
  const [debounceValue, setDebounceValue] = useState('');

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebounceValue(value);
    }, deplay);

    return () => clearTimeout(debounce);
  }, [value, deplay]);

  return debounceValue;
};
