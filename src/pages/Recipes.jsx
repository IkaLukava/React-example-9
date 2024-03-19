import React, { useState, useEffect } from 'react';
import '../styles/recipes.css';
import recipeData from '../data/recipes.json';
import Cards from '../components/Card';

const Recipes = () => {
  const [search, setSearch] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
      setFilteredRecipes(recipeData);
  }, []);

  const handleSearchChange = (event) => {
      setSearch(event.target.value);
  };

  const handleSearch = () => {
    if (search.trim() === '') {
        setFilteredRecipes(recipeData); 
    } else{
        const filtered = recipeData.filter(recipe =>
            recipe.title.toLowerCase().includes(search.toLowerCase()) ||
            recipe.ingredient.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRecipes(filtered);
    }
  };

  return (
      <div className='recipes'>
          <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="შეუკვეთეთ საკვები"
                value={search}
                onChange={handleSearchChange}
            />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSearch}>ძიება</button>
          </div>
          <Cards filteredRecipes={filteredRecipes} />
      </div>
  );
};

export default Recipes;
