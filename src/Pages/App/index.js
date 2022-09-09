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
  const [openside, setopenide] = useState(true); // hajuu taliig neeh

  return (
    <div>
      {/* -------------------------------Хажуу талынн цэс------------------------------------- */}
      <div className=" flex flex-row">
        <aside className={`${openside ? "w-72" : "w-20"} duration-300`}>
          <SideMenu open={() => setopenide(!openside)} />
        </aside>
        {/* ---------------------------content----------------------------------- */}
        <main className=" h-full bg-blue-200 p-7 text-2xl font-semibold flex-1">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
