import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService from "../services/api.service";

function Cards () {
  const [cards, setCards] = useState([]);
 // const apiURL = "https://cranky-lewin-d3d1ec.netlify.app/cards";

  useEffect(() => {
    apiService.getCards().then((response) => {
      console.log("response.data", response.data.card);
      setCards(response.data.card);
    })
    .catch((error) => console.log(error))
  }, []);

  return (
        <div>
          <div>
            {cards.map(card => (
              <div key={card._id}>
                <Link
                  to={`/cards/${card._id}`}>
                  <div>
                    <img src={card.image} style={{ width: '200px'}} alt={card.name} />
                  </div>
                  <div>
                    <h1>{card.name}</h1>
                    <h1>{card.element}</h1>
                    <h1>{card.decription}</h1>
                    <h1>{card.attack}</h1>
                    <h1>{card.hp}</h1>
                    <h1>{card.ability}</h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    }

export default Cards;