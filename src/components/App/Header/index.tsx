import React from "react";
import Searchbar from "./Searchbar";
import sprite from "#sprite";
import "./style.scss";

const Header: React.FC<{}> = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <svg className="spoon-knife-icon">
          <use href={sprite + "#icon-spoon-knife"} />
        </svg>
        Pretty Pea's
      </h1>
      <Searchbar />
    </header>
  );
};

export default Header;
