import { useParams } from "react-router-dom";
import Heading from "../components/Heading";
import styles from "./Home.module.css";

export default function Drink({ favorites, dispatch }) {
  const { id } = useParams();
  const drink = favorites.find((fav) => fav.id === id);

  return (
    <section className={styles.container}>
      <Heading>{drink.name}</Heading>
      <div className={styles.boxes}>
        <img
          width={300}
          className={styles.box}
          src={drink.imgUrl}
          alt={drink.name}
        />
        <div className={styles.box}>
          <div className={styles.favContainer}>
            <h3 className={styles.drinkName}>{drink.name}</h3>
            {/* <button
              className={`${styles.fav} ${isFavorite && styles.favActive}`}
              onClick={handleFavs}
            >
              ★
            </button> */}
          </div>
          <hr className={styles.rule} />
          <p>{drink.instruction}</p>
        </div>
      </div>
    </section>
  );
}
