import { useContext } from "react";
import { CartContext } from "./store.js/cartContext";

const CheckoutFrom = (props) => {
  const confirmHandler = async(event) => {
    event.preventDefault();
    const fd=new FormData(event.target)
    const data=Object.fromEntries(fd.entries())
    console.log(data)
    const response = await fetch('https://react-prac-5b5b4-default-rtdb.firebaseio.com/orders.json',{
        method: 'POST',
        body:JSON.stringify({
            items:ctx.items,
            customer:data,
            totalAmount: ctx.totalAmount
        }),
        headers: {
            "Content-Type": "application/json",
          },
    });
    const responseData = await response.json();
    console.log(responseData)
    props.onSelect();
    ctx.clearCart()
    props.onCheck(false)
    event.target.reset()
  };
  const closeHandler=()=>{
    props.onSelect();
    ctx.clearCart()
    props.onCheck(false)
  }
  const ctx = useContext(CartContext);
  return (
    <>
    {ctx.items.map((meal)=>(
      <div key={meal.id} className="bg-success text-white px-3">{meal.name}- {meal.amount}</div>  
    ))}
      <h1 className="text-info text-right">${ctx.totalAmount.toFixed(2)}</h1>
      <form onSubmit={confirmHandler}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name"className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="street"className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" name="postal" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" className="form-control" />
        </div>
        <div>
          <button
            className="btn btn-outline-secondary mr-2"
            type="button"
            onClick={closeHandler}
          >
            Cancel
          </button>
          <button className="btn btn-primary mr-2">Confirm</button>
        </div>
      </form>
    </>
  );
};

export default CheckoutFrom;
