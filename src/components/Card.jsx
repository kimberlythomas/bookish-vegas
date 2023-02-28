import React from "react";

const Card = (props) => {
  return(
    <div className="card">
      <img src={props.img} className="card_img" />
      <div className="card_body">
        <h2 className="card_name">{props.name}</h2>
        <p className="card_description">{props.description}</p>
        <p className="card_link"><a href={props.link}>Visit Website</a></p>
      </div>
    </div>
        
  )
}

export default Card;