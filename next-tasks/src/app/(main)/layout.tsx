import React from "react";
import SideMenu from "../components/SideMenu/SideMenu";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    // 画面高さ一杯に広げる
    <div className="flex h-screen">
      <SideMenu />
      {/* 横幅一杯に広げる、スクロールできるようにする */}
      <main className="bg-red-300 flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
