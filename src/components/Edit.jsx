import React from "react";
import { useState, useEffect } from "react";
import apiService from "../services/api.service";
import { useNavigate, useParams } from "react-router-dom";

function Edit () {
  const [editStateCard, setEditStateCard] = useState({
      image: "",
      name: "",
      element: "",
      description: "",
      attack: 0,
      hp: 0,
      ability: "",
    });
    const { id } = useParams();
    const navigate = useNavigate(); 

    useEffect(() => {
      apiService.edit(editStateCard).then((response) => {
          console.log("response.data", response.data);
          setEditStateCard(response.data);
        })
        .catch((error)=>console.log(error))
    }, []);
   
   const handleForm = e => {
        setEditStateCard(previous => {
            return {
              ...previous,
              [e.target.name]: e.target.value,
            };
        })
    }

   const handleSubmit = e => {
        e.preventDefault();
        apiService.edit(editStateCard).then(() => {
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
              value={editStateCard.image}
              onChange={handleForm}
            />
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={editStateCard.name}
              onChange={handleForm}
            />
            <label>Element</label>
            <input
              type="text"
              name="element"
              value={editStateCard.element}
              onChange={handleForm}
            />
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={editStateCard.description}
              onChange={handleForm}
            />
            <label>Attack</label>
            <input
              type="text"
              name="attack"
              value={editStateCard.attack}
              onChange={handleForm}
            />
            <label>HP</label>
            <input
              type="number"
              name="hp"
              value={editStateCard.hp}
              onChange={handleForm}
            />
            <label>Ability</label>
            <input
              type="text"
              name="ability"
              value={editStateCard.ability}
              onChange={handleForm}
            />
            <button type="submit">Edit</button>
          </form>
        </div>
      </div>
   );    
}

export default Edit;