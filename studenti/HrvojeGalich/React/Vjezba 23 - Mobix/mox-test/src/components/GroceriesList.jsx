import { observer } from "mobx-react";
import { groceriesStore } from "../store/groceries-store.js";

import Grocery from "./Grocery.jsx";

export const GroceriesList = observer(() => {
  const myGroceries = groceriesStore.getGroceries;
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {myGroceries.map((groc, index) => (
          <li key={index}>
            <Grocery name={groc} />
          </li>
        ))}
      </ul>
    </>
  );
});
