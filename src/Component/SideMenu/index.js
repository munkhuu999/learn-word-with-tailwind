import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../menu";
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

  const hajuunee = () => {
    setOpenSide(!OpenSide);
    props.open();
    console.log(OpenSide);
  };

  return (
    <div
      className={` ${
        OpenSide ? "w-72" : "w-20"
      } duration-300 h-full bg-gray-500 fixed  p-5 pt-8`}
    >
      <img
        className={`absolute top-9 -right-7 w-12 cursor-pointer border border-dark-purple rounded-full ${
          !OpenSide && "rotate-180"
        }`}
        src={leftLogo}
        alt=""
        onClick={hajuunee}
      />
      {/* ----------------menuuu------------------------- */}
      <Link to={"filee"} className=" flex justify-center items-center mb-10">
        <img
          src={logo}
          alt=""
          className={`cursor-pointer duration-500 rounded-full w-28  ${
            OpenSide && "rotate-[360deg]"
          }`}
        />
        {/* ----------------menuuu------------------------- */}
      </Link>
      <ul className=" pt-6">
        <Menu Zurag={one} Link="Ханз1" text="HSK Ханз" OpenSide={OpenSide} />
        <Menu Zurag={two} Link="Ханз2" text="HSK Ханз" OpenSide={OpenSide} />
        <Menu Zurag={three} Link="Ханз3" text="HSK Ханз" OpenSide={OpenSide} />
        <Menu Zurag={four} Link="Ханз4" text="HSK Ханз" OpenSide={OpenSide} />
        <Menu Zurag={five} Link="Ханз5" text="HSK Ханз" OpenSide={OpenSide} />
        <Menu Zurag={sex} Link="Ханз6" text="HSK Ханз" OpenSide={OpenSide} />
        <br />
        <Menu Zurag={user} Link="/user" text="Нэвтрэх" OpenSide={OpenSide} />
        <Menu
          Zurag={register}
          Link="/register"
          text="Бүртгүүлэх"
          OpenSide={OpenSide}
        />
      </ul>
    </div>
  );
};

export default SideBar;
