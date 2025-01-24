import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext(null)

export default function GlobalState ({children}) {
    const [apiResponse, setApiResponse] = useState([])


    async function FetchData () {
        try{
            const data = await fetch (`https://forkify-api.herokuapp.com/api/v2/recipes?search=apple`)
            const response = await data.json()

            if(data?.data?.response){
                setApiResponse(response)
            }
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        FetchData()
    }, [])
    return (<GlobalContext.Provider
    value={{}}
    >
        {children}
    </GlobalContext.Provider>)
}