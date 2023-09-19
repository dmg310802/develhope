let arrayCoches = [
    {
    brand: "Tesla",
    model: "3",
    year: "2018",
    },
    {
    brand: "Toyota",
    model: "Camry",
    year: "2014",
    },
    {
    brand: "BMW",
    model: "I8",
    year: "2015",
    },
    {
        brand: "VW",
        model: "E8",
        year: "1990",
        },
]







function exeRe1() {
    isNew = false;

    arrayCoches.forEach(coche => {
        if (coche.year>2000) {
            console.log(`[${coche.brand} ${coche.model}]`);
        }
    });

};


exeRe1();