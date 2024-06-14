import React from "react";

type DayBoostTypes = {
  Type?: boolean;
  Title?: string;
  Text?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  Image?: string;
};

const DayBoost: React.FC<DayBoostTypes> = ({ Type, Title, Text, Image }) => {
  return (
    <button
      style={{ boxShadow: Type ? "0px 0px 10px 0px #F2960E inset" : "" }}
      className={`relative flex flex-row justify-between items-center pr-[10px] w-[350px] h-[60px] bg-[#554835] rounded-[12px] ${
        Type ? "orange-gradient" : "bg-[#554835]"
      }`}
    >
      <div className="z-10 flex pl-[20px] flex-col text-left">
        <p className="z-10 text-[16px]">{Title}</p>
        <p className={`z-10 text-[16px] ${!Type && "opacity-80"}`}>{Text}</p>
      </div>
      <img src={Image} className={`z-10 ${!Type && "opacity-40"}`} />
      {Type && (
        <div className="absolute top-0 left-0 z-0 w-full h-full orange-gradient blur-[8px]" />
      )}
    </button>
  );
};

export default DayBoost;
