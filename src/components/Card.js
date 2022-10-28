import React from "react";

function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={require(`../../public/images/${props.item.coverImg}`)}
        className="card--image"
      ></img>
      <div className="card--stats">
        <img className="card--star" src="images/star.png"></img>
        <span className="gray">{props.item.stats.rating} </span>
        <span className="gray">({props.item.stats.reviewCount}) </span>
        <span>{props.item.country} </span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">from {props.item.price}$ </span>/ person
      </p>
    </div>
  );
}

export default Card;
