import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "flex",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "",
  textDecoration: "none",
  color: "blue",
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" style={linkStyles}>
        Home
      </NavLink>

      <NavLink to="/movies" style={linkStyles}>
        Movies
      </NavLink>
      <NavLink to="/directors" style={linkStyles}>
        Directors
      </NavLink>
      <NavLink to="/actors" style={linkStyles}>
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
