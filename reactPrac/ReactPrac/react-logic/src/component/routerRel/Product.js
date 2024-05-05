import {Link} from 'react-router-dom'
export default function Product(){
    const product=[
        {id: 1, title:"product-1", description: "this is test"},
        {id: 2, title:"product-2", description: "this is test"},
        {id: 3, title:"product-3", description: "this is test"}
    ]
    return(
       <>
            <h4 className="test-info">Product</h4>
            <ul className="nav flex-column nav-pills">
                {product.map((pro)=>
                    (
                    <li key={pro.id}>
                        <Link to={`/product/${pro.id}`} className="nav-link">{pro.title}</Link>
                    </li>
                )
                   )}
            </ul>
       </>
    )
}