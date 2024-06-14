import { NavLink } from "react-router-dom";

import FriendsImg from "/static/svg/nav-icons/friends.svg";
import RatingImg from "/static/svg/nav-icons/rating.svg";
import TasksImg from "/static/svg/nav-icons/tasks.svg";
import MarketImg from "/static/svg/nav-icons/market.svg";

const MyBr = () => {
  return <div className="min-w-px h-[60px] bg-[#FFEACBB2]" />;
};

const links = [
  {
    name: "Друзья",
    img: FriendsImg,
    path: "/friends",
  },
  {
    name: "Рейтинг",
    img: RatingImg,
    path: "/rating",
  },
  {
    name: "Задания",
    img: TasksImg,
    path: "/tasks",
  },
  {
    name: "Рынок",
    img: MarketImg,
    path: "/market",
  },
];

const Navigation = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex items-center justify-between w-full rounded-[12px] px-[24px] ${className}`}
      style={{
        background:
          "linear-gradient(0deg, rgba(85, 72, 53, 0.95), rgba(85, 72, 53, 0.95)), linear-gradient(0deg, #FA6503, #FA6503)",
      }}
    >
      {links.map(({ name, img, path }, index) => (
        <>
          <NavLink
            key={index}
            to={path}
            className="flex flex-col items-center transition-opacity active:opacity-80"
          >
            <img className="w-[30px] h-[30px]" src={img} alt={name} />
            <span className="text-[12px] font-medium leading-[14px]">
              {name}
            </span>
          </NavLink>
          {index !== links.length - 1 && <MyBr />}
        </>
      ))}
    </div>
  );
};

export default Navigation;
