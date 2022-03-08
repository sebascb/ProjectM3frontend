import React from "react";
import { useState, useEffect } from "react";
import apiService from "../services/api.service";
import { useNavigate, useParams } from "react-router-dom";

function Delete () {
  const [deleteStateCard, setDeleteCard] = useState({
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
      apiService.delete(deleteStateCard).then((response) => {
          console.log("response.data", response.data);
          setDeleteCard(response.data);
        })
        .catch((error)=>console.log(error))
    }, []);
   
   const handleForm = e => {
        setDeleteCard(previous => {
            return {
              ...previous,
              [e.target.name]: e.target.value,
            };
        })
    }

   const handleSubmit = e => {
        e.preventDefault();
        apiService.delete(deleteStateCard).then(() => {
                navigate('/cards')
            })
            .catch(error => {
                console.log(error)
            })
    }

   return (
      <div>
        <div>
          <h1>Delete card</h1>
          <form onSubmit={handleSubmit}>
            <label>Image</label>
            <input
              type="text"
              name="image"
              value={deleteStateCard.image}
              onChange={handleForm}
            />
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={deleteStateCard.name}
              onChange={handleForm}
            />
            <label>Element</label>
            <input
              type="text"
              name="element"
              value={deleteStateCard.element}
              onChange={handleForm}
            />
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={deleteStateCard.description}
              onChange={handleForm}
            />
            <label>Attack</label>
            <input
              type="text"
              name="attack"
              value={deleteStateCard.attack}
              onChange={handleForm}
            />
            <label>HP</label>
            <input
              type="number"
              name="hp"
              value={deleteStateCard.hp}
              onChange={handleForm}
            />
            <label>Ability</label>
            <input
              type="text"
              name="ability"
              value={deleteStateCard.ability}
              onChange={handleForm}
            />
            <button type="submit">Delete</button>
          </form>
        </div>
      </div>
   );    
}

export default Delete;