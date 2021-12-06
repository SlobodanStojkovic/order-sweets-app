import classes from "./Header.module.css";
/* import cakesShelf from "../../assets/cakesShelf.jpg"; */
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Sweet pleasures</h1>
                <HeaderCartButton onClick={props.onShowCartModal} />
            </header>
            {/*  <div className={classes["main-image"]}>*/}
            {/* because it has dash inside of it we need to access it like this */}
            {/*   <img src={cakesShelf} alt="A shelf full of delicious cakes!" /> */}
            {/*  </div> */}
        </>
    );
};
