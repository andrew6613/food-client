import "./App.scss";
import FoodImage from "./components/FoodImage/FoodImage";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="app">
      <Header />
      <FoodImage />
      <Main />
    </div>
  );
};

export default App;
