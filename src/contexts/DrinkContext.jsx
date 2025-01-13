import { createContext, useContext, useState } from "react";
import { useLocalStrage } from "../hooks/useLocalStrage";

const DrinkContext = createContext();

function DrinkProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentDrink, setCurrentDrink] = useState(null);
  const [favorites, setFavorites] = useLocalStrage([], "favorites");

  return (
    <DrinkContext.Provider
      value={{
        isLoading,
        setIsLoading,
        currentDrink,
        setCurrentDrink,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
}

function useDrink() {
  const context = useContext(DrinkContext);
  if (context === undefined)
    throw new Error("DrinkContext was used outside of the PostProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { DrinkProvider, useDrink };
