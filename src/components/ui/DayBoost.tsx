import React from "react";

type DayBoostTypes = {
  Type?: boolean;
  Title?: string;
  Text?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  Image?: string;
};

const DayBoost: React.FC<DayBoostTypes> = ({}) => {
  return (
    <button className="flex flex-row justify-between items-center pr-[10px] w-[350px] h-[60px] bg-[#554835] rounded-[12px]">
      <div className="flex pl-[20px] flex-col text-left">
        <p className="text-[16px]">Turbo AIM</p>
        <p className="text-[16px]">3/3</p>
      </div>
      <img src="public\static\img\boost\AWP.png" />
    </button>
  )
}

export default DayBoost
