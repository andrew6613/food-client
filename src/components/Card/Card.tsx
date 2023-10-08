import React from "react";
import styles from "./Card.module.scss";
// import image from "./food.png";
import clock from "../../assets/clock.svg";

interface CardProps {
  title: string;
  minutes: number;
  calories: number;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, minutes, calories, imageUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.picture}>
        <img className={styles.picture__img} src={imageUrl} alt="" />
      </div>
      <div className={styles.description}>
        <div className={styles.time}>
          <img src={clock} alt="" />
          <span className={styles.time__text}>{minutes} minutes</span>
        </div>
        <span className={styles.title}>{title}</span>
        <span className={styles.recipe}>
          milk + sugar + flour + vegetable oil + bakingpowder + egg
        </span>
      </div>
      <div className={styles.saveblock}>
        <span className={styles.calories}>{calories} kcal</span>
        <button className={styles.savebutton}>Save</button>
      </div>
    </div>
  );
};

export default Card;
