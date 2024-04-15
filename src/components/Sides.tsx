import { useEffect, useState } from "react";
import { Recipe } from "./Types";
import "../CSS/Sides.css";
import BeveragesPage from "./Beverages";

interface Props {
  addToCart: (recipe: Recipe) => void;
}

const SidesPage = ({ addToCart }: Props) => {
  const [sides, setSides] = useState<Recipe[]>([]);
  const [showDrinksPopup, setShowDrinksPopup] = useState(false);
  const [selectedSide, setSelectedSide] = useState<string | null>(null);

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

  const handleOpenDrinksPopup = (side: Recipe) => {
    setSelectedSide(side.title);
    setShowDrinksPopup(true);
  };

  const handleCloseDrinksPopup = () => {
    setShowDrinksPopup(false);
  };

  const handleAddToCart = (side: Recipe) => {
    addToCart(side);
    handleOpenDrinksPopup(side);
  };

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
              className="recipe-button"
              onClick={() => handleAddToCart(side)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {showDrinksPopup && (
        <div className="popup-container">
          <div className="popup">
            <h2>Drink Suggestions</h2>
            <BeveragesPage selectedSide={selectedSide || ""} />
            <button onClick={handleCloseDrinksPopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidesPage;