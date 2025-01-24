import { NavLink } from "react-router-dom";
import Search from "../search";

export default function Navbar() {
  return (
    <div>
      <div>
        <Search/>
      </div>
      <div>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/favorites"}>Favorites</NavLink>
        </li>
      </div>
    </div>
  );
}
