let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const property in statistics) {
    if (property[0] === 'r' || (typeof(statistics[property]) === "number" && statistics[property] % 2 !== 0 )) {
        console.log(statistics[property]);
    }
}