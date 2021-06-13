import React from "react";
import sprite from "~/assets/sprite.svg";
import "./style.scss";

interface Props {
  usehref?: any;
  func?: () => any;
}
const Icon: React.FC<Props> = ({ usehref, func }) => {
  return (
    <div className="icon" onClick={() => func()}>
      <svg>
        <use href={sprite + usehref} />
      </svg>
    </div>
  );
};

export default Icon;
