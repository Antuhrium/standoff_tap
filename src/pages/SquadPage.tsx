import Button from "../components/ui/Button";
import { IFriendsArray, friendsArray } from "../utils/data";

const SquadPage = () => {
  return (
    <section
      className="base-page-style bg-gradient flex items-center px-5"
      style={{ paddingBottom: 0 }}
    >
      <img
        className="mt-8 w-[120px] h-[120px]"
        src="/static/img/icons/3.png"
        alt="avatar"
      />
      <div className="flex items-center relative">
        <h3 className="font-semibold text-4xl my-5">Веля Сквад</h3>
        <span className="absolute font-medium text-xl -right-8 text-[#F4D9AF]">
          #1
        </span>
      </div>
      <div className="flex justify-between w-full bg-button rounded-xl">
        <div className="flex flex-col m-4 gap-2 w-1/2">
          <span className="font-medium text-base leading-[19px]">
            Всего очков
          </span>
          <div className="flex items-center gap-[5px]">
            <img
              className="w-[15px]"
              src={"/static/svg/balance.svg"}
              alt="Balance"
            />
            <span className="font-medium text-base leading-[19px] text-gradient">
              10.000.034B
            </span>
          </div>
        </div>
        <div className="w-px bg-[#FFEACBB2]" />
        <div className="flex flex-col m-4 gap-2 w-1/2">
          <span className="font-medium text-base leading-[19px]">
            Всего игроков
          </span>
          <span className="font-medium text-base leading-[19px] text-gradient">
            324 игрока
          </span>
        </div>
      </div>
      <Button className="mt-2">Выйти</Button>
      <h4 className="font-medium text-[22px] w-full my-5">Топ игроков</h4>
      <div
        className="rounded-t-xl px-5 pt-5 w-full min-h-[270px] flex flex-col gap-[10px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(85, 72, 53, 0.95), rgba(85, 72, 53, 0.95)), linear-gradient(0deg, #FA6503, #FA6503)",
        }}
      >
        {friendsArray.map((el: IFriendsArray, index: number) => (
          <div key={el.id} className="flex items-center w-full gap-[15px] mb-0">
            <span className="text-base font-bold text-[#F98905]">{index}</span>
            <img src={el.avatar} alt="avatar" className="w-[50px] h-[50px]" />
            <div className="flex flex-col">
              <span className="max-w-[169px] font-medium text-base">
                {el.nickname}
              </span>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default SquadPage;
