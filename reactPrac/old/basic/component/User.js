import React from 'react'
//import UserInfo from './UserInfo'

export default function User(props) {
    /* const user=[
        {
          "balance": "$3,946.45",
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "name": "Bird Ramsey",
          "gender": "male",
          "company": "NIMON",
          "email": "birdramsey@nimon.com"
        },
        {
          "balance": "$2,499.49",
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "name": "Lillian Burgess",
          "gender": "female",
          "company": "LUXURIA",
          "email": "lillianburgess@luxuria.com"
        },
        {
          "balance": "$2,820.18",
          "picture": "http://placehold.it/32x32",
          "age": 34,
          "name": "Kristie Cole",
          "gender": "female",
          "company": "QUADEEBO",
          "email": "kristiecole@quadeebo.com"
        },
        {
          "balance": "$3,277.32",
          "picture": "http://placehold.it/32x32",
          "age": 30,
          "name": "Leonor Cross",
          "gender": "female",
          "company": "GRONK",
          "email": "leonorcross@gronk.com"
        },
        {
          "balance": "$1,972.47",
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "name": "Marsh Mccall",
          "gender": "male",
          "company": "ULTRIMAX",
          "email": "marshmccall@ultrimax.com"
        }
      ] */
          return (
        <>
            
              <div style={{backgroundColor:props.color,width:"200px",margin:"10px",padding:"10px 5px",display:"inline-block"}}>
                  <h1>Hi {props.name.toUpperCase()}</h1>
                   <props.cmp/>
              </div>
          
            {/* { props.name=="Sam"? 
                <table align="center" border="1px" cellPadding="1" style={{tableLayout:"fixed",borderCollapse:"separate", borderSpacing:"2px"}}>
                  {  user.map((item,i)=> <UserInfo key={i}data={item}></UserInfo> )}
                </table>
                 :null} */}
            
                  </>
    )
}
 