import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [apiResponse, setApiResponse] = useState([]);
  const [search, setSearch] = useState("");
  const [handleSearch, setHandleSearch] = useState("");

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

  return (
    <GlobalContext.Provider
      value={{
        apiResponse,
        setApiResponse,
        search,
        setSearch,
        handleSearch,
        setHandleSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
