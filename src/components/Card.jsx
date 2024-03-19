import React from "react";
import "./card.css";

const Card = ({ recipe }) => {
  return (
    <div className="card">
      <h2 className="title-cook">{recipe.title}</h2>
      <img
        className="recipe-image"
        src={require(`../images/${recipe.image}`)}
        alt={recipe.title}
      />
      <ul className="list-ingredients">
        {recipe.ingredient.split(",").map((ingredient, index) => (
          <li className="list-of-ingredients" key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Cards = ({ filteredRecipes }) => {
  return (
    <div className="recipe-cards-container">
      {filteredRecipes.map((recipe, index) => (
        <Card key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default Cards;