import React from "react";
import { useState } from "react";
import apiService from "../services/api.service";
import { useNavigate } from "react-router-dom";
import alakazamImg from "./../assets/alakazam.png";

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
          <div className="title-create">
          <h2 className="letter-create">Create your card</h2>
          </div> 
          <form onSubmit={handleSubmit}>
           <label className="label-crt">Image</label>
           <select className="input-crt" name="image" value={newCard.image} onChange={handleForm}>
             <option value=""></option>
             <option value="https://img.pokemondb.net/sprites/sun-moon/normal/wigglytuff.png">Wigglytuff</option>
             <option value="https://img.pokemondb.net/sprites/home/normal/gloom-f.png">Gloom</option>
             <option value="https://img.pokemondb.net/sprites/home/normal/venonat.png">Venonat</option>
             <option value="https://img.pokemondb.net/sprites/home/normal/venomoth.png">Venomoth</option>
             <option value="https://img.pokemondb.net/sprites/home/normal/rhydon-f.png">Rhydon</option>
             <option value="https://img.pokemondb.net/sprites/legends-arceus/normal/alakazam-f.png">Alakazam</option>
             <option value="https://img.pokemondb.net/sprites/home/normal/psyduck.png">Psyduck</option>
             <option value="https://img.pokemondb.net/sprites/home/normal/growlithe.png">Growlithe</option>
             <option value="https://img.pokemondb.net/sprites/home/normal/jynx.png">Jynx</option>
             <option value="https://img.pokemondb.net/sprites/home/normal/tauros.png">Tauros</option>
             <option value="https://img.pokemondb.net/sprites/home/normal/machop.png">Machop</option>
             <option value="https://img.pokemondb.net/sprites/legends-arceus/normal/golem.png">Golem</option>
           </select>
           <label className="label-crt">Name</label>
           <input className="input-crt"
              type="text"
              name="name"
              value={newCard.name}
              onChange={handleForm}
            />
           <label className="label-crt">Element</label>
           <select className="input-crt" name="element" value={newCard.element} onChange={handleForm}>
             <option value=""></option>
             <option value="Fire">Fire</option>
             <option value="Electric">Electric</option>
             <option value="Water">Water</option>
             <option value="Poison">Poison</option>
             <option value="Grass">Grass</option>
             <option value="Ice">Ice</option>
             <option value="Wind">Wind</option>
             <option value="Flying">Flying</option>
             <option value="Bug">Bug</option>
             <option value="Dark">Dark</option>
             <option value="Dragon">Dragon</option>
             <option value="Fairy">Fairy</option>
             <option value="Fighting">Fighting</option>
             <option value="Ghost">Ghost</option>
             <option value="Ground">Ground</option>
             <option value="Normal">Normal</option>
             <option value="Psychic">Psychic</option>
             <option value="Rock">Rock</option>
             <option value="Steel">Steel</option>
           </select>
           <label className="label-crt">Description</label>
           <input className="input-crt"
              type="text"
              name="description"
              value={newCard.description}
              onChange={handleForm}
            />
           <label className="label-crt">Attack</label>
           <input className="input-crt"
              type="text"
              name="attack"
              value={newCard.attack}
              onChange={handleForm}
            />
           <label className="label-crt">HP</label>
           <input className="input-crt"
              type="number"
              name="hp"
              value={newCard.hp}
              onChange={handleForm}
            />
           <label className="label-crt">Ability</label>
           <input className="input-crt"
              type="text"
              name="ability"
              value={newCard.ability}
              onChange={handleForm}
            />

           <div className="alakazam-crt">
             <img className="alakazam" src={alakazamImg} alt="alakazam image"></img>
           </div>

           <div className="btn-create">
            <button className="button-create" type="submit">Create your Card</button>
           </div>
          </form>
        </div>
      </div>
    );    

}

export default Create;