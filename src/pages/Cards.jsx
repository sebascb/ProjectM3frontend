import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService from "../services/api.service";

function Cards () {
  const [cards, setCards] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    apiService.getCards().then((response) => {
      console.log("response.data", response.data.card);
      setCards(response.data.card);
    })
    .catch((error) => console.log(error))
  }, []);

  const handleBar = (e) => {
    setInput(e.target.value);
    filterCard(e.target.value);
  };

  const filterCard = (input) => {
    setCards(cards.filter((card) => card.name.includes(input)));
    if (input === '') {
      setCards(cards);
    } else {
      setCards(
        cards.filter((card) =>
          card.name.toLowerCase().includes(input.toLowerCase())
        )
      )
    }
  };

  return (
        <div>
          <div className="title-card">
            <h2 className="letter-card">Pokemon Cards</h2>
          </div>
          <div className="searchBar"> 
          <input className="bar" type="text" name="name" value={input} onChange={handleBar} placeholder="search" />
          </div>
          <div className="button-main-top">
            <Link to="/cards/create">
              <button className="button-create-top">Create Card</button>
            </Link>
          </div>
          <div className="contImage">
            {cards.map(card => (
              <div key={card._id} >
                <Link  to={`/cards/${card._id}`}>
                  <div className="isImage">
                    <img className="imageCard" src={card.image}  alt={card.name} />
                    <h3>{card.name}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      );
    }

export default Cards;