import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { useDrink } from "../contexts/DrinkContext";
import FavButton from "../components/FavButton";
import Modal from "../components/Modal";

export default function Favorites() {
  const { favorites } = useDrink();

  return (
    <>
      <Heading>Favorites</Heading>
      {favorites.length > 0 ? (
        <>
          <div className="favorites__grid">
            {favorites.map((fav) => (
              <Link
                key={fav.id}
                className="favorites__item"
                to={`/favorites/${fav.id}`}
              >
                <div className="favorites__img-box">
                  <img width={200} src={fav.imgUrl} alt={fav.name} />
                  <FavButton drink={fav} />
                </div>
                <h3 className="favorites__drink-name">{fav.name}</h3>
              </Link>
            ))}
          </div>
          <Modal />
        </>
      ) : (
        <p>There are no favorites yet.</p>
      )}
    </>
  );
}
