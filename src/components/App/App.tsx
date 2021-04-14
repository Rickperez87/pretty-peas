import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import "./base.scss";

export default function App() {
  return (
    <>
      <div className="container">
        <h1>Pretty Pea's</h1>
        <Searchbar />
      </div>
    </>
  );
}
