import {createPortal }from 'react-dom';
import { forwardRef } from 'react';
const Modal = forwardRef(function Modal(props, ref) {
    return createPortal(
        <dialog ref={ref} className={`${props.show ? "show" : "hide"} w-50 my-3`}>
            <h1 style={{textAlign: "center"}}>Modal sample here</h1>
            <button onClick={props.onSelect}>Close</button>
        </dialog>,
        document.getElementById('modal')
    )
})
export default Modal