import Button from "../components/ui/Button";
import Progress from "../components/ui/Progress";

import Navigation from "../components/Navigation";
import TapImg from "/static/svg/main-button.svg";

const HomePage = () => {
  return (
    <main className="base-page-style relative px-5 items-center bg-gradient">
      <Button className={"mt-[15px]"}>Поиск сообщества</Button>
      <div className="flex items-end gap-[15px] mt-10">
        <img
          src="/static/svg/balance.svg"
          alt="Balance"
          className="mb-[9px]"
          style={{ filter: "drop-shadow(0 0 11px #F4D9AF)" }}
        />
        <span
          className="font-medium text-5xl leading-[57px] text-gradient"
          style={{ textShadow: "0 0 11px #F4D9AF" }}
        >
          6.534
        </span>
      </div>
      <button className="mt-[70px] max-w-[330px] h-[330px] w-full transition-transform active:scale-95 outline-none">
        <img src={TapImg} alt="TapImg" className="w-full h-auto" />
      </button>
      <div className="w-full flex flex-col mt-[50px]">
        <p className="text-base leading-[19px]">
          <span className="text-[#F3B123]">829</span>
          <span className="text-[rgba(255,95,0,0.6)]"> / 1000</span>
        </p>
        <Progress value={1000} className="mt-[10px]" />
      </div>
      <Navigation className="mt-[15px]" />
    </main>
  );
};

export default HomePage;

