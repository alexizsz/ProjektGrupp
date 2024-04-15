// FoodPage.tsx
import { useState, useEffect, useRef } from "react";
import "../CSS/FoodPage.css";
import { Link } from "react-router-dom";
import SidesPage from "../components/Sides";
import BeveragesPage from "../components/Beverages";

interface Recipe {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  timeInMins: number;
  price: number;
  instructions: string[];
  categories: string[];
}

interface CartItem {
  recipe: Recipe;
  quantity: number;
}

const FoodPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showSides, setShowSides] = useState(false);
  const sidesRef = useRef<HTMLDivElement>(null);

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
      const data: Recipe[] = await response.json();
      const mainRecipes = data.filter((recipe) =>
        recipe.categories.includes("main")
      );
      setRecipes(mainRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const addToCart = (recipeId: string) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.recipe._id === recipeId
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const recipeToAdd = recipes.find((recipe) => recipe._id === recipeId);
      if (recipeToAdd) {
        setCart([...cart, { recipe: recipeToAdd, quantity: 1 }]);
      }
    }
  };

  const removeFromCart = (recipeId: string) => {
    const updatedCart = cart
      .map((item) => {
        if (item.recipe._id === recipeId) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const handlePayment = () => {
    alert("Payment Successful!");
  };

  const handleOnClick = (recipeId: string) => {
    return <Link to={`/FoodDetails/${recipeId}`}>Details</Link>;
  };

  const toggleSides = () => {
    setShowSides((prev) => !prev);
  };

  const addToCartFromSides = (recipe: Recipe) => {
    setCart([...cart, { recipe, quantity: 1 }]);
  };

  useEffect(() => {
    if (showSides) {
      setTimeout(() => {
        sidesRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [showSides]);

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
                  {recipe.instructions.map((instruction, index) => (
                    <div key={index}>{instruction}</div>
                  ))}
                </div>
                <div className="recipe-buttons">
                  <button onClick={() => addToCart(recipe._id)}>
                    Add to Cart
                  </button>
                  <button onClick={() => removeFromCart(recipe._id)}>
                    Remove from Cart
                  </button>
                  <button>{handleOnClick(recipe._id)}</button>
                  <button onClick={toggleSides}>
                    {showSides ? "Hide Sides" : "Show Sides"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showSides && (
        <div ref={sidesRef} className="sides-container">
          <h2>Sides</h2>
          <SidesPage addToCart={addToCartFromSides} />
        </div>
      )}
      {showSides && (
        <div className="sides-container">
          <BeveragesPage addToCart={addToCartFromSides} />{" "}
        </div>
      )}
      <div className="cart-container">
        <h2>Cart</h2>
        {cart.map((item) => (
          <div key={item.recipe._id} className="cart-item">
            <div className="cart-item-details">
              <img src={item.recipe.imageUrl} alt={item.recipe.title} />
              <div>
                <p>{item.recipe.title}</p>
                <p>Price: {item.recipe.price} SEK</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.recipe._id)}>
              Remove
            </button>
          </div>
        ))}
        <p className="total-price">
          Total Price:{" "}
          {cart.reduce(
            (acc, item) => acc + item.recipe.price * item.quantity,
            0
          )}{" "}
          SEK
        </p>
        <button className="payment-button" onClick={handlePayment}>
          PAY
        </button>
      </div>
    </div>
  );
};

export default FoodPage;
