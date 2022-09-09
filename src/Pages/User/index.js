import React from "react";

const user = () => {
  return (
    <div className=" h-screen flex flex-col items-center pt-12">
      <h1 className=" ">Нэвтрэх</h1>
      <div className=" border border-blue-600 p-20">
        <form className=" mt-16 uppercase">
          <label>нэвтрэх нэр</label>
          <br />
          <input />
          <br />
          <label>пасспорт</label>
          <br />
          <input />
          <br />
          <button>Нэвтрэх</button>
        </form>
      </div>
    </div>
  );
};

export default user;
