import { useContext } from "react";
import {GlobalContext} from '../context/context'
import ReceipeCard from "../components/receipe-card/receipe-card";



export default function HomePage() {
  const {apiResponse} = useContext(GlobalContext)
  return <div><ReceipeCard/></div>;
}
