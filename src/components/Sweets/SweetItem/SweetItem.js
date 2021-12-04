import classes from "./SweetItem.module.css";

export const SweetItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.sweet}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};
