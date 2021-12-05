import { CartContext } from "./cart-context";

export const CartProvider = (props) => {
    const addItemToCartHandler = (item) => {};

    const removeItemToCartHandler = (id) => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    };

    return <CartContext.Provider>{props.children}</CartContext.Provider>;
};
