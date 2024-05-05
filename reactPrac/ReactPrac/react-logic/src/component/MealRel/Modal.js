import { createPortal } from "react-dom";
import { forwardRef } from "react";
import Cart from "./Cart";
import CheckoutFrom from "./CheckoutFrom";
const Modal = forwardRef(function Modal(props, ref) { 
  const chk=()=>{
    props.onCheck(true)
  }
  return createPortal(
    <dialog ref={ref} className={`${props.show ? "show" : "hide"} w-50 my-3`}>
     {!props.checkout &&<> <Cart />
      <div className="float-right">
          <button
            className="btn btn-outline-secondary mr-3"
            onClick={props.onSelect}
          >
            Close
          </button>
          <button
            className="btn btn-secondary"
            onClick={chk}
          >
            Checkout
          </button>
          </div> </>}
          {props.checkout && <CheckoutFrom onSelect={props.onSelect} onCheck={props.onCheck}/>}
      
    </dialog>,
    document.getElementById("modalnew")
  );
});
export default Modal;
