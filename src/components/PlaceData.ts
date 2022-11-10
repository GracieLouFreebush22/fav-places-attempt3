interface OnePlace{
    id: number;
    title: string;
    location: string;
}

const myPlaces: OnePlace[] = [
    {
        id: 1,
        title: "Test",
        location: "TestVille"
    },
    {
        id: 2,
        title: "Test 2",
        location: "Testopia"
    },
    {
        id: 3,
        title: "Test",
        location: "United States of Tests",
    },
]


export {myPlaces, type OnePlace}
