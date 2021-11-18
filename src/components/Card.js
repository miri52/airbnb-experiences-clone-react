import React from "react";
import star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "sold out";
  } else if (props.card.location === "Online") {
    badgeText = "online";
  }

  return (
    <div className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <img
        className="card__img"
        src={props.card.coverImg}
        alt={props.card.title}
      />
      <div className="card__details">
        <img className="card__star" src={star} alt="red star" />
        <span className="card__rating">{props.card.stats.rating}</span>
        <span className="card__review-count">
          ({props.card.stats.reviewCount}) •
        </span>
        <span className="card__location"> {props.card.location}</span>
      </div>
      <p className="card__title">{props.card.title}</p>
      <p className="card__price">
        <strong>From ${props.card.price}</strong> / person
      </p>
    </div>
  );
}
