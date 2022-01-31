import React from "react"

export default function Card({img, rating, reviewCount, country, title, price}) {
    return (
        <div className="card">
            <img className="card--image" src={"./images/" + img } alt=""></img>
            <div>
                <img className="card--star" src="./images/star.png" alt=""></img>
                <span>{rating}</span>
                <span className="grey">({reviewCount}) •</span>
                <span className="grey"> {country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}