import { useDrink } from "../contexts/DrinkContext";

export default function FavButton({ drink }) {
  const { favorites, setFavorites } = useDrink();

  const isFavorite = favorites.map((fav) => fav.id).includes(drink.id);

  const handleFavs = (e) => {
    e.preventDefault();
    setFavorites(
      isFavorite
        ? favorites.filter((fav) => fav.id !== drink.id)
        : [...favorites, drink]
    );
  };

  return (
    <button
      className={`home__fav ${isFavorite ? "home__fav--active" : ""}`}
      onClick={handleFavs}
    >
      ★
    </button>
  );
}
