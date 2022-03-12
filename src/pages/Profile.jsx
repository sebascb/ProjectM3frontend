import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams} from 'react-router-dom';
import { AuthContext } from './../context/auth.context';
import apiService from "../services/api.service";

function Profile () {
  const [userProfile, setProfileUser] = useState([]);
  const [showFavs, setShowFavs] = useState([]);
  const { userId } = useParams();
  const { cardId } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    apiService
      .getProfile(userId)
      .then(response => {
        setProfileUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [userId]);

const getCardFavorite = async () => {
    try {
      const response = await apiService.getFavorite(cardId);
      setShowFavs(response.data)
    }catch(error){
      console.log(error)
    }
  };
  
  useEffect(() => {
    getCardFavorite();
  }, [cardId]);

   return (
           <div>
              <h2>Profile</h2> 
               <p>{showFavs.name}</p>
                 <div>
                   <img src={showFavs.image} style={{ width: '200px'}} alt={showFavs.name} />
                 </div>
                 <div>
                   <p>{showFavs.element}</p>
                   <p>{showFavs.decription}</p>
                   <p>{showFavs.attack}</p>
                   <p>{showFavs.hp}</p>
                   <p>{showFavs.ability}</p>
                   </div>
               <p>{userProfile.name}</p>
               <p>{user.name}</p>
               <p>{user.email}</p>
                <p>{user.card}</p>
              </div>
      );
  }

export default Profile;