import React from "react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from './../context/auth.context';
import apiService from "../services/api.service";

function Profile() {
  const [showFavs, setShowFavs] = useState([]);
  const { user } = useContext(AuthContext);

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
      <p>{user.name}</p>
      <p>{user.email}</p>
      {showFavs.map(fav => {
        return (
          <div key={fav.card._id} className="contImage">
              <div className="isImage">
                <img className="imageCard" src={fav.card.image} alt={fav.card.name} />
                <h3>{fav.card.name}</h3>
              </div>
          </div>
        )
      })
      }
    </div>
  );
}

export default Profile;