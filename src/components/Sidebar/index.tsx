import React from "react";
import dashboard_icon from "../../assets/dashboard_icon.svg";
import transactions_icon from "../../assets/transaction_icon.svg";
import schedules_icon from "../../assets/schedule_icon.svg";
import users_icon from "../../assets/user_icon.svg";
import settings_icon from "../../assets/setting_icon.svg";

interface SidebarProps{
  handleOpen:()=>void;
}
export const Sidebar = ({handleOpen}:SidebarProps) => {
  const handleTabClick = (e: any) => {
    handleOpen();
    const ele = e.target as HTMLDivElement;
    const tabs = document.getElementById("tabs");
    tabs?.childNodes.forEach((child) => {
      const childEle = child.childNodes[1] as HTMLDivElement;
      childEle.classList.remove("font-bold");
    });
    ele.classList.add("font-bold");
  };

  return (
    <div className="rounded-[30px] min-w-[13rem] lg:w-[20vw]  lg:max-w-[17.5rem]   bg-black">
      <div className="flex flex-col gap-y-[60px] justify-between text-white h-full py-14 px-7 custom:px-14 2xl:px-7 h-100">
        <div className=" flex flex-col gap-y-[60px]">
          <div className="text-4xl font-bold cursor-pointer font-montserrat">
            Board.
          </div>
          <div
            id="tabs"
            className="flex flex-col text-lg cursor-pointer gap-y-10 font-montserrat"
          >
            <div className="flex hover:font-bold gap-x-5">
              <img src={dashboard_icon} alt="dashboard" />
              <div onClick={handleTabClick}>Dashboard</div>
            </div>
            <div className="flex hover:font-bold gap-x-5">
              <img src={transactions_icon} alt="dashboard" />
              <div onClick={handleTabClick}>Transactions</div>
            </div>
            <div className="flex hover:font-bold gap-x-5">
              <img src={schedules_icon} alt="dashboard" />
              <div onClick={handleTabClick}>Schedule</div>
            </div>
            <div className="flex hover:font-bold gap-x-5">
              <img src={users_icon} alt="dashboard" />
              <div onClick={handleTabClick}>Users</div>
            </div>
            <div className="flex hover:font-bold gap-x-5">
              <img src={settings_icon} alt="dashboard" />
              <div onClick={handleTabClick}>Settings</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-sm font-montserrat gap-y-5">
          <div className="hover:font-bold">Help</div>
          <div className="hover:font-bold">Contact Us</div>
        </div>
      </div>
    </div>
  );
};
