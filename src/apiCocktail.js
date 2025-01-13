const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export const fetchDrink = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch");
  const data = await res.json();
  const drink = data.drinks.at(0);
  return {
    id: drink.idDrink,
    name: drink.strDrink,
    imgUrl: drink.strDrinkThumb,
    instruction: drink.strInstructions,
  };
};
