import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import apiService from "../services/api.service";

function Detail () {
  const [detailCard, setDetailCard] = useState({});
  const [favorite, setFavorite] = useState(false);
  const { cardId } = useParams();
  const navigate = useNavigate();

  const getCardDetail = async () => {
    try {
      const response = await apiService.getDetail(cardId);
      setDetailCard(response.data)
    }catch(error){
      console.log(error)
    }
  };

  const checkIfFavorite = async () => {
    try {
      const response = await apiService.getFavorite(cardId);
      setFavorite(response.data)
    }catch(error){
      console.log(error)
    }
  };

   useEffect(() => {
    getCardDetail();
  }, []);

  const handleDelete = () => {
        apiService.delete(cardId).then(() => {
          navigate('/cards');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleFavorite = e => {
        e.preventDefault();
        apiService.favorite(cardId).then(() => {
                navigate('/profile');
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleUnfavorite = e => {
        e.preventDefault();
        apiService.favorite(cardId).then(() => {
                navigate('/cards');
            })
            .catch(error => {
                console.log(error)
            })
    }

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
                    <button onClick={handleDelete}>Delete</button>
                    {favorite ? <button onClick={handleUnfavorite}>Unfavorite</button> : <button onClick={handleFavorite}>Favorite</button>}
                     <button onClick={checkIfFavorite}>Checkiffav</button>
                  </div>
              </div>
      );
    }

export default Detail;