import { useContext } from "react";
import FormAdd from "./FormAdd";
import { CartContext } from "./store.js/cartContext";
export default function MealItem(props) {
  const ctx = useContext(CartContext);
  const addHandler = (amount) => {
    console.log("amount",amount)
    ctx.addCart({
      id: props.id,
      amount: amount,
      price: props.price,
      name: props.name,
    });
  };

  return (
    <>
      <ul className="list-group">
        <li
          key={props.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <h5 className="text-info">{props.name}</h5>
            {props.description}
            <div>
              <small className="text-success text-bold">${props.price}</small>
            </div>
          </div>
          <div>
            <FormAdd id={props.id} addCart={addHandler}/>
          </div>
        </li>
      </ul>
    </>
  );
}
