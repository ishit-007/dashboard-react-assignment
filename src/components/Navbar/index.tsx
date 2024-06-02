import React from "react";
import notif from "../../assets/notif.svg";
import search from "../../assets/Search_icon.svg";

//props
interface NavbarProps {
  profilePicture: string;
}

export const Navbar = ({ profilePicture }: NavbarProps) => {
  let profilePic: any;
  if (profilePicture === "") {
    profilePic = localStorage.getItem("profilePicture");
  } else {
    profilePic = profilePicture;
  }

  console.log(profilePic);

  return (
    <div className="flex items-center justify-between w-full font-montserrat">
      <div className="flex text-2xl font-bold font-montserrat">Dashboard</div>
      <div className="flex gap-x-[30px]">
        <div className="relative flex items-center">
          <input
            className="rounded-[10px] p-3 w-[11.25rem] h-[30px]"
            type="text"
            placeholder="Search..."
          />
          <img
            src={search}
            className="absolute right-1 w-3 mr-2.5 h-3 "
            alt=""
          />
        </div>
        <img src={notif} className="" alt="" />
        <img src={profilePic} className="rounded-full w-7 h-7" alt="" />
      </div>
    </div>
  );
};
