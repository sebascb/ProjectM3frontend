import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService from "../services/api.service";
import SearchBar from '../components/SearchBar';

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
          <div className="title-card">
            <h2 className="letter-card">Pokemon Cards</h2>
          </div>
          <div className="searchBar"> 
            <SearchBar />
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
                    <img src={card.image}  alt={card.name} />
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