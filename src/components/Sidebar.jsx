import React, { useState } from "react";
import menu from "../assets/menu.png";
import dashboard from "../assets/dashboard.png";
import appointment from "../assets/appointment.png";
import announcement from "../assets/announcement.png";
import settings from "../assets/settings.png";
import profile from "../assets/admin-photo.png";
import logout from "../assets/logout-icon.png";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleMenu = () => {
    setOpen(!open);
    console.log("menu clicked");
  };
  return (
      <div
        className={`h-screen  flex flex-col items-center border-r cursor-pointer pt-5 pl-3 pr-3 width-responsive
         `}
      >
       
          <div
            className={`flex w-[220px] h-[40px]  items-center
            rounded-md  mt-2 pt-3 pr-1 pl-1 sidebar-menu
             ${
               open ? "w-[260px] pl-[32px]" : "w-[60px] flex justify-center "
             } relative duration-300 `}
          >
            <div className="flex justify-start items-center">
              <img src={menu} className="h-[16px] " onClick={handleMenu} />
            </div>
          </div>

          <div
            className={`flex  h-[48px] bg-[#78C1F3] items-center    w-[190px] mt-[10px]
            rounded-md sidebar-btn
             ${
               open ? "w-[190px] items-center" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
          >
            <div className="flex">
            <Link to="/dashboard" className="menu-responsive">
              <img src={dashboard} className={`w-[18px] h-[18px] ${open ? "ml-0": "ml-3" }`} />
              
                <h3 className={`${!open && "hidden"} text-[15px] `} style={{fontFamily:"Arial"}}>Dashboard</h3>
              </Link>
            </div>
          </div>
          <div
             className={`flex  h-[48px] bg-[#78C1F3] items-center    w-[190px] mt-[10px]
             rounded-md  sidebar-btn
             ${
               open ? "w-[190px] items-center" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
          >
            <div className="menu-responsive">
             
              <img src={appointment} className={`w-[18px] h-[18px] ${open ? "ml-0": "ml-3" }`} />
             
              <h3 className={`${!open && "hidden"} text-[15px]`} style={{fontFamily:"Arial"}}>Appointment</h3>
             
            </div>
          </div>
          <div
            className={`flex  h-[48px] bg-[#78C1F3] items-center    w-[190px] mt-[10px]
            rounded-md  sidebar-btn
             ${
               open ? "w-[190px] items-center" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
          >
            <div className="flex">
            <Link to="/announcement" className="menu-responsive app-btn">
              <img src={announcement} className={`w-[18px] h-[18px] ${open ? "ml-0": "ml-3" }` } />
              
              <h3 className={`${!open && "hidden"} text-[15px]`} style={{fontFamily:"Arial"}}>Announcement</h3>
              </Link>
            </div>
          </div>
          <div
              className={`flex  h-[48px] bg-[#78C1F3] items-center    w-[190px] mt-[10px]
              rounded-md sidebar-btn
             ${
               open ? "w-[190px] items-center" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
          >
            <div className="flex justify-center gap-4 items-center ">
            <Link to="/settings"  className="menu-responsive sett-btn">
              <img src={settings} className={`w-[18px] h-[18px] ${open ? "ml-0": "ml-3" }`} />
              
                <h3 className={`${!open && "hidden"}  text-[15px]`} style={{fontFamily:"Arial"}}>Settings</h3>{" "}
              </Link>
            </div>
          </div>
          <div className="sidebar-bottom">
          <div
             className={`flex  h-[48px] bg-white items-center    w-[190px] mt-[10px]
             rounded-md p-[20px] sidebar-btn
             ${
               open ? "w-[190px] items-center" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
          >
              <div className="flex justify-center gap-3 items-center">
                <img src={profile} className={`w-[20px] h-[20px] ${open ? "ml-0": "ml-3" }`} />
                <h3 className={`${!open && "hidden"} `}>Profile</h3>
              </div>
            </div>
            <div
                className={`flex  h-[48px] bg-white items-center    w-[190px] mt-[10px]
                rounded-md p-[20px] sidebar-btn
             ${
               open ? "w-[190px]" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
            >
              <div className="flex  justify-center gap-3 items-center">
                <img src={logout} className={`w-[20px] h-[20px] ${open ? "ml-0": "ml-3" }`} />
                <h3 className={`${!open && "hidden"}  `}>Logout</h3>
              </div>
            </div>
          </div>
        </div>
     
    
  );
};

export default Sidebar;
