import React, { useState } from "react";
import styles from "./Multidropdown.module.scss";
import ArrowDownIcon from "../ArrowDownIcon/ArrowDownIcon";
const datatypes: string[] = [
  "Main course",
  "Side dish",
  "Dessert",
  "Appetizer",
  "Salad",
  "Bread",
  "Breakfast",
  "Soup",
  "Beverage",
  "Sauce",
  "Marinade",
  "Fingerfood",
  "Snack",
  "Drink",
];

const Multidropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const dropOpen = (): void => {
    setOpen(!open);
  };
  const select = (category: number): void => {
    setCategories([...categories, datatypes[category]]);
  };
  return (
    <>
      <div className={styles.categories}>
        <input
          className={styles.dropdown}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Categories"
        />
        <button className={styles.dropdown__icon} onClick={dropOpen}>
          <ArrowDownIcon />
        </button>
      </div>
      <div className={styles[`dropdown__options__${open ? "open" : ""}`]}>
        <ul className={styles.ul}>
          {datatypes.map((option, idx) => (
            <li onClick={() => select(idx)} className={styles.li} key={idx}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Multidropdown;
