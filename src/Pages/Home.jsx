import Heading from "../components/Heading";
import Button from "../components/Button";
import Loader from "../components/Loader";
import styles from "./Home.module.css";

export default function Home({ drink, status, isFavorite, dispatch }) {
  const hasDrink = drink !== null;

  const handleFavs = () => {
    if (isFavorite) dispatch({ type: "removeFavs", payload: drink.id });
    else dispatch({ type: "addFavs", payload: drink });
  };

  return (
    <section className={styles.container}>
      {status === "loading" && <Loader />}
      {status === "error" && <p>Failed to fetch drink data.</p>}
      {status === "idle" && (
        <>
          {hasDrink && (
            <>
              <Heading>Today&apos;s Recommendation</Heading>
              <div className={styles.boxes}>
                <img
                  width={300}
                  height={300}
                  className={styles.box}
                  src={drink.imgUrl}
                  alt={drink.name}
                />
                <div className={styles.box}>
                  <div className={styles.favContainer}>
                    <h3 className={styles.drinkName}>{drink.name}</h3>
                    <button
                      className={`${styles.fav} ${
                        isFavorite && styles.favActive
                      }`}
                      onClick={handleFavs}
                    >
                      ★
                    </button>
                  </div>
                  <hr className={styles.rule} />
                  <p>{drink.instruction}</p>
                </div>
              </div>
            </>
          )}
          <div className={!hasDrink && styles.welcome}>
            <Button
              type="primary"
              onClick={() => dispatch({ type: "fetchStart" })}
            >
              {hasDrink ? "Retry" : "Get Today's Cocktail"}
            </Button>
          </div>
        </>
      )}
    </section>
  );
}
