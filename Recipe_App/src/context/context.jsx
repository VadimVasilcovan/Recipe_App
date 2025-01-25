import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [apiResponse, setApiResponse] = useState([]);
  const [search, setSearch] = useState("");
  const [handleSearch, setHandleSearch] = useState("");
  const [detailsResponse, setDetailsResponse] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  async function FetchData() {
    try {
      const data = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${handleSearch}`
      );
      const response = await data.json();

      setApiResponse(response?.data?.recipes);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    FetchData();
  }, [handleSearch]);


  function handleAddToFavorite(getCurrentItem){
    let copyFavoriteList = [...favoriteList];
    const index = copyFavoriteList.findIndex(item => item.id === getCurrentItem.id)
    if(index === -1){
      copyFavoriteList.push(getCurrentItem)
    }else{
      copyFavoriteList.splice(index)
    }
    setFavoriteList(copyFavoriteList)
  }

  console.log(favoriteList, 'favoriteList')
  return (
    <GlobalContext.Provider
      value={{
        apiResponse,
        setApiResponse,
        search,
        setSearch,
        handleSearch,
        setHandleSearch,
        detailsResponse,
        setDetailsResponse,
        FetchData,
        handleAddToFavorite,
        favoriteList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
