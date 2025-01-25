import { useContext } from "react";
import {GlobalContext} from '../context/context'
import ReceipeCard from "../components/receipe-card/receipe-card";
import '../home-page/home.css'


export default function HomePage() {
  const {apiResponse} = useContext(GlobalContext)
  return <div className="home-page-main-div"><span><ReceipeCard/></span></div>;
}
