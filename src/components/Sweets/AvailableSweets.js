import { useEffect, useState } from "react";
import { Card } from "../UI/Card/Card";
import classes from "./AvailableSweets.module.css";
import { SweetItem } from "./SweetItem/SweetItem";

export const AvailableSweets = () => {
  const [sweets, setSweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchSweets = async () => {
      const response = await fetch(
        "https://order-sweets-app-933e0-default-rtdb.firebaseio.com/sweets.json"
      );

      if (!response.ok) {
        throw new Error("There was an error fetching the data from server!");
      }
      const responseData = await response.json();

      const loadedSweets = [];
      //key is sweet1, sweet2, sweet3...
      for (const key in responseData) {
        loadedSweets.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setSweets(loadedSweets);
      setIsLoading(false);
    };

    fetchSweets().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.sweetsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.sweetsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  return (
    <section className={classes.sweets}>
      <Card>
        <ul>
          {sweets.map((sweet) => (
            <SweetItem
              key={sweet.id}
              id={sweet.id}
              name={sweet.name}
              description={sweet.description}
              price={sweet.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};
