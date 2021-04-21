import React from "react";
import sprite from "../sprite.svg";
import "./style.scss";

function IconWithText({ usehref, data, text, col }) {
  return (
    <div className={`detail-item ${col}`}>
      <svg>
        <use href={sprite + usehref} />
      </svg>
      <span className="data">{data}</span>
      <span className="text">{text}</span>
    </div>
  );
}

export default IconWithText;
