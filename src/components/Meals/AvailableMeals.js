import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { getAllEntriesRedux } from "../../actions/entries.actions";

const AvailableMeals = () => {
  const entries = useSelector((state) => state.entries);
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  // useEffect(() => {
  //   entries.map((meal) => (
  //     <MealItem
  //       id={meal.id}
  //       key={meal.id}
  //       name={meal.name}
  //       description={meal.description}
  //       price={meal.price}
  //     />
  //   ));
  // }, [entries]);

  //async function fetchInitialData() {
  //const result = await axios.get("http://localhost:3001/entries");

  //   }

  useEffect(() => {
    const fetchMeals = async () => {
      const result = await fetch(
        "https://food-order-app-db-28154-default-rtdb.firebaseio.com/meals.json"
      );

      if (!result.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await result.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllEntriesRedux());
  //   setIsLoading(false);
  // }, [dispatch]);

  if (isLoading) {
    return (
      <section className={classes.MealLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
