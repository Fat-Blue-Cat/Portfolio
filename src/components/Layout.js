import React from "react";
import SideBar from "./SideBar";

const Layout = (props) => {
  return (
    <div  className="grid grid-cols-1 md:grid-cols-4 ">
      {/* Sidebar */}
      <div className="col-span-1">
        <SideBar />
      </div>
      
      {/* Main Content */}
      <div className="col-span-1 md:col-span-3 h-[100vh] overflow-y-scroll">
        <div className="bg-white">{props.children}</div>
      </div>
    </div>
  );
};


export default Layout;
