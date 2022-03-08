import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import apiService from "../services/api.service";

function Detail () {
  const [detailCard, setDetailCard] = useState({});
  // const [userCard] = useState({});
  const { cardId } = useParams();

   useEffect(() => {
    apiService.getDetail(cardId).then(response => {
        setDetailCard(response.data);
        //  const { user } = response.data;
        //  setUserCard(user);
        //  const oneCardData = response.data;
        //  setDetailCard(oneCardData);
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
                    <p>{detailCard.element}</p>
                    <p>{detailCard.decription}</p>
                    <p>{detailCard.attack}</p>
                    <p>{detailCard.hp}</p>
                    <p>{detailCard.ability}</p>
                    <Link to={`/cards/${cardId}/edit`}>Edit</Link>
                    <Link to={`/cards/${cardId}/delete`}>Delete</Link>
                  </div>
              </div>
      );
    }

export default Detail;