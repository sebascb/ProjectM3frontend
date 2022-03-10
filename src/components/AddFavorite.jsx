import React from "react";
import { useState, useEffect } from "react";
import apiService from "../services/api.service";
import { useNavigate, useParams } from "react-router-dom";

function AddFavorite () {
  const [addFavoriteCard, setFavoriteCard] = useState({});
  const navigate = useNavigate();
  const { cardId } = useParams();

    useEffect(() => {
      apiService.getDetail(cardId).then((response) => {
          console.log("response.data", response.data);
          setFavoriteCard(response.data);
        })
        .catch(error=>console.log(error))
    }, [cardId]);

  // const handleFavorite = () => {
  //       apiService.favorite(cardId).then(() => {
  //         navigate('/cards');
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  const handleFavorite = e => {
        e.preventDefault();
        apiService.favorite(addFavoriteCard).then(() => {
                navigate('/cards')
            })
            .catch(error => {
                console.log(error)
            })
    }

   return (
    <>
     <div>
        <div>
            <button onClick={handleFavorite}> ADD FAVS {addFavoriteCard.name}</button>
        </div>
      </div>
      {/* <div> 
        <button onClick={handleFavorite}>Add {addFavoriteCard.name} to favorites?</button>
      </div> */}
    </>
  );
}
export default AddFavorite;