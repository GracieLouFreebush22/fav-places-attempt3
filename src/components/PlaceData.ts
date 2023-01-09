export interface OnePlace{
    id: number;
    title: string;
    location: string;

}

export const myPlaces: OnePlace[] = [
    {
        id: 1,
        title: "Tomato Greenhouse",
        location: "Reykjavik, Iceland"
     
    },
    {
        id: 2,
        title: "Vicktoria Park",
        location: "London, England"
   
    },
    {
        id: 3,
        title: "Wrigley Feild",
        location: "Chicago, Illinois",

    },
]


//export {myPlaces, OnePlace}
