import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import "./style.scss";
import "#scss/main.scss";

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
