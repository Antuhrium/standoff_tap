// import Bg from "/static/img/backgrounds/main-bg.png";
import DayBoost from "../components/ui/DayBoost";
import Boosters from "../components/ui/Boosters";

const Boost = () => {
  return (
    <main className="base-page-style relative px-5 items-center">
      <div className="flex items-center flex-col gap-[20px] mt-[65px]">
        <p className="text-[18px] opacity-[80%]">Ваш баланс</p>
        <div className="mt-10 flex items-center gap-[15px]">
          <img src="/static/svg/balance.svg" alt="Balance" />
          <span className="font-medium text-5xl leading-[57px] text-gradient">
            6.534
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[25px]">
        <div className="flex flex-col gap-[25px]">
          <h2 className="text-[22px] font-medium">Ежедневные бустеры</h2>
          <div className="flex flex-col gap-[10px]">
            <DayBoost />
            <DayBoost />
          </div>
        </div>
        <div className="flex flex-col gap-[25px]">
          <h2 className="text-[22px] font-medium">Бустеры</h2>
          <div className="flex flex-col gap-[10px] w-[350px] h-[345px] bg-[#554835] rounded-[12px] p-[20px]">
            <Boosters />
            <Boosters />
            <Boosters />
            <Boosters />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Boost;
