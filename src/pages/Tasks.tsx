import { useNavigate } from "react-router-dom";
import { IFriendsArray, friendsArray } from "../utils/data";

const Tasks = () => {
  const navigate = useNavigate();
  return (
    <section className="base-page-style bg-gradient flex items-center">
      <img
        className="h-[140px] w-[153px] z-10 mt-5"
        src={"/static/img/page-image/task-img.png"}
        alt="bg"
      />
      <img
        src="/static/img/backgrounds/friends-bg.png"
        alt="bg"
        className="absolute -top-4 z-0 h-[242px] w-[290px]"
      />
      <h2 className="font-semibold text-[42px] text-center mb-10">Задания</h2>

      <div className="flex flex-col gap-[30px] w-full px-5">
        <span className="text-left font-medium text-[22px]">
          Подписка на телеграм
        </span>
        <div>
          <div className="flex flex-col gap-[10px] items-center justify-center w-full">
            <div
              className="rounded-xl p-5 w-full h-full flex flex-col gap-[10px]"
              style={{
                background:
                  "linear-gradient(0deg, rgba(85, 72, 53, 0.95), rgba(85, 72, 53, 0.95)), linear-gradient(0deg, #FA6503, #FA6503)",
              }}
            >
              {friendsArray.map((el: IFriendsArray) => (
                <div
                  key={el.id}
                  className="flex items-center w-full gap-[15px]"
                  onClick={() => navigate(`/tasks/${el.id}`)}
                >
                  <img
                    src={el.avatar}
                    alt="avatar"
                    className="w-[50px] h-[50px]"
                  />
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
                  <div className="mr-0 ml-auto">
                    <img src="/static/svg/arrow.svg" alt="arrow" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
