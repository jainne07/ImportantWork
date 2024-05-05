import React,{useState} from "react";
import Article from "./Article";
function App({articles}) {
const [article, setArticle]=useState(articles)

const sortUpvote=()=>{
    const newArt=[...articles]
    newArt.sort((a,b)=> +a.upvotes < +b.upvotes ? 1 :-1)
    setArticle(newArt)
}
const sortRecent=()=>{
    const newArt=[...articles]
    newArt.sort((a,b)=> new Date(b.date) - new Date(a.date) )
    setArticle(newArt)
}
  return(
    <>
    <button onClick={sortUpvote}>Upvote</button>
    <button onClick={sortRecent}>Recent</button>
    <Article article={article}/>
    </>
  )
}

export default App;