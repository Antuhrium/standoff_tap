import { useState } from "react";
import { IFriendsArray, friendsArray } from "../utils/data";
import { useNavigate } from "react-router-dom";

const RatePage = () => {
  const [content, setContent] = useState("players");
  const navigate = useNavigate();
  return (
    <section
      className="base-page-style bg-gradient flex items-center px-5"
      style={{ paddingBottom: 0 }}
    >
      <div className="flex w-full bg-button rounded-xl z-20 mt-6">
        <button
          className={`w-1/2 ${
            content === "players" ? "orange-gradient" : ""
          } h-10 rounded-xl`}
          onClick={() => setContent("players")}
        >
          Игроки
        </button>
        <button
          className={`w-1/2 ${
            content === "squads" ? "orange-gradient" : ""
          } h-10 rounded-xl`}
          onClick={() => setContent("squads")}
        >
          Сообщества
        </button>
      </div>
      {content === "players" ? (
        <img
          className="h-[129px] w-[129px] z-10 mt-8"
          src={"/static/img/page-image/rate-img.png"}
          alt="bg"
        />
      ) : (
        <>
          <h2 className="font-semibold text-[42px] text-center my-4">
            Главный приз
          </h2>
          <img
            className="h-[100px] w-[154px] z-10 mt-8"
            src={"/static/img/page-image/rate-gold.png"}
            alt="bg"
          />
        </>
      )}

      <img
        src="/static/img/backgrounds/friends-bg.png"
        alt="bg"
        className={`absolute ${
          content === "players" ? "top-12" : "top-36"
        } z-0 h-[200px] w-[200px]`}
      />
      {content === "players" ? (
        <h2 className="font-semibold text-[42px] text-center mb-6">
          Топ игроков
        </h2>
      ) : (
        <div className="mt-10 flex items-center gap-[15px] mb-6">
          <img
            src="/static/svg/balance.svg"
            alt="Balance"
            className="mt-[3px]"
            style={{ filter: "drop-shadow(0 0 11px #F4D9AF)" }}
          />
          <span
            className="font-medium text-5xl leading-[57px] text-gradient"
            style={{ textShadow: "0 0 11px #F4D9AF" }}
          >
            100.000
          </span>
        </div>
      )}

      <div
        className="rounded-t-xl px-5 pt-5 w-full min-h-[270px] flex flex-col gap-[10px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(85, 72, 53, 0.95), rgba(85, 72, 53, 0.95)), linear-gradient(0deg, #FA6503, #FA6503)",
        }}
      >
        {friendsArray.map((el: IFriendsArray, index: number) => (
          <div
            key={el.id}
            className="flex items-center w-full gap-[15px]"
            onClick={() => navigate(`/rating/${el.id}`)}
          >
            <span className="text-base font-bold text-[#F98905]">{index}</span>
            <img
              src={el.avatar}
              alt="avatar"
              className="w-[50px] h-[50px] rounded-full"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default RatePage;
