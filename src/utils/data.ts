export interface IFriendsArray {
    id: number,
    avatar: string,
    nickname: string,
    bill: number,
}


export const friendsArray: IFriendsArray[] = [
    { id: 0, avatar: "/static/img/icons/1.png", nickname: "Веля", bill: 10000},
    { id: 1, avatar: "/static/img/icons/2.png", nickname: "ТикТак", bill: 10000},
    { id: 2, avatar: "/static/img/icons/3.png", nickname: "Человек без аватара", bill: 10000},
];