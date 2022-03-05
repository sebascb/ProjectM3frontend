import React from "react";
import { useState, useEffect } from "react";
import apiService from "../services/api.service";
import { useNavigate } from "react-router-dom"

function Edit () {
  const [editCard, setEditCard] = useState({
      image: "",
      name: "",
      element: "",
      description: "",
      attack: 0,
      hp: 0,
      ability: "",
    });

    useEffect(() => {
      apiService.edit(editCard)(`{params.id}`).then((response) => {
          console.log("response.data", response.data);
          setEditCard(response.data);
        })
        .catch((error)=>console.log(error))
    }, [params.id]);
   
   const navigate = useNavigate(); 
   const handleForm = e => {
        setEditCard(previous => {
            return {
              ...previous,
              [e.target.name]: e.target.value,
            };
        })
    }

   const handleSubmit = e => {
        e.preventDefault();
        apiService.edit(editCard).then(() => {
                navigate('/cards')
            })
            .catch(error => {
                console.log(error)
            })
    }

   return (
      <div>
        <div>
          <h1>Edit card</h1>
          <form onSubmit={handleSubmit}>
            <label>Image</label>
            <input
              type="text"
              name="image"
              value={card.image}
              onChange={handleForm}
            />
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={card.name}
              onChange={handleForm}
            />
            <label>Element</label>
            <input
              type="text"
              name="element"
              value={card.element}
              onChange={handleForm}
            />
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={card.description}
              onChange={handleForm}
            />
            <label>Attack</label>
            <input
              type="text"
              name="attack"
              value={card.attack}
              onChange={handleForm}
            />
            <label>HP</label>
            <input
              type="number"
              name="hp"
              value={card.hp}
              onChange={handleForm}
            />
            <label>Ability</label>
            <input
              type="text"
              name="ability"
              value={card.ability}
              onChange={handleForm}
            />
            <button type="submit">Edit</button>
          </form>
        </div>
      </div>
    );    

}

export default Edit;