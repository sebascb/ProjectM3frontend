import React from "react";
import { useState, useEffect } from "react";
import apiService from "../services/api.service";
import { useParams, useNavigate } from "react-router-dom";


function RemoveFavorite () {
  const [favoriteStateCard, setFavoriteCard] = useState({});
  const { cardId } = useParams();
  const navigate = useNavigate();
  

    useEffect(() => {
      apiService.getDetail(cardId).then((response) => {
          console.log("response.data", response.data);
          setFavoriteCard(response.data);
        })
        .catch(error=>console.log(error))
    }, []);
   
  const handleFavorite = () => {
        apiService.favorite(cardId).then(() => {
          navigate('/cards');
      })
      .catch(error => {
        console.log(error);
      });
  };

   return (
    <>
      <div> 
        <button onClick={handleFavorite}>Add {favoriteStateCard.name} to favorites?</button>
      </div>
    </>
  );
}
export default RemoveFavorite;