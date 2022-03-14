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
              {showFavs.map(fav => <div key={fav._id}>
              <h3>{fav.name}</h3>
                 <div>
                   <img src={fav.image} style={{ width: '200px'}} alt={fav.name} />
                 </div>
                   <p>{fav.element}</p>
                   <p>{fav.description}</p>
                   <p>{fav.attack}</p>
                   <p>{fav.hp}</p>
                   <p>{fav.ability}</p>
              </div>)}
               <p>{user.name}</p>
               <p>{user.email}</p>
              </div>
      );
  }

export default Profile;