// import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";
import Balance from "../components/ui/Balance";
import Button from "../components/ui/Button";
import Progress from "../components/ui/Progress";

import Bg from "/static/img/backgrounds/main-bg.png";
import Navigation from "../components/Navigation";
import DayBoost from "../components/ui/DayBoost";
import Boosters from "../components/ui/Boosters";
// import TapImg from "/tap-img.png";

const HomePage = () => {

  return (
    <main className="base-page-style relative px-5 items-center">
      <img
        className="absolute -z-10 h-full w-full object-center object-cover"
        src={Bg}
        alt="bg"
      />
      <div className="flex items-center flex-col gap-[20px] mt-[65px]">
        <p className="text-[18px] opacity-[80%]">Ваш баланс</p>
        <Balance balance={6.534} />
      </div>
      <div className="flex flex-col gap-[25px]">
        <h2 className="text-[22px] font-medium">Ежедневные бустеры</h2>
        <div className="flex flex-col gap-[10px]">
          <DayBoost />
          <DayBoost />
        </div>
      </div>
      <div>
        <Boosters />
        <Boosters />
        <Boosters />
        <Boosters />
      </div>
    </main>
  );
};

export default HomePage;