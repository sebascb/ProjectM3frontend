import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams} from 'react-router-dom';
import { AuthContext } from './../context/auth.context';
import apiService from "../services/api.service";

function Profile () {
  const [userProfile, setProfileUser] = useState([]);
  const { userId } = useParams();
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

   return (
              <div>
               <h2>Profile</h2> 
               <p>{userProfile.name}</p>
               <p>{user.name}</p>
               <p>{user.email}</p>
              </div>
      );
  }

export default Profile;