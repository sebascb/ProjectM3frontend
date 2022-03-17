import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
// import { useParams} from 'react-router-dom';
import { AuthContext } from './../context/auth.context';
import apiService from "../services/api.service";

function Profile() {
  //const [userProfile, setProfileUser] = useState([]);
  const [showFavs, setShowFavs] = useState([]);
  //const { userId } = useParams();
  // const { cardId } = useParams();
  const { user } = useContext(AuthContext);
  // const [favorite, setFavorite] = useState(false);
  const { cardId } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   apiService
  //     .getMe()
  //     .then(response => {
  //       setProfileUser(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [userId]);

  const getCardFavorite = async () => {
    try {
      const response = await apiService.getProfile();
      setShowFavs(response.data)
      console.log(showFavs);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getCardFavorite()
  }, []);

  // const checkIfFavorite = async () => {
  //   try {
  //     const response = await apiService.getFavorite(cardId);
  //     setFavorite(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  // useEffect(() => {
  //   checkIfFavorite()
  // }, []);

  const handleFavorite = e => {
    e.preventDefault();   
    // checkIfFavorite();
    apiService.favorite(cardId).then(() => {
      navigate('/profile');
    })
      .catch(error => {
        console.log(error)
      })
  }

  const handleUnfavorite = e => {
    e.preventDefault();
    // checkIfFavorite();
    apiService.deleteFavorite(cardId).then(() => {
      console.log("He pasado el puto apiservice");
      navigate('/cards');
    })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
      {showFavs.map(fav => {
        return (
          <div key={fav.card._id} className="detailCont">
            <h3>{fav.card.name}</h3>
            <div>
              <img src={fav.card.image} style={{ width: '200px' }} alt={fav.card.name} />
            </div>
            <p>{fav.card.element}</p>
            <p>{fav.card.description}</p>
            <p>{fav.card.attack}</p>
            <p>{fav.card.hp}</p>
            <p>{fav.card.ability}</p>
            <div className='cont-button'>
              <Link to={`/cards/${cardId}/edit`} className='button-card'>Edit</Link>
              {/* {favorite ? <button onClick={handleUnfavorite} className='button-card'>Unfavorite</button> : <button onClick={handleFavorite} className='button-card'>Favorite</button>}
                   */}
              <button onClick={handleUnfavorite} className='button-card'>Unfavorite</button>
              <button onClick={handleFavorite} className='button-card'>Favorite</button>
            </div>
          </div>
        )
      })
      }
      
    </div>
  );
}

export default Profile;