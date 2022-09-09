import React from "react";
import { Link } from "react-router-dom";

const menu = (props) => {
  return (
    <li className=" cursor-pointer hover:bg-light-white rounded-md p-2">
      <Link to={props.Link} className=" flex flex-row">
        <img
          className={` h-12 w-14 ${
            !props.OpenSide && " h-5 w-7"
          } mt-1 rounded-full`}
          src={props.Zurag}
          alt=""
        />
        <span
          className={`${
            !props.OpenSide && "hidden"
          } origin-left duration-200 text-xl text-white ml-5 self-center`}
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
    </li>
  );
};

export default menu;
