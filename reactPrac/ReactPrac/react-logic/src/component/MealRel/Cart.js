import { useContext } from "react";
import CartItemMain from "./CartItemMain";
import { CartContext } from "./store.js/cartContext";

export default function Cart() {
  const ctx = useContext(CartContext);
  const cartItemRemoveHandler = (id) => {
    ctx.removeCart(id);
  };

  const cartItemAddHandler = (item) => {
    ctx.addCart({ ...item, amount: 1 });
  };
  return (
    <div className="row">
      <div className="col-12">
        {ctx.items.map((item) => (
         <CartItemMain 
         key={item.id}
         name={item.name}
         amount={item.amount}
         price={item.price}
         onRemove={cartItemRemoveHandler.bind(null, item.id)}
         onAdd={cartItemAddHandler.bind(null, item)}
         />
        ))}
        <div className="float-right text-danger mb-4">${ctx.totalAmount.toFixed(2)}</div>
      </div>
    </div>
  );
}
