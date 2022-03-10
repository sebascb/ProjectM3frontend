import React from "react";
import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import apiService from "../services/api.service";

function Profile () {
  const [user, setProfileUser] = useState([]);
  const { userId } = useParams();

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
               <p>{user.name}</p>
               <p>{user.email}</p>
              </div>
      );
  }

export default Profile;