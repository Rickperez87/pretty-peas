import React from "react";
import sprite from "../sprite.svg";
import "./style.scss";

function IconWithText({ usehref, data, text }) {
  return (
    <div className="detail-item">
      <svg>
        <use href={sprite + usehref} />
      </svg>
      <span className="data">{data}</span>
      <span className="text">{text}</span>
    </div>
  );
}

export default IconWithText;
