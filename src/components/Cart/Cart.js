import { Modal } from "../UI/Modal/Modal";
import classes from "./Cart.module.css";

export const Cart = (props) => {
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {[{ id: "c1", name: "Chocolate", amount: 2, price: 9.99 }].map(
                (item) => (
                    <li>{item.name}</li>
                )
            )}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>21.22</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={props.onClose}
                >
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};
