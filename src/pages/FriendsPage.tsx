import Button from "../components/ui/Button";
import { IFriendsArray, friendsArray } from "../utils/data";

const FriendsPage = () => {
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
        Ваши друзья
      </h2>

      <div className="flex flex-col gap-[25px] w-full px-5">
        <span className="text-left font-medium text-[22px]">
          Всего друзей: 3
        </span>

        <div className="flex flex-col gap-[10px] items-center justify-center w-full">
          <div
            className="rounded-xl p-5 w-full min-h-[270px] flex flex-col gap-[10px]"
            style={{
              background:
                "linear-gradient(0deg, rgba(85, 72, 53, 0.95), rgba(85, 72, 53, 0.95)), linear-gradient(0deg, #FA6503, #FA6503)",
            }}
          >
            {friendsArray.map((el: IFriendsArray) => (
              <div
                key={el.id}
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-[15px]">
                  <img
                    src={el.avatar}
                    alt="avatar"
                    className="w-[50px] h-[50px]"
                  />
                  <span className="max-w-[169px] font-medium text-base">
                    {el.nickname}
                  </span>
                </div>
                <span className="text-gradient font-medium text-base">
                  +{el.bill}
                </span>
              </div>
            ))}
            {friendsArray.length === 0 && (
              <span className="flex items-center justify-center m-auto font-medium text-base text-light-grey">
                У вас пока нет друзей
              </span>
            )}
          </div>

          <Button className="block-gradient font-medium text-[16px]">
            Найти друга
          </Button>
          <Button
            type="orange"
            className="orange-gradient font-medium text-[16px]"
          >
            Пригласить друга
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FriendsPage;
