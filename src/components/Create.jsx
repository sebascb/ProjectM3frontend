import React from "react";
import { useState } from "react";
import apiService from "../services/api.service";
import { useNavigate } from "react-router-dom"

function Create () {
  const [newCard, setNewCard] = useState({
      image: "",
      name: "",
      element: "",
      description: "",
      attack: 0,
      hp: 0,
      ability: "",
    });
   
   const navigate = useNavigate(); 
   const handleForm = e => {
        setNewCard(previous => {
            return {
              ...previous,
              [e.target.name]: e.target.value,
            };
        })
    }

   const handleSubmit = e => {
        e.preventDefault();
        apiService.create(newCard).then(() => {
                navigate('/cards')
            })
            .catch(error => {
                console.log(error)
            })
    }

   return (
      <div>
        <div>
          <h1>Add New card</h1>
          <form onSubmit={handleSubmit}>
            <label>Image</label>
            <input
              type="text"
              name="image"
              value={newCard.image}
              onChange={handleForm}
            />
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={newCard.name}
              onChange={handleForm}
            />
            <label>Element</label>
            <input
              type="text"
              name="element"
              value={newCard.element}
              onChange={handleForm}
            />
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={newCard.description}
              onChange={handleForm}
            />
            <label>Attack</label>
            <input
              type="text"
              name="attack"
              value={newCard.attack}
              onChange={handleForm}
            />
            <label>HP</label>
            <input
              type="number"
              name="hp"
              value={newCard.hp}
              onChange={handleForm}
            />
            <label>Ability</label>
            <input
              type="text"
              name="ability"
              value={newCard.ability}
              onChange={handleForm}
            />
            <button type="submit">Add New</button>
          </form>
        </div>
      </div>
    );    

}

export default Create;