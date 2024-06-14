import Button from "../components/ui/Button";

const TaskItem = () => {
  return (
    <section className="base-page-style bg-gradient flex items-center px-5">
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
      <h4 className="font-semibold text-[22px] text-center my-10">
        Подписка на телеграм
      </h4>
      <div
        className="rounded-xl p-5 w-full flex flex-col gap-[10px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(85, 72, 53, 0.95), rgba(85, 72, 53, 0.95)), linear-gradient(0deg, #FA6503, #FA6503)",
        }}
      >
        <div className="flex items-center w-full gap-[15px]">
          <img src={"/static/img/icons/3.png"} alt="avatar" className="w-[50px] h-[50px]" />
          <div className="flex flex-col">
            <span className="max-w-[169px] font-medium text-base">
              Подписка на телеграм
            </span>
            <div className="flex gap-1 items-center">
              <img
                className="w-[15px] h-[15px]"
                src="/static/svg/balance.svg"
                alt=""
              />
              <span className="text-gradient font-medium text-base">
                +10.000
              </span>
            </div>
          </div>
          <div className="mr-0 ml-auto">
            <img src="/static/svg/arrow.svg" alt="arrow" />
          </div>
        </div>
      </div>
        <Button type="orange" className="mt-4 mb-[180px]">Проверить</Button>
    </section>
  );
};

export default TaskItem;
