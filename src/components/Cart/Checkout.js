import { useRef } from "react";
import { useState } from "react";
import classes from "./Checkout.module.css";

const isMinThreeCharactersLength = (value) => value.trim().length >= 3;

export const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    phone: true,
    street: true,
    city: true,
  });

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = isMinThreeCharactersLength(enteredName);
    const enteredPhoneIsValid = isMinThreeCharactersLength(enteredPhone);
    const enteredStreetIsValid = isMinThreeCharactersLength(enteredStreet);
    const enteredCityIsValid = isMinThreeCharactersLength(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      phone: enteredPhoneIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
    });

    const FormIsValid =
      enteredNameIsValid &&
      enteredPhoneIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid;

    if (!FormIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      phone: enteredPhone,
      street: enteredStreet,
      city: enteredCity,
    });
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputsValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.phone ? "" : classes.invalid
        }`}
      >
        <label htmlFor="phoneNumber">Phone number</label>
        <input type="number" id="phoneNumber" ref={phoneInputRef} />
        {!formInputsValidity.phone && <p>Please enter a valid phone!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street and number</label>
        <input type="text" id="name" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>{" "}
        {/* when its type button it DOESNT SUBMIT FORM */}
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
