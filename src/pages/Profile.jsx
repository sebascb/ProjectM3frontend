import React from "react";
import { useState, useEffect, useContext } from "react";
// import { useParams} from 'react-router-dom';
import { AuthContext } from './../context/auth.context';
import apiService from "../services/api.service";

function Profile() {
  //const [userProfile, setProfileUser] = useState([]);
  const [showFavs, setShowFavs] = useState([]);
  //const { userId } = useParams();
  // const { cardId } = useParams();
  const { user } = useContext(AuthContext);

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

  return (
    <div>
      <h2>Profile</h2>
      {showFavs.map(fav => {
        return (
          <div key={fav.card._id}>
            <h3>{fav.card.name}</h3>
            <div>
              <img src={fav.card.image} style={{ width: '200px' }} alt={fav.card.name} />
            </div>
            <p>{fav.card.element}</p>
            <p>{fav.card.description}</p>
            <p>{fav.card.attack}</p>
            <p>{fav.card.hp}</p>
            <p>{fav.card.ability}</p>
          </div>
        )
      })
      }
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default Profile;