import { SweetItemForm } from "./SweetItemForm";
import classes from "./SweetItem.module.css";
import { useContext } from "react";
import { CartContext } from "../../../store/cart-context";

export const SweetItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addItemToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };

    return (
        <li className={classes.sweet}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <SweetItemForm onAddToCart={addItemToCartHandler} />
            </div>
        </li>
    );
};
