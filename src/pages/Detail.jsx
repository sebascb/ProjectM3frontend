import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import apiService from "../services/api.service";

function Detail () {
  const [detailCard, setDetailCard] = useState({});
  const [userPost, setUserPost] = useState({});
  const { id } = useParams();

   useEffect(() => {
    apiService.getDetail(id).then(response => {
        setDetailCard(response.data);
         const { user } = response.data;
        setUserPost(user);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

   return (
              <div>
                  <div>
                    <img src={detailCard.image} style={{ width: '200px'}} alt={detailCard.name} />
                  </div>
                  <div>
                    <h1>{userPost.name}</h1>
                    <h1>{detailCard.element}</h1>
                    <h1>{detailCard.decription}</h1>
                    <h1>{detailCard.attack}</h1>
                    <h1>{detailCard.hp}</h1>
                    <h1>{detailCard.ability}</h1>
                  </div>
              </div>
      );
    }

export default Detail;