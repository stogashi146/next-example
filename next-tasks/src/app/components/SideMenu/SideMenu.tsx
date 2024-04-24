import React from "react";
import NavList from "./NavList/NavList";

const SideMenu = () => {
  return (
    // <div className="bg-indigo-300">サイドメニュー</div>
    <div className="w-56 pt-8 bg-gray-800 text-white">
      <h1 className="px-4 text-2xl font-bold">NextTasks</h1>
      <NavList />
    </div>
  );
};

export default SideMenu;
