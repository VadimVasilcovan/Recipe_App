import "../receipe-card/receipe-card.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import { NavLink } from "react-router-dom";

export default function ReceipeCard() {
  const { apiResponse, FetchData } = useContext(GlobalContext);

  return (
    <div>
      {apiResponse.map((recipe) => (
        <div key={recipe.id} className="card-main-div">
          <p>{recipe.title}</p>
          <img className="img-card-holder" src={recipe?.image_url} />
          <NavLink to={`/details/${recipe?.id}`}>Recipe Details</NavLink>
          <button className="add-to-favorites-button">Add to favorites</button>
        </div>
      ))}
    </div>
  );
}
