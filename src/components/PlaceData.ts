import icelandPic from "./images/icelandPic.png"

export interface OnePlace{
    id: number;
    title: string;
    location: string;
    img: string;

}

export const myPlaces: OnePlace[] = [
    {
        id: 1,
        title: "Tomato Greenhouse",
        location: "Reykjavik, Iceland",
        img:icelandPic
     
    },
    {
        id: 2,
        title: "Vicktoria Park",
        location: "London, England",
        img:
   
    },
    {
        id: 3,
        title: "Wrigley Feild",
        location: "Chicago, Illinois",
        img:

    },
]


//export {myPlaces, OnePlace}
