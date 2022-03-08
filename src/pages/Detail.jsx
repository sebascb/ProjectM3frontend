import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import apiService from "../services/api.service";

function Detail () {
  const [detailCard, setDetailCard] = useState({});
  const [userCard, setUserCard] = useState({});
  const { cardId } = useParams();

   useEffect(() => {
    apiService.getDetail(cardId).then(response => {
        setDetailCard(response.data);
         const { user } = response.data;
         setUserCard(user);
         const oneCardData = response.data;
         setDetailCard(oneCardData);
      })
      .catch(error => {
        console.log(error);
      });
  }, [cardId]);

   return (
              <div>
                  <div>
                    <img src={detailCard.image} style={{ width: '200px'}} alt={detailCard.name} />
                  </div>
                  <div>
                    <p>{userCard.name}</p>
                    <p>{detailCard.element}</p>
                    <p>{detailCard.decription}</p>
                    <p>{detailCard.attack}</p>
                    <p>{detailCard.hp}</p>
                    <p>{detailCard.ability}</p>
                  </div>
              </div>
      );
    }

export default Detail;