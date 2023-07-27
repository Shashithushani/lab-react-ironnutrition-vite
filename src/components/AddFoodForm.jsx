import { useState } from "react";

function AddFoods(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleNameInput = (event) => setName(event.target.value);

  const handleImageInput = (event) => setImage(event.target.value);

  const handleCaloriesInput = (event) => setCalories(event.target.value);

  const handleServingsInput = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = { name, image, calories, servings };

    props = newFood;
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };
  return (
    <div calssName="food">
      <h3>Add new Food</h3>
      <form onSubmit={handleSubmit}>
        <lable>Name</lable>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleNameInput}
        />

        <lable> Image</lable>
        <input
          name="image"
          type="text"
          value={image}
          onChange={handleImageInput}
        />
        <lable>Calories</lable>
        <input
          name="calories"
          type="number"
          value={calories}
          onChange={handleCaloriesInput}
        />
        <lable>Servings</lable>
        <input
          name="servings"
          type="number"
          value={servings}
          onChange={handleServingsInput}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoods;
