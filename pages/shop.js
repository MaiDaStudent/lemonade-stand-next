import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function Shop() {
  const [drinks, setDrinks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon")
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data.drinks || []);
      });
  }, []);

  const handleAddToCart = (drink) => {
    dispatch(addToCart(drink));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Citron Drinks 🍋</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {drinks.map((drink) => (
          <div key={drink.idDrink} style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} style={{ width: "100%" }} />
            <h2>{drink.strDrink}</h2>
            <button onClick={() => handleAddToCart(drink)}>
              Tilføj til kurv
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}