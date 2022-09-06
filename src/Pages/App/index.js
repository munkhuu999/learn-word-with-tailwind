import "./App.module.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Toolbar from "../../Component/Toolbar";
import SideMenu from "../../Component/SideMenu";
import Content from "../../Component/Content";
import FooterContent from "../../Component/FooterContent";
import User from "../User";
import Register from "../register";

const App = () => {
  const [openside, setpenide] = useState(true); // hajuu taliig neeh

  return (
    <div>
      {/* -------------------------------Хажуу талынн цэс------------------------------------- */}
      <div className=" flex flex-row">
        <aside className={`${openside ? "w-72" : "w-20"} duration-300`}>
          <SideMenu open={() => setpenide(!openside)} />
        </aside>
        {/* ---------------------------content----------------------------------- */}
        <main className=" bg-red-500 p-7 text-2xl font-semibold flex-1">
          Content
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/user" element={<User />} />
          </Routes>
          {/* <User />
          <Register /> */}
        </main>
      </div>
    </div>
  );
};

export default App;
