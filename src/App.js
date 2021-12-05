import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header";
import { Sweets } from "./components/Sweets/Sweets";
import { CartProvider } from "./store/CartProvider";
import "./App.css";

function App() {
    const [showCartModal, setShowCartModal] = useState(false);

    const showCartModalHandler = () => {
        setShowCartModal(true);
    };

    const hideCartModalHandler = () => {
        setShowCartModal(false);
    };

    return (
        <CartProvider>
            {showCartModal && <Cart onClose={hideCartModalHandler} />}
            <Header onShowCartModal={showCartModalHandler} />
            <main>
                <Sweets />
            </main>
        </CartProvider>
    );
}

export default App;
