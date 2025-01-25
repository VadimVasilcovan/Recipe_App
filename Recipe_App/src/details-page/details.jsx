import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/context";

export default function Details() {
  const { id } = useParams();
  const { detailsResponse, setDetailsResponse } = useContext(GlobalContext);

  async function FetchDetails() {
    try {
      const dataDetails = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const dataResponse = await dataDetails.json();
      setDetailsResponse(dataResponse);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    FetchDetails();
  }, [id]);

  const recipe = detailsResponse?.data?.recipe;
  return (
    <div>
      <h1>{recipe?.title}</h1>
      <img src={recipe?.image_url} alt={recipe?.title} />
      <p>Publisher: {recipe?.publisher}</p>
      <p>Cooking Time: {recipe?.cooking_time} minutes</p>
      <p>Servings: {recipe?.servings}</p>
      {recipe?.ingredients?.map((ingredient, index) => (
        <li key={index}>
          <span>
            {ingredient?.quantity} {ingredient?.unit}
          </span>
          <span>{ingredient.description}</span>
        </li>
      ))}
      <button>Add to favorites </button>
    </div>
  );
}
