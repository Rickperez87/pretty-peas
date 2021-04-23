import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";
import "./base.scss";

const App: React.FC<{}> = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
};
export default App;
