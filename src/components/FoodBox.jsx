import deleteFood from "/src/App.jsx";

function FoodBox(food) {
  const { name, calories, image, servings } = food;
  const totalCalories = servings * calories;
  return (
    <>
      <p>{food.name}</p>
      <img src={food.image} style={{ height: 300, width: 350 }} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {totalCalories}</b>
        kcal
      </p>
    </>
  );
}

export default FoodBox;
