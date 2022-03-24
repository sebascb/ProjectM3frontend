import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import apiService from "../services/api.service";

function Detail() {
  const [detailCard, setDetailCard] = useState({});
  const [favorite, setFavorite] = useState(false);
  const { cardId } = useParams();
  const navigate = useNavigate();

  const getCardDetail = async () => {
    try {
      const response = await apiService.getDetail(cardId);
      setDetailCard(response.data)
    } catch (error) {
      console.log(error)
    }
  };
  
  const checkIfFavorite = async () => {
    try {
      const response = await apiService.getFavorite(cardId);
      if (response.data.length > 0) {
        setFavorite(true);
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getCardDetail();
    checkIfFavorite();
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
      setFavorite(true);
    })
      .catch(error => {
        console.log(error)
      })
  }

  const handleUnfavorite = e => {
    e.preventDefault();
    apiService.deleteFavorite(cardId).then(() => {
      setFavorite(false);
    })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <div>
        <div className='title-detail'>
          <h2 className='letter-detail'>Pokemon Detail</h2>
        </div>
        <div className="detailCont">
          <div>
            <img src={detailCard.image} style={{ width: '200px' }} alt={detailCard.name} />
          </div>
          <div className='cont-text-detail'>
            <p><strong>Name:</strong> {detailCard.name}</p>
            <p><strong>Element:</strong> {detailCard.element}</p>
            <p><strong>Description:</strong> {detailCard.description}</p>
            <p><strong>Attack:</strong> {detailCard.attack}</p>
            <p><strong>HP:</strong> {detailCard.hp}</p>
            <p><strong>Ability:</strong> {detailCard.ability}</p>
          </div>
        </div>
        <div className='cont-button-detail'>
          <Link to={`/cards/${cardId}/edit`} className='button-card'>Edit</Link>
          <button onClick={handleDelete} className='button-card'>Delete</button>
          {favorite ? <button onClick={handleUnfavorite} className='button-card'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg></button> : <button onClick={handleFavorite} className='button-card'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg></button>}
        </div>
      </div>
    </>
  );
}

export default Detail;