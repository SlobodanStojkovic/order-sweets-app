import classes from "./SweetsSummary.module.css";

export const SweetsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Sweets, Delivered To You</h2>
      <p>
        Choose your favorite sweets from our broad selection of available sweets
        and enjoy them at your home.
      </p>
      <p>
        All our sweets are prepared with high-quality ingredients, just-in-time
        and of course by experienced chefs!
      </p>
    </section>
  );
};
