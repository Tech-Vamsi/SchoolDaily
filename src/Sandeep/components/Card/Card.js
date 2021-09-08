import React from 'react'
import "./Card.css"

function Card(props) {
    return (
        <div className="container">
        <main className="grid">
        <article>
            <img src={props.path} alt="Image" />
            <div className="text">
                <h3>{props.text}</h3>
            </div>
        </article>
        </main>
            
        </div>
    )
}

export default Card
