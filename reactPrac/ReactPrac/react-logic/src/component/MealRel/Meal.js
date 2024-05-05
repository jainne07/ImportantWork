import MealItem from "./MealItem";
import {useState, useEffect} from 'react'
export default function Meal() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-prac-5b5b4-default-rtdb.firebaseio.com/meals.json');
      const responseData = await response.json();

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
    };

    fetchMeals();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 my-2">
            {meals.map((meal) => (
              <MealItem
                key={meal.id}
                name={meal.name}
                id={meal.id}
                price={meal.price}
                description={meal.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
