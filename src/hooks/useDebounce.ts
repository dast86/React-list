import { useEffect, useState } from "react";
import { Users } from "../interface";

export const useDebounce = (value: string, users:Users[], deplay: number) => {
  const [debounceValue, setDebounceValue] = useState<Users[]>([]);

  
  useEffect(() => {
      const searchFavorites = users.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        ) 

    const debounce = setTimeout(() => {
        setDebounceValue(searchFavorites)
    }, deplay);

    return () => clearTimeout(debounce);
  },[value,users, deplay]);

  return debounceValue
};
