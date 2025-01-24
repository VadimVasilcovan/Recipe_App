import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div></div>
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
