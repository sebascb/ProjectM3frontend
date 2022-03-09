import React from "react";
import { useState, useEffect } from "react";
import apiService from "../services/api.service";
import { useParams, useNavigate } from "react-router-dom";

function Delete () {
  const [deleteStateCard, setDeleteCard] = useState({});
  const { cardId } = useParams();
  const navigate = useNavigate();

    useEffect(() => {
      apiService.getDetail(cardId).then((response) => {
          console.log("response.data", response.data);
          setDeleteCard(response.data);
        })
        .catch(error=>console.log(error))
    }, []);
   
  const handleDelete = () => {
        apiService.delete(cardId).then(() => {
          navigate('/cards');
      })
      .catch(error => {
        console.log(error);
      });
  };

   return (
    <>
      <div> 
        <button onClick={handleDelete}>borrar hostia</button><p>{deleteStateCard.name}?</p>
      </div>
    </>
  );
}
export default Delete;