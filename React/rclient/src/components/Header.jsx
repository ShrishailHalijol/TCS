import React from "react";
import {
  NavLink,
} from "react-router-dom";

export default function Header() {
  const navigate = () => {
    window.location.href = "http://localhost:49685/";
  };

  return (
    <div
      style={{
        backgroundColor: "#223344",
        height: 50,
        vertialAlign: "middle",
        display: "flex",
        alignItems: "center"
      }}
    >
      <NavLink to="/"> Home </NavLink> |
      <NavLink to="/register"> Register </NavLink> |
      <NavLink to="/login"> Login </NavLink> |
      <NavLink to="" onClick={navigate}> HTML </NavLink>
    </div>
  );
}
