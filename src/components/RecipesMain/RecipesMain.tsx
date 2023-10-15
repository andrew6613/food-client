import React from "react";
import Card from "../Card/Card";
import styles from "./RecipesMain.module.scss";

interface RecipesMain {
  data: any[];
}

const RecipesMain: React.FC<RecipesMain> = ({ data }) => {
  return (
    <div className={styles.main__container}>
      {data.length > 0 &&
        data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            minutes={el.readyInMinutes}
            //calories={Math.ceil(el.nutrition.nutrients[0].amount)}
            imageUrl={el.image}
          />
        ))}
    </div>
  );
};

export default RecipesMain;
