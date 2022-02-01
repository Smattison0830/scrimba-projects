import React from "react"

export default function Card({img, rating, reviewCount, location, title, price, openSpots}) {
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={"./images/" + img } alt=""></img>
            <div className="card--stats">
                <img className="card--star" src="./images/star.png" alt=""></img>
                <span>{rating}</span>
                <span className="grey">({reviewCount}) •</span>
                <span className="grey"> {location}</span>
            </div>
            <p className="card--title">{title}</p>
            <p className="card--price"><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}