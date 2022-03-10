import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link} from 'react-router-dom';
import apiService from "../services/api.service";
import Delete from "../components/Delete";
// import AddFavorite from "../components/AddFavorite";

function Detail () {
  const [detailCard, setDetailCard] = useState({});
  const { cardId } = useParams();

   useEffect(() => {
    apiService.getDetail(cardId).then(response => {
        setDetailCard(response.data);
        //  const oneCardData = response.data;
        //  setDetailCard(oneCardData);
      })
      .catch(error => {
        console.log(error);
      });
  }, [cardId]);

   return (
              <div>
                <p>{detailCard.name}</p>
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
                    <Delete />
                    {/* <AddFavorite /> */}
                  </div>
              </div>
      );
    }

export default Detail;