import React, { useState } from "react";
import "./Main.scss";
import SearchIcon from "../SearchIcon/SearchIcon";
import Multidropdown from "../Multidropdown/Multidropdown";
import RecipesMain from "../RecipesMain/RecipesMain";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const [recipesData, setRecipiesData] = React.useState<any[]>([]);
  React.useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?number=9&apiKey=ce2cf46efc154fc68fbf49c37c914844&addRecipeNutrition=true"
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setRecipiesData(arr.recipes);
      });
  }, []);
  const getFillteredDishes = (searchValue: string) => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}&addRecipeNutrition=true&apiKey=ce2cf46efc154fc68fbf49c37c914844`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setRecipiesData(arr.results);
      });
  };

  return (
    <div className="main">
      <div className="text">
        Find the perfect food and <span>drink ideas</span> for every occasion,
        from <span>weeknight dinners</span> to <span>holiday feasts</span>.
      </div>
      <div className="search">
        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event?.target.value)}
          className="search_input"
          placeholder="Enter dishes"
        />
        <button
          onClick={() => getFillteredDishes(searchValue)}
          className="search__icon"
        >
          <SearchIcon />
        </button>
      </div>
      <div className="drop">
        <Multidropdown />
      </div>
      {recipesData.length > 0 && <RecipesMain data={recipesData} />}
    </div>
  );
};

export default Main;
