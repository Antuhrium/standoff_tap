import DayBoost from "../components/ui/DayBoost";
import { IBoostsArray, IboostsItemArray, boostsArray } from "../utils/data";

const Boost = () => {
  return (
    <section
      className="base-page-style bg-gradient flex items-center"
      style={{ paddingBottom: 0 }}
    >
      <p className="text-[18px] opacity-80 mt-[65px]">Ваш баланс</p>
      <div className="flex items-end gap-[15px]">
        <img src="/static/svg/balance.svg" alt="Balance" className="mb-[9px]" 
      style={{filter: "drop-shadow(0 0 11px #F4D9AF)"}}/>
        <span className="font-medium text-5xl leading-[57px] text-gradient"
      style={{textShadow: "0 0 11px #F4D9AF"}}>
          6.534
        </span>
      </div>
      <div className="flex flex-col gap-[25px] mt-[60px]">
        <div className="flex flex-col gap-[25px]">
          <h2 className="text-[22px] font-medium">Ежедневные бустеры</h2>
          <div className="flex flex-col gap-[10px]">
            {IboostsItemArray.map((el: IboostsItemArray) => (
              <DayBoost
                key={el.id}
                Text={el.desc}
                Title={el.title}
                Type={el.type}
                Image={el.img}
              />
            ))}
          </div>
        </div>
        <h4 className="text-[22px] font-medium">Бустеры</h4>
        <div
          className="rounded-t-xl px-5 py-5 w-full min-h-[270px] flex flex-col gap-[15px]"
          style={{
            background:
              "linear-gradient(0deg, rgba(85, 72, 53, 0.95), rgba(85, 72, 53, 0.95)), linear-gradient(0deg, #FA6503, #FA6503)",
          }}
        >
          {boostsArray.map((el: IBoostsArray) => (
            <div
              key={el.id}
              className={`flex items-center w-full gap-[15px] ${
                el.active ? "" : "opacity-40"
              }`}
            >
              <div
                className={`relative w-[65px] h-[65px] flex items-center justify-center p-2 rounded-md ${
                  el.active ? "orange-gradient" : "bg-[#83694D]"
                }`}
              >
                <img
                  src={el.avatar}
                  alt="avatar"
                  className="w-full h-full object-contain z-10"
                />
                {el.active && (
                  <div className="absolute top-0 left-0 z-0 w-full h-full orange-gradient blur-[6px]" />
                )}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-4">
                  <span className="max-w-[169px] font-medium text-base">
                    {el.name}
                  </span>
                  <span>{el.level}lvl</span>
                </div>
                <div className="flex gap-1 items-center">
                  <img
                    className="w-[15px] h-[15px]"
                    src="/static/svg/balance.svg"
                    alt=""
                  />
                  <span className="text-gradient font-medium text-base">
                    +{el.bill}
                  </span>
                </div>
              </div>
              <div className="mr-0 ml-auto">
                <img src="/static/svg/arrow.svg" alt="arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Boost;
