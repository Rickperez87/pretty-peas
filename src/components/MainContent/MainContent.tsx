import React from "react";
import { connect } from "react-redux";
import "./style.scss";
const MainContent = ({ recipe }) => {
  return <div className="main-content">Main</div>;
};

const mapStateToProps = (state) => {
  return { recipe: state.recipe };
};

export default connect(mapStateToProps)(MainContent);
