import React from "react";
import Header from "../components/Header";
import SidebarOpt from "../components/SidebarOpt";
import Bhours from "../components/Bhours";
import Service from "../components/Service";

const Settings = () => {
  return (
    <div>
      <Header />
      <div className="flex relative">
        <SidebarOpt />
        <div className="px-[80px] py-5 overflow-y-hidden">
          <h1 className="text-[27px] text-[#3F26A5] ">Settings</h1>
        <Bhours />
        <Service/>
        </div>
        
      </div>
    </div>
  );
};

export default Settings;
