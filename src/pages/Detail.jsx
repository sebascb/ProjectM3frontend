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
     <>
       <div>
         <div className='title-card'>
           <h2 className='letter-card'>Pokkemon Detail</h2>
         </div>
         <div className="detailCont">
           <div>
             <img src={detailCard.image} style={{ width: '200px' }} alt={detailCard.name} />
           </div>
           <div className='cont-text'>
             <p>Name: {detailCard.name}</p>
             <p>Element: {detailCard.element}</p>
             <p>Description: {detailCard.description}</p>
             <p>Attack: {detailCard.attack}</p>
             <p>HP: {detailCard.hp}</p>
             <p>Ability: {detailCard.ability}</p>
           </div>
         </div>
         <div className='cont-button'>
           <Link to={`/cards/${cardId}/edit`} class='button-card'>Edit</Link>
           <button onClick={handleDelete} className='button-card'>Delete</button>
           {favorite ? <button onClick={handleUnfavorite} className='button-card'>Unfavorite</button> : <button onClick={handleFavorite} className='button-card'>Favorite</button>}
           <button onClick={checkIfFavorite}>Checkiffav</button>
         </div>
       </div>
     </>
      );
    }

export default Detail;