import React from "react";
import chevron_down from "../../assets/chevron-right.svg";
import { Meetings } from "../Meetings";
import { dummyMeetingsData } from "../../constants/constants";

export const Scheduler = () => {
  return (
    <div className=" bg-white font-montserrat rounded-[20px]  w-[30rem]">
      <div className="flex pt-[30px] px-10 justify-between">
        <div className="text-lg font-bold font-montserrat">
          Today’s schedule
        </div>
        <div className="flex items-center gap-x-[5px]">
          <div className="text-sm text-[#858585]">See All</div>
          <img
            src={chevron_down}
            className="w-3 h-2 cursor-pointer"
            alt="hello"
          />
        </div>
      </div>
      <div className="flex items-center px-10 pt-6 pb-6 gap-x-5">
        <div className="flex flex-col gap-y-4">
          {dummyMeetingsData.map((meeting, index) => (
            <Meetings
              heading={meeting.heading}
              time={meeting.time}
              location={meeting.location}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
