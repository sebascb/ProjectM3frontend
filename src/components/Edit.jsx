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
    const { cardId } = useParams();
    const navigate = useNavigate(); 

    useEffect(() => {
      apiService.getDetail(cardId).then((response) => {
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
        apiService.edit(editStateCard, cardId).then(() => {
                navigate('/cards')
            })
            .catch(error => {
                console.log(error)
            })
    }

   return (
      <div>
        <div>
         <div className="title-create">
            <h2 className="letter-create">Edit card</h2>
          </div>
          <form onSubmit={handleSubmit}>
           <label className="label-crt">Image</label>
           <input className="input-crt"
              type="text"
              name="image"
              value={editStateCard.image}
              onChange={handleForm}
            />
           <label className="label-crt">Name</label>
           <input className="input-crt"
              type="text"
              name="name"
              value={editStateCard.name}
              onChange={handleForm}
            />
           <label className="label-crt">Element</label>
           <input className="input-crt"
              type="text"
              name="element"
              value={editStateCard.element}
              onChange={handleForm}
            />
           <label className="label-crt">Description</label>
           <input className="input-crt"
              type="text"
              name="description"
              value={editStateCard.description}
              onChange={handleForm}
            />
           <label className="label-crt">Attack</label>
           <input className="input-crt"
              type="text"
              name="attack"
              value={editStateCard.attack}
              onChange={handleForm}
            />
           <label className="label-crt">HP</label>
           <input className="input-crt"
              type="number"
              name="hp"
              value={editStateCard.hp}
              onChange={handleForm}
            />
           <label className="label-crt">Ability</label>
           <input className="input-crt"
              type="text"
              name="ability"
              value={editStateCard.ability}
              onChange={handleForm}
            />
            <div className="btn-create">
             <button className="button-create" type="submit">Edit</button>
            </div>
          </form>
        </div>
      </div>
   );    
}

export default Edit;