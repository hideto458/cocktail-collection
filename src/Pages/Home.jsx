import Heading from "../components/Heading";
import Button from "../components/Button";
import Loader from "../components/Loader";
import { useDrink } from "../contexts/DrinkContext";
import { fetchDrink } from "../apiCocktail";
import FavButton from "../components/FavButton";
import { useRef } from "react";

export default function Home() {
  const { isLoading, setIsLoading, currentDrink, setCurrentDrink } = useDrink();
  const timeoutRef = useRef(null);

  const hasDrink = !!currentDrink;

  const handleGetDrink = async () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const timeoutPromise = new Promise((res) => {
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        res();
      }, 2000);
    });
    setIsLoading(true);

    const res = await Promise.all([fetchDrink(), timeoutPromise]);
    const drink = res.at(0);
    setCurrentDrink(drink);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {hasDrink && (
            <>
              <Heading>Today&apos;s Recommendation</Heading>
              <div className="home__boxes">
                <img
                  width={300}
                  className="home__box"
                  src={currentDrink.imgUrl}
                  alt={currentDrink.name}
                />
                <div className="home__box">
                  <div className="home__fav-container">
                    <h3 className="home__drink-name">{currentDrink.name}</h3>
                    <FavButton drink={currentDrink} />
                  </div>
                  <hr className="home__rule" />
                  <p>{currentDrink.instruction}</p>
                </div>
              </div>
            </>
          )}
          <div className={!hasDrink ? "home__welcome" : undefined}>
            <Button type="primary" onClick={handleGetDrink}>
              {hasDrink ? "Retry" : "Get Today's Cocktail"}
            </Button>
          </div>
        </>
      )}
    </>
  );
}
