import React from "react";
import { Link } from "react-router-dom";
import one from "../../assets/img/1.png";
import two from "../../assets/img/2.png";
import three from "../../assets/img/3.png";
import four from "../../assets/img/4.png";
import five from "../../assets/img/5.png";
import sex from "../../assets/img/6.png";

const menu = (props) => {
  return (
    <Link to={props.path}>
      <img
        className={`h-20 w-20 ${!props.OpenSide && " h-7 w-9"}`}
        src={props.zurag}
        alt=""
      />
      <span
        className={`${!props.OpenSide && "hidden"} origin-left duration-200`}
      >
        {props.text}
      </span>

      {/* <Link>
        <Link to={"/register"}>
          <img
            className={`h-20 w-20 ${!OpenSide && " h-7 w-9"}`}
            src={menu.src}
            alt=""
          />
          <span className={`${!OpenSide && "hidden"} origin-left duration-200`}>
            {menu.title}
          </span>
        </Link>
      </Link> */}
    </Link>
  );
};

export default menu;
