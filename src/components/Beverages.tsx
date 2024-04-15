import { useEffect, useState } from "react";
import { drinks } from "./Types";
import "../CSS/Beverages.css";

const BeveragesPage = ({ selectedSide }: { selectedSide: string }) => {
  const [drinkSuggestions, setDrinkSuggestions] = useState<drinks[]>([]);

  useEffect(() => {
    const fetchDrinkSuggestions = async () => {
      try {
        let urls: string[] = [];
        switch (selectedSide) {
          case "Pommes Frites":
            urls = [
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11009",
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11008",
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007",
            ];
            break;
          case "Bearnaisesås":
            urls = [
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11006",
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11005",
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11004",
            ];
            break;
          case "Hummus":
            urls = [
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11003",
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11002",
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001",
            ];
            break;
          default:
            throw new Error("Invalid side selected");
        }

        const promises = urls.map(url => fetch(url));
        const responses = await Promise.all(promises);
        const data = await Promise.all(responses.map(res => res.json()));
        const drinksData: drinks[] = data.flatMap(item => item.drinks.slice(0, 1)); 
        setDrinkSuggestions(drinksData);
      } catch (error) {
        console.error("Error fetching drink suggestions:", error);
      }
    };

    fetchDrinkSuggestions();
  }, [selectedSide]);

  const handleAddToCart = (drink: string) => {
    console.log(`Added ${drink} to cart`);
  };

  return (
    <div>
      <h2>Drink Suggestions for {selectedSide}</h2>
      <ul className="drink-list">
        {drinkSuggestions.map((drink, index) => (
          <li key={index} className="drink-item">
            <div className="drink-info">
              <img
                src={drink.strDrinkThumb}
                alt="Drink"
                className="drink-image"
              />
              <h2 className="drink-name">{drink.strDrink}</h2>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(drink.idDrink)}
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BeveragesPage;
