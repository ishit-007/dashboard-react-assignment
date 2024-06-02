import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import chevron_down from "../../assets/chevron-down.svg";

const data = [
  { name: "Group A", value: 31 },
  { name: "Group B", value: 55 },
  { name: "Group C", value: 14 },
];

const COLORS = ["#EE8484", "#98D89E", "#F6DC7D"];

export const PieGraph = () => {
  return (
    <div className=" bg-white font-montserrat rounded-[20px]  w-[30rem]">
      <div className="flex pt-[30px] px-10 justify-between">
        <div className="text-lg font-bold font-montserrat">Top Products</div>
        <div className="flex items-center gap-x-[5px]">
          <div className="text-sm text-[#858585]">May-June 2021</div>
          <img
            src={chevron_down}
            className="w-2 cursor-pointer h-[5px]"
            alt="hello"
          />
        </div>
      </div>
      <div className="flex items-center px-10 gap-x-5">
        <div>
          <ResponsiveContainer width={200} height={200}>
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                //   cx={200}
                //   cy={200}
                labelLine={false}
                //   outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div className="inline-flex items-center">
              <span className="inline-block w-[11px] h-[11px] mr-2 bg-[#EE8484] rounded-full"></span>
              <span className="text-sm font-bold">Basic Tees</span>
            </div>
            <div className="ml-5 text-xs font-lato ">55%</div>
          </div>
          <div className="flex flex-col">
            <div className="inline-flex items-center">
              <span className="inline-block w-[11px] h-[11px] mr-2 bg-[#98D89E] rounded-full"></span>
              <span className="text-sm font-bold">Custom Short Pants</span>
            </div>
            <div className="ml-5 text-xs font-lato ">31%</div>
          </div>
          <div className="flex flex-col">
            <div className="inline-flex items-center">
              <span className="inline-block w-[11px] h-[11px] mr-2 bg-[#F6DC7D] rounded-full"></span>
              <span className="text-sm font-bold">Super Hoodies</span>
            </div>
            <div className="ml-5 text-xs font-lato ">14%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
