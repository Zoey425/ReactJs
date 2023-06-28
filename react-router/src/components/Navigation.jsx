import { Link, NavLink } from "react-router-dom";

export default function Navigation() {

  return (
    <>
    <ul>
      <li><NavLink to="/">HOME</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topic">Topic</Link></li>
    </ul>
    </>
  );
}