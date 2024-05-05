import { useContext } from "react";
import { CartContext } from "./store.js/cartContext";

export default function Cartitem(props) {
  const ctx=useContext(CartContext)
  const amount= ctx.items.reduce((ar,v)=> ar + parseFloat(v.amount),0)
  return <>
  <button type="button" onClick={props.onOpen} className="btn btn-primary">
  CartItem <span className="badge badge-light">{amount}</span>
</button>
</>;
}
