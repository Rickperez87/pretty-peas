import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Pretty Pea's</h1>
      <Searchbar />
    </header>
  );
};

export default Header;
