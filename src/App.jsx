import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useReducer } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Drink from "./Pages/Drink";

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const initialState = {
  // 'idle', 'loading', 'error'
  status: "idle",
  drink: null,
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetchStart":
      return { ...state, status: "loading" };
    case "dataReceived":
      return { ...state, status: "idle", drink: action.payload };
    case "error":
      return { ...state, status: "error" };
    case "addFavs":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "removeFavs":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };
    default:
      return state;
  }
};

export default function App() {
  const [{ status, drink, favorites }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const isFavorite = drink && favorites.map((fav) => fav.id).includes(drink.id);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (status !== "loading") return;

    const fetchDrink = async () => {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();

      return data.drinks.at(0);
    };

    // eslint-disable-next-line no-unused-vars
    const wait2Secs = new Promise((res, _) => {
      setTimeout(() => res(), 2000);
    });

    const fetchDrinkDelay = async () => {
      try {
        const res = await Promise.all([fetchDrink(), wait2Secs]);
        console.log(res);
        const drink = res.at(0);

        dispatch({
          type: "dataReceived",
          payload: {
            id: drink.idDrink,
            name: drink.strDrink,
            imgUrl: drink.strDrinkThumb,
            instruction: drink.strInstructions,
          },
        });
      } catch (error) {
        console.error(error);
        dispatch({ type: "error" });
      }
    };

    fetchDrinkDelay();
  }, [status]);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            index
            element={
              <Home
                drink={drink}
                status={status}
                isFavorite={isFavorite}
                dispatch={dispatch}
              />
            }
          />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} dispatch={dispatch} />}
          />
          <Route path="/drink/:id" element={<Drink />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
