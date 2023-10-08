import React from "react";
import Card from "../Card/Card";
import styles from "./RecipesMain.module.scss";

const RecipesMain = () => {
  const [recipesData, setRecipiesData] = React.useState<any[]>([]);
  React.useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?number=9&apiKey=ce2cf46efc154fc68fbf49c37c914844"
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setRecipiesData(arr.recipes);
      });
  }, []);
  return (
    <div className={styles.main__container}>
      {recipesData.length > 0 &&
        recipesData.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            minutes={el.readyInMinutes}
            calories={Math.ceil(el.pricePerServing)}
            imageUrl={el.image}
          />
        ))}
    </div>
  );
};

export default RecipesMain;
