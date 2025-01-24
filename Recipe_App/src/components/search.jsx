import { useContext } from "react";
import { GlobalContext } from "../context/context";

export default function Search() {
    const {search, setSearch, handleSearch, setHandleSearch} = useContext(GlobalContext)

    const searchRecipeFun = (e) => {
        setSearch(e.target.value)
    }

    const SubmitSearchFun = () => {
        setHandleSearch(search)
        console.log(handleSearch)
    }
  return (
    <div>
      <input type="text"  
      onChange={searchRecipeFun}/>
      <button onClick={SubmitSearchFun}>Search</button>
    </div>
  );
}
