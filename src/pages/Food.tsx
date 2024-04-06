import { useState, useEffect } from "react";
import "../CSS/FoodPage.css";

const FoodPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        "https://sti-java-grupp8-ctcktc.reky.se/recipes"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div>
      <h1>Recipes</h1>
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="recipe-card">
            <h2>{recipe.title}</h2>
            <div className="recipe-info">
              <div className="recipe-image">
                <img src={recipe.imageUrl} alt="img" />
              </div>
              <div className="recipe-details">
                <p>Description: {recipe.description}</p>
                <p>Time: {recipe.timeInMins} mins</p>
                <p>Price: {recipe.price} SEK</p>
                <div>
                  <h4>Instructions:</h4>
                  {recipe.instructions.map((instruction) => (
                    <div key={instruction}>{instruction}</div>
                  ))}
                </div>
                <div className="recipe-buttons">
                  <button>Add to Cart</button>
                  <button>Remove from Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;
