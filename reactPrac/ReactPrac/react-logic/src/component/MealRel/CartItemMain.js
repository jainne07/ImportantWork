
export default function CartItemMain(props){
    return(
    <div className="row">
    <div className="col-4">
      <h5 className="text-primary">{props.name}</h5>
      <small>
        <span className="text-success">${props.price}</span> x {props.amount}
      </small>
    </div>
    <div className="col-8">
     <div className="float-right">
         <button className="btn btn-secondary mx-2" onClick={props.onRemove}>-</button>
         <button  className="btn btn-secondary mx-2" onClick={props.onAdd}>+</button>
     </div>
    </div>
    </div>
    )
}