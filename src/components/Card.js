import React from "react"

export default function Card() {
    return (
        <div className="card">
            <img className="card--image" src="./images/katie-zaferes.png" alt=""></img>
            <div>
                <img className="card--star" src="./images/star.png" alt=""></img>
                <span className="grey">(6) •</span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}