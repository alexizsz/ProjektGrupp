// SidesPage.tsx
import { useEffect, useState } from "react";
import { Recipe } from "./Types";
import "../CSS/Sides.css";

interface Props {
  addToCart: (recipe: Recipe) => void;
}

const SidesPage = ({ addToCart }: Props) => {
  const [sides, setSides] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchSides = async () => {
      try {
        const response = await fetch(
          "https://sti-java-grupp8-ctcktc.reky.se/categories/side/recipes"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data: Recipe[] = await response.json();
        setSides(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchSides();
  }, []);

  return (
    <div>
      <h1>Sides</h1>
      <div className="recipe-container">
        {sides.map((side, index) => (
          <div className="side-recipe" key={index}>
            <h2 className="side-title">{side.title}</h2>
            <div className="side-image-container">
              <img
                className="side-image"
                src={side.imageUrl}
                alt="sidesImage"
              />
            </div>
            <p className="side-description">Description: {side.description}</p>
            <div className="side-instructions">
              {side.instructions.map((instruction, index) => (
                <div key={index}>{instruction}</div>
              ))}
            </div>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(side)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidesPage;
