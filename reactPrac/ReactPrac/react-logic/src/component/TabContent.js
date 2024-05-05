export default function TabContent(props){
    const chk=props.concept.filter(v => v.title === props.value)
    return(
        <div><div style={{margin: "20px 0px 10px", fontSize: "24px"}}>{props.value}</div>
        {chk.map(v=>
            <div key={v.title}>{v.description}</div>
            )}
        </div>
    )
}