import React from "react";
import sprite from "~/assets/sprite.svg";
import "./style.scss";

interface Props {
  usehref?: any;
}

const Icon: React.FC<Props> = ({ usehref }) => {
  return (
    <div className="icon">
      <svg>
        <use href={sprite + usehref} />
      </svg>
    </div>
  );
};

export default Icon;
