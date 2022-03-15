import React from 'react';
import { useState, useEffect } from 'react';
import apiService from "../services/api.service";
// import { Link } from "react-router-dom";

function SearchBar() {
  const [input, setInput] = useState('');
  const [cards, setCards] = useState([]);

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
      <input type="search" name="name" value={input} onChange={handleBar} placeholder="search" />
      <div>
        {/* {cards.map(card => (
          <div key={card._id} >
            <Link to={`/cards/${card._id}`}>
              <div>
                <img src={card.image} alt={card.name} />
                <h3>{card.name}</h3>
              </div>
            </Link>
          </div>
        ))} */}
      </div>
      
    </div>
  );
}


      

export default SearchBar;