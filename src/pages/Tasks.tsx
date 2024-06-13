import Boosters from "../components/ui/Boosters";
import Button from "../components/ui/Button";

import { IFriendsArray, friendsArray } from "../utils/friendsArray";

const Tasks = () => {
  return (
    <section className="base-page-style bg-gradient flex items-center">
      <img
        className="h-[142px] w-[190px] z-10 mt-5"
        src={"/static/img/page-image/friend-img.png"}
        alt="bg"
      />
      <img
        src="/static/img/backgrounds/friends-bg.png"
        alt="bg"
        className="absolute -top-4 z-0 h-[242px] w-[290px]"
      />
      <h2 className="font-semibold text-[42px] text-center mb-10">
        Задания
      </h2>

      <div className="flex flex-col gap-[30px] w-full px-5">
        <span className="text-left font-medium text-[22px]">
            Подписка на телеграм
        </span>
        <div>
            <div className="flex flex-col gap-[10px] items-center justify-center w-full">
            <div
                className="shadow-grayButton rounded-xl p-5 w-full min-h-[105px] flex flex-col gap-[10px]"
                style={{
                background:
                    "linear-gradient(0deg, rgba(85, 72, 53, 0.95), rgba(85, 72, 53, 0.95)), linear-gradient(0deg, #FA6503, #FA6503)",
                }}
            >
                <Boosters />
            </div>
            <Button type="orange" className="orange-gradient font-medium text-[16px]">
                Проверить
            </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;