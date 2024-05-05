import React from 'react'

export default function UserInfo(props) {
    return (
        <>            
                <tr>
                    <td>{props.data.name}</td>
                    <td>{props.data.balance}</td>
                    <td>{props.data.age}</td>
                    <td>{props.data.gender}</td>
                    <td>{props.data.company}</td>
                    <td>{props.data.email}</td>
                </tr>
        </>
    )
}
