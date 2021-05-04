import React from "react";
import sprite from "#assets/sprite.svg";
import "./style.scss";

interface Props {
  usehref?: any;
  data: any;
  text: string;
  col?: string | null;
}

const IconWithText: React.FC<Props> = ({ usehref, data, text, col }) => {
  return (
    <div className={`detail-item ${col}`}>
      <svg>
        <use href={sprite + usehref} />
      </svg>
      <span className="data">{data}</span>
      <span className="text">{text}</span>
    </div>
  );
};

export default IconWithText;
