import { useParams,Link } from "react-router-dom"

export default function ProductDetail(){
   
    const params = useParams();
    const product=[
        {id: 1, title:"product-1", description: "this is test"},
        {id: 2, title:"product-2", description: "this is test"},
        {id: 3, title:"product-3", description: "this is test"}
    ]
    const chk=product.filter(v=> v.id === +params.productId)
    return(
        <>
        <h4 className="test-info">Product details</h4>
        <p>{params.productId}</p>
        {
            chk.map((v)=>(
                <div className="border p-2" key={v.id}>
                <h4>{v.title}</h4>
                <p>{v.description}</p>
                </div>
            ))
        }
        <Link to=".." relative='path'>Back</Link>
        </>
    )
}