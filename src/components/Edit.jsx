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

    const { id } = useParams();

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
              value={edit.image}
              onChange={handleForm}
            />
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={edit.name}
              onChange={handleForm}
            />
            <label>Element</label>
            <input
              type="text"
              name="element"
              value={edit.element}
              onChange={handleForm}
            />
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={edit.description}
              onChange={handleForm}
            />
            <label>Attack</label>
            <input
              type="text"
              name="attack"
              value={edit.attack}
              onChange={handleForm}
            />
            <label>HP</label>
            <input
              type="number"
              name="hp"
              value={edit.hp}
              onChange={handleForm}
            />
            <label>Ability</label>
            <input
              type="text"
              name="ability"
              value={edit.ability}
              onChange={handleForm}
            />
            <button type="submit">Edit</button>
          </form>
        </div>
      </div>
   );    
}

export default Edit;