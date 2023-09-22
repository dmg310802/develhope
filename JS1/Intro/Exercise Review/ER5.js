const peliculas = [
    {
        title: "HP3",
        director: "Alfonso Cuarón",
        year: 2004,
        genre: "Fantasy",
    },
    {
        title: "Toy Story",
        director: "Jogn Lasseter",
        year: 1995,
        genre: "Fantasy",
    },
    {
        title: "Love, Rosie",
        director: "Christian Ditter",
        year: 2014,
        genre: "Romance",
    },
    {
        title: "Insidious",
        director: "James Wan",
        year: 2014,
        genre: "Horror",
    },
]












function refactDePeliculas(peliculas) {
  var contador = 0;
  var arrayGeneros = [];
    peliculas.forEach((pelicula, index) => {
    if (arratGeneros.length === 0){
        arrayGeneros.push(pelicula.genre);
    }
    for(let i = index + 1; i < peliculas.length;i++){
        if (arrayGeneros[i-1]!== peliculas[i].genre){
            arrayGeneros.push(pelicula.genre);
        }
        
    }
    const mismoYear = peliculas.some((pelicula) => pelicula.year === peliculas[1].year);
    if (mismoYear) contador++

})
console.log(contador);
console.log(arrayGeneros);
}

refactDePeliculas(peliculas);
console.log(peliculas.length);

