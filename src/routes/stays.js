import { useParams } from "react-router-dom";
import "./stays.css";
import { getStay } from "../data";
import React from "react";

export default function Stay() {
  let params = useParams();
  let stay = getStay(params.stayId);
  return stay ? (
    <div className="app">
      <header className="app-header">
        <h1>Dream Stays</h1>
      </header>
      <img className="stay-img" alt={stay.name} src={stay.img} />
      <h2>{stay.name}</h2>
      <p className="stay-description">{stay.description}</p>
      <h3>Activities:</h3>
      <p className="activities">{stay.activities}</p>
      <h3>Star Ratings:</h3>
      <p className="rating">{stay.rating}</p>
      
    </div>
  ) : (
    <></>
  );
}
