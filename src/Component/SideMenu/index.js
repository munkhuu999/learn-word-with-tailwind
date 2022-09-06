import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import leftLogo from "../../assets/img/left.png";
import logo from "../../assets/img/logo.png";
import user from "../../assets/img/user.png";
import register from "../../assets/img/register.png";
import one from "../../assets/img/1.png";
import two from "../../assets/img/2.png";
import three from "../../assets/img/3.png";
import four from "../../assets/img/4.png";
import five from "../../assets/img/5.png";
import sex from "../../assets/img/6.png";

const SideBar = (props) => {
  const [OpenSide, setOpenSide] = useState(true);
  const Menus = [
    { title: "HSK ханз цээжлэх", src: `${one}`, path: "/HSK1" },
    { title: "HSK ханз цээжлэх", src: `${two}`, path: "/HSK2" },
    { title: "HSK ханз цээжлэх", src: `${three}`, path: "/HSK3" },
    { title: "HSK ханз цээжлэх", src: `${four}`, path: "/HSK4" },
    { title: "HSK ханз цээжлэх", src: `${five}`, path: "/HSK5" },
    { title: "HSK ханз цээжлэх", src: `${sex}`, path: "/HSK6" },
    { title: "Нэвтрэх", src: `${user}`, gap: true, path: "/user" },
    { title: "Бүртгүүлэх", src: `${register}`, path: "/register" },
  ];
  const hajuunee = () => {
    setOpenSide(!OpenSide);
    props.open();
  };

  return (
    <div
      className={` ${
        OpenSide ? "w-72" : "w-20"
      } duration-300 w-72 h-screen bg-dark-purple fixed p-5 pt-8`}
    >
      <img
        className={`absolute top-9 -right-7 w-16 cursor-pointer border border-dark-purple rounded-full ${
          !OpenSide && "rotate-180"
        }`}
        src={leftLogo}
        alt=""
        onClick={hajuunee}
      />
      {/* ----------------menuuu------------------------- */}
      <Link to={"###"} className=" flex justify-center items-center mb-10">
        <img
          src={logo}
          alt=""
          className={`cursor-pointer duration-500 rounded-full w-28  ${
            OpenSide && "rotate-[360deg]"
          }`}
        />
        {/* <h1
          className={`text-white origin-left font-medium text-xl duration-300 ${
            !OpenSide && "scale-0"
          }`}
        >
          HSK ханз цээжлэх
        </h1> */}
      </Link>
      <ul className=" pt-6">
        {Menus.map((menu, index) => (
          <li
            className={` cursor-pointer p-2 hover:bg-light-white rounded-md ${
              menu.gap ? "mt-9" : "mt-2"
            }`}
            key={index}
          >
            <Link
              to={"##"}
              className=" flex items-center gap-x-4 text-white text-sm "
            >
              <img
                className={`h-20 w-20 ${!OpenSide && " h-7 w-9"} rounded-full`}
                src={menu.src}
                alt=""
              />
              <span
                className={`${!OpenSide && "hidden"} origin-left duration-200`}
              >
                {menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
