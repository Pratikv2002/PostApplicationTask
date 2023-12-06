import React from 'react'

export default function PostCard(props) {
  return (
    <div style={{width:"300px", border:"1px solid black", margin:"10px"}}>
        <h2>{props.Title}</h2>
        <h4>{props.SubTitle}</h4>
        <h5>{props.CreatedBy}</h5>
    </div>
  )
}
