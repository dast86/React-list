import { useEffect, useState } from "react";
import { Users } from "../interface";

export const useDebounce = (value: string, users:Users[], deplay: number) => {
  const [debounceValue, setDebounceValue] = useState<Users[]>([]);
  
  const searchFavorites = users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    ) 
  
  useEffect(() => {
    const debounce = setTimeout(() => {
        setDebounceValue(searchFavorites)
    }, deplay);

    return () => clearInterval(debounce);
  },[value,users, deplay]);

  return debounceValue
};
