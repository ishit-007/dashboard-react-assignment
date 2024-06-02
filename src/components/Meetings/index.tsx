import React from "react";
import { tagColor } from "../../constants/constants";

//props
interface MeetingsProps {
  heading: string;
  time: string;
  location: string;
  index: number;
}

export const Meetings = ({ heading, time, location, index }: MeetingsProps) => {
  return (
    <div className="flex items-center gap-x-3">
      <div
        style={{ backgroundColor: tagColor[index] }}
        className="w-[5px] h-[4.125rem] bg-red-400"
      ></div>
      <div className="flex flex-col">
        <div className="text-sm font-bold font-lato text-[#666]">{heading}</div>
        <div className="text-xs text-[#999] font-lato">{time}</div>
        <div className="text-xs text-[#999] font-lato">{location}</div>
      </div>
    </div>
  );
};
