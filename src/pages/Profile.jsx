import React from "react";
import { useState, useEffect, useContext } from "react";
// import { useParams} from 'react-router-dom';
import { AuthContext } from './../context/auth.context';
import apiService from "../services/api.service";

function Profile () {
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
      console.log(response.data);
    }catch(error){
      console.log(error)
    }
  };
  
  useEffect(() => {
    getCardFavorite()
  }, []);

   return (
           <div>
              <h2>Profile</h2> 
              {showFavs.map(fav => <div key={fav._id}>{fav.card.name}</div>)}
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
               <p>{user.name}</p>
               <p>{user.email}</p>
                <p>{user.card}</p>
              </div>
      );
  }

export default Profile;