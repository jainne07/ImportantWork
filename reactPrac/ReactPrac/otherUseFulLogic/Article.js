export default function Article({article}){
    return(
        <div>
            {article.map(item=>
            <ul key={item.title}>
            {item.title}- {item.upvotes} - {item.date}
            </ul>)}
        </div>
    )
}