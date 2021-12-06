import { useContext, useEffect, useState } from "react";
import { CartIcon } from "../Cart/CartIcon";
import { CartContext } from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

export const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext); //whenever the context changes the react will reevaluate the HeaderCartButton component

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0); //reduce transforms array of data into single value, second argument is a starting value

    const btnClasses = `${classes.button} ${
        btnIsHighlighted ? classes.bump : ""
    }`;

    const { items } = cartCtx;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300); //300 ms because that is the duration of animations

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};
