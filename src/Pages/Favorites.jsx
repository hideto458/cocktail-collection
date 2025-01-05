import { Link, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import styles from "./Favorites.module.css";

export default function Favorites({ favorites, dispatch }) {
  const { id } = useParams();
  const isModalOpen = Boolean(id);

  return (
    <section className={`${styles.container}`}>
      <Heading>Favorites</Heading>
      <div className={styles.gridContainer}>
        {favorites.map((fav) => (
          <Link
            key={fav.id}
            className={styles.gridItem}
            to={`/favorites/${fav.id}`}
          >
            <img
              width={200}
              height={200}
              className={styles.img}
              src={fav.imgUrl}
              alt={fav.name}
            />
            <h3 className={styles.drinkName}>{fav.name}</h3>
          </Link>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}></div>
        </div>
      )}
    </section>
  );
}
