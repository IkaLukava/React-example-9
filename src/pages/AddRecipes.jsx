import React, { useState, useEffect } from "react";
import "../styles/addracipes.css";
import { MdDeleteForever } from "react-icons/md";

const AddRecipes = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    return savedRecipes;
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleAddRecipe = () => {
    if (title.trim() !== "" && ingredients.trim() !== "") {
      const newRecipe = {
        title: title.trim(),
        ingredients: ingredients.trim()
      };
      setRecipes(prevRecipes => [...prevRecipes, newRecipe]); 
      setTitle("");
      setIngredients("");
    }
  };

  const handleDeleteRecipe = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="recipes-add">
      <input
        className="title"
        placeholder="კერძის სახელწოდება"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="ingredients"
        placeholder="დაამატეთ ინგრედიენტები"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button className="add" onClick={handleAddRecipe}>დამატება</button>

      <div className="recipes-list">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
            <div className="delete-icon">
              <MdDeleteForever onClick={() => handleDeleteRecipe(index)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddRecipes;