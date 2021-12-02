import classes from "./AvailableSweets.module.css";

const DUMMY_Sweets = [
  {
    id: "sweet1",
    name: "Chocolate cake",
    description:
      "Finest piece of chocolate cake and whipped cream decorated with ",
    price: 14.99,
  },
  {
    id: "sweet2",
    name: "Hot chocolate Spheres",
    description:
      "Dark chocolate spheres filled with hot chocolate mix, marshmallows and chocolate chips",
    price: 22.5,
  },
  {
    id: "sweet3",
    name: "Strawberry cake",
    description:
      "Vanilla sponge cake with fresh strawberries finished with whipped cream.",
    price: 19.99,
  },
  {
    id: "sweet4",
    name: "Vanilla rum cake",
    description:
      "Fantastic Vanilla flavoured cake that is filled with black chocolate and rum",
    price: 25.99,
  },
];

export const AvailableSweets = (props) => {
  return (
    <section className={classes.sweets}>
      <ul>
        {DUMMY_Sweets.map((Sweet) => (
          <li>{Sweet.name}</li>
        ))}
      </ul>
    </section>
  );
};
