import React from "react";
import {
  Cards,
  LineGraph,
  Navbar,
  PieGraph,
  Scheduler,
  Sidebar,
} from "../../components";
import { cardsData } from "../../constants/constants";

//props
interface DashboardProps {
  profilePicture: string;
}

export const Dashboard = ({ profilePicture }: DashboardProps) => {
  return (
    <div className="flex  w-[100%] h-full pl-10 pb-10 pt-10 ">
      <Sidebar />
      <div className="flex  lg:w-[80vw] 2xl:w-[88vw] flex-col pr-[60px] gap-6 justify-between pt-5 pl-10">
        <Navbar profilePicture={profilePicture} />
        <div className="flex flex-wrap justify-between w-full gap-y-4 gap-x-9">
          {cardsData.map((card, index) => (
            <Cards
              key={index}
              index={index}
              title={card.title}
              amount={card.amount}
            />
          ))}
        </div>
        <LineGraph />
        <div className="flex flex-wrap justify-center xl:flex-nowrap xl:justify-between gap-y-4 gap-x-10">
          <PieGraph />
          <Scheduler />
        </div>
      </div>
    </div>
  );
};
