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
          <h2 className="letter-create">Create your card</h2>
          <form onSubmit={handleSubmit}>
           <label className="label-crt">Image</label>
           <select className="input-crt" name="image" value={newCard.image} onChange={handleForm}>
             <option value=""></option>
             <option value="https://img.pokemondb.net/artwork/large/wigglytuff.jpg">Wigglytuff</option>
             <option value="https://img.pokemondb.net/artwork/large/gloom.jpg">Gloom</option>
             <option value="https://img.pokemondb.net/artwork/large/venonat.jpg">Venonat</option>
             <option value="https://img.pokemondb.net/artwork/large/venomoth.jpg">Venomoth</option>
             <option value="https://img.pokemondb.net/artwork/large/diglett.jpg">Diglett</option>
             <option value="https://img.pokemondb.net/artwork/large/meowth.jpg">Meowth</option>
             <option value="https://img.pokemondb.net/artwork/large/psyduck.jpg">Psyduck</option>
             <option value="https://img.pokemondb.net/artwork/large/growlithe.jpg">Growlithe</option>
             <option value="https://img.pokemondb.net/artwork/large/poliwag.jpg">Poliwag</option>
             <option value="https://img.pokemondb.net/artwork/large/abra.jpg">Abra</option>
             <option value="https://img.pokemondb.net/artwork/large/machop.jpg">Machop</option>
             <option value="https://img.pokemondb.net/artwork/large/golem.jpg">Golem</option>
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
             <option value="fire">fire</option>
             <option value="electric">electric</option>
             <option value="water">water</option>
             <option value="poison">poison</option>
             <option value="grass">grass</option>
             <option value="ice">ice</option>
             <option value="wind">wind</option>
             <option value="flying">flying</option>
             <option value="bug">bug</option>
             <option value="dark">dark</option>
             <option value="dragon">dragon</option>
             <option value="fairy">fairy</option>
             <option value="fighting">fighting</option>
             <option value="ghost">ghost</option>
             <option value="ground">ground</option>
             <option value="normal">normal</option>
             <option value="psychic">psychic</option>
             <option value="rock">rock</option>
             <option value="steel">steel</option>
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