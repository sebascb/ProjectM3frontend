import React from "react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from './../context/auth.context';
import apiService from "../services/api.service";
import pikachuImg from "./../assets/pikachu.png";
import { Link } from "react-router-dom";

function Profile() {
  const [showFavs, setShowFavs] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const { user, isLoading } = useContext(AuthContext);

  const getCurrentUser = () => {
    if (!isLoading && user) {
      setCurrentUser(user);
    }
  }

  const getCardFavorite = async () => {
    try {
      const response = await apiService.getProfile();
      setShowFavs(response.data)
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getCardFavorite()
    getCurrentUser();
  }, []);

  return (
    <div>
      <div className="title-profile">
        <h2 className="letter-profile">Profile</h2>
        <div className="alakazam-crt">
          <img className="pikachu-profile" src={pikachuImg} alt="pikachu image"></img>
        </div>
      </div>
      <div className="user-profile">
        <p>{currentUser.name}</p>
        <p>{currentUser.email}</p>
      </div>
      <div className="contiImage">
      {showFavs.map(fav => {
        return (
          <div key={fav.card._id} className="contImage">
            <Link to={`/cards/${fav.card._id}`}>
            <div className="isImage">
              <img className="imageCard" src={fav.card.image} alt={fav.card.name} />
              <h3>{fav.card.name}</h3>
            </div>
          </Link>
          </div>
        )
      })
      }
      </div>
    </div>
  );
}

export default Profile;