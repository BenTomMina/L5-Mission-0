import React from 'react'
import "./Card.css"

export default function Card({image,title,description}) {
  return (
    <div className = "card">
      <div>
        <img src= {image} alt ={title} className = "cardImage"></img>
      </div>
      <div className = "cardText">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>

  )
}
