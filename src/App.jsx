import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoods from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodId) => {
    console.log("delete this food", foodId);
    const filteredFoods = foods.filter((filterFood) => {
      if (filterFood.id !== foodId) {
        return filterFood;
      }
    });
    console.log("filtered foods", filteredFoods);
    setFoods(filteredFoods);
  };

  return (
    <div className="App">
      <h1> React IronNutrition</h1>
      <AddFoods foods={foods} setFoods={setFoods} />
      {foods.map((oneFood) => {
        return (
          <>
            <h3>{oneFood.name}</h3>

            <FoodBox
              key={oneFood.id}
              // name={oneFood.name}
              calories={oneFood.calories}
              image={oneFood.image}
              servings={oneFood.servings}
            />
            <button
              onClick={() => {
                deleteFood(oneFood.id);
              }}
            >
              Delete
            </button>
          </>
        );
      })}
    </div>
  );
}

export default App;
