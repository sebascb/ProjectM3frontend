import React from "react";
import { useState, useEffect } from "react";
import apiService from "../services/api.service";
import { useNavigate, useParams, Link} from "react-router-dom";

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
    const { cardId } = useParams();
    const navigate = useNavigate(); 

    useEffect(() => {
      apiService.getDetail(deleteStateCard).then((response) => {
          console.log("response.data", response.data);
          setDeleteCard(response.data);
        })
        .catch((error)=>console.log(error))
    }, []);
   
   const handleDelete = () => {
        apiService.deleteStateCard(cardId).then(() => {
          navigate('/cards');
      })
      .catch(error => {
        console.log(error);
      });
  };

   return (
      <div>
        <div>
          <h1>Delete card</h1>
          <div>
                  <div>
                    <img src={deleteStateCard.image} style={{ width: '200px'}} alt={deleteStateCard.name} />
                  </div>
                  <div>
                    <p>{deleteStateCard.element}</p>
                    <p>{deleteStateCard.decription}</p>
                    <p>{deleteStateCard.attack}</p>
                    <p>{deleteStateCard.hp}</p>
                    <p>{deleteStateCard.ability}</p>
                  </div>
              </div>
          <div>
          <button onClick={handleDelete}>
          </button>
          <Link to={`/cards`}>
          </Link>
          </div>
        </div>
      </div>
   );    
}

export default Delete;