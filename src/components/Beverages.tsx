import { useEffect, useState } from "react";
import { drinks } from "./Types";
import "../CSS/Beverages.css";

const BeveragesPage = ({ selectedSide }: { selectedSide: string }) => {
  const [drinkSuggestions, setDrinkSuggestions] = useState<drinks[]>([]);

  useEffect(() => {
    const fetchDrinkSuggestions = async () => {
      try {
        let response;
        switch (selectedSide) {
          case "Pommes Frites":
            response = await fetch(
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11009"
            );
            break;
          case "Bearnaisesås":
            response = await fetch(
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11006"
            );
            break;
          case "Hummus":
            response = await fetch(
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11003"
            );
            break;
          default:
            throw new Error("Invalid side selected");
        }
        if (!response.ok) {
          throw new Error("Failed to fetch drink suggestions");
        }

        const data = await response.json();
        const drinksData: drinks[] = data.drinks;
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