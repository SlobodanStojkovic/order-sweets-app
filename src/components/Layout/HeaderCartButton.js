import classes from "./HeaderCartButton.module.css";
import { CartIcon } from "../Cart/CartIcon";

export const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};
