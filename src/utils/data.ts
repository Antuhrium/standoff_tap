export interface IFriendsArray {
  id: number;
  avatar: string;
  nickname: string;
  bill: number;
}
export interface IBoostsArray {
  id: number;
  avatar: string;
  name: string;
  level: number;
  bill: number;
  active: boolean;
}
export interface IboostsItemArray {
  id: number;
  img: string;
  title: string;
  desc: string;
  type: boolean;
}

export const friendsArray: IFriendsArray[] = [
  { id: 0, avatar: "/static/img/icons/1.png", nickname: "Веля", bill: 10000 },
  { id: 1, avatar: "/static/img/icons/2.png", nickname: "ТикТак", bill: 10000 },
  {
    id: 2,
    avatar: "/static/img/icons/3.png",
    nickname: "Человек без аватара",
    bill: 10000,
  },
];

export const boostsArray: IBoostsArray[] = [
  {
    id: 0,
    avatar: "/static/svg/boost-icons/AIM.svg",
    name: "AIM",
    level: 4,
    bill: 7000,
    active: false,
  },
  {
    id: 1,
    avatar: "/static/svg/boost-icons/Capacity.svg",
    name: "Емкость магазина",
    level: 2,
    bill: 1000,
    active: true,
  },
  {
    id: 2,
    avatar: "/static/svg/boost-icons/Reload.svg",
    name: "Перезарядка",
    level: 2,
    bill: 1000,
    active: true,
  },
  {
    id: 3,
    avatar: "/static/svg/boost-icons/Gamepad.svg",
    name: "Auto BOT",
    level: 2,
    bill: 1000,
    active: true,
  },
];

export const IboostsItemArray: IboostsItemArray[] = [
  {
    id: 0,
    img: "/static/img/boost/AWP.png",
    title: "Turbo AIM",
    desc: "3/3",
    type: true,
  },
  {
    id: 1,
    img: "/static/img/boost/AK.png",
    title: "Полный магазин",
    desc: "Осталось 0:31:45",
    type: false,
  },
];
