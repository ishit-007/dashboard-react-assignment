import React from "react";
import camera from "../../assets/camera.svg";
import likes from "../../assets/likes.svg";
import transaction from "../../assets/total_transactions_icon.svg";
import tags from "../../assets/tags.svg";
import AnimatedNumbers from "react-animated-numbers";

//props
interface CardsProps {
  index: number;
  title: string;
  amount: number;
}

export const Cards = ({ index, title, amount }: CardsProps) => {
  const [num, setNum] = React.useState(amount);

  const cardInfo = [
    {
      color: "#DDEFE0",
      icon: camera,
    },
    {
      color: "#F4ECDD",
      icon: transaction,
    },
    {
      color: "#EFDADA",
      icon: likes,
    },
    {
      color: "#DEE0EF",
      icon: tags,
    },
  ];

  return (
    <div
      style={{ backgroundColor: cardInfo[index].color }}
      className="flex flex-col w-[13.75rem] h-32  rounded-[20px]"
    >
      <div className="flex justify-end py-4 pr-6">
        <img src={cardInfo[index].icon} className="self-end" alt="" />
      </div>
      <div className="px-5">
        <div className="text-sm font-lato">{title}</div>
        <div className="flex">
          {index === 0 && <span className="text-2xl font-bold">$</span>}
          <div className="text-2xl font-bold">
            {
              <AnimatedNumbers
                includeComma={true}
                animateToNumber={num}
                fontStyle={{ fontSize: 24 }}
                locale="en-US"
                configs={[
                  { mass: 1, tension: 130, friction: 40 },
                  { mass: 2, tension: 140, friction: 40 },
                  { mass: 3, tension: 130, friction: 40 },
                ]}
              ></AnimatedNumbers>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
