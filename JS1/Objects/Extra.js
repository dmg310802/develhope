const listaDeEstudiantes = [
  {
    nombre: "Daniel",
    apellido: "Martinez",
    edad: 24,
    hobby: "Chess",
    pelicula: "HP3",
    libro: "HG",
  },
  {
    nombre: "Maria",
    apellido: "Perez",
    edad: 17,
    hobby: "Read, Swim",
    pelicula: "Toy Story 3",
    libro: "Divergente",
  },
  {
    nombre: "Sara",
    apellido: "Garcia",
    edad: 23,
    hobby: "Basketball",
    pelicula: "Ghosted",
    libro: "Percy Jackson",
  },
  {
    nombre: "Lucas",
    apellido: "Zocchi",
    edad: 25,
    hobby: "Football",
    pelicula: "Ghostbusters",
    libro: "The Bible",
  },
  {
    nombre: "Lucas",
    apellido: "Suarez",
    edad: 28,
    hobby: "Volleyball",
    pelicula: "Sonic",
    libro: "Rhetorics",
  },
];

// Imprimir el nombre de los estudiantes en orden alfabetico

/** listaDeEstudiantes.sort((a,b)=> {
  const nombreA =a.nombre.toUpperCase(); 
  const nombreB =b.nombre.toUpperCase(); 
  if (nombreA < nombreB) {
    return -1;
  }
  if (nombreA > nombreB) {
    return 1;
  }

  return 0;
});

console.log(listaDeEstudiantes); */

// Imprimir los estudiantes en orden de edad, menos a mayor
// 
// listaDeEstudiantes.sort((a, b) => a.edad - b.edad);
// console.log(listaDeEstudiantes);

// Imprimir si los estudiantes tienen el mismo nombre

/** 
  const nombreDuplicado = () => {
    var esDuplicado = false;
    for (let i = 0 ; i < listaDeEstudiantes.length; i++) {
      const nombreA = listaDeEstudiantes[i].nombre;
      
      for(let l= i+1;l < listaDeEstudiantes.length;l++){
         esDuplicado = listaDeEstudiantes[l].nombre === nombreA;
        if (esDuplicado) return esDuplicado;
      }
    }
      return esDuplicado;
  };


  const resultado = nombreDuplicado();
  const textoAImprimir = resultado ? "Hay nombres duplicados" : "No hay";

  console.log(textoAImprimir);

*/




// Imprimir si alguno de los estudiantes tiene mas de un hobby, o mas de una pelicula o libro favorito. (Metodo split)

/** 
listaDeEstudiantes.forEach(estudiante => {
  const listaDeHobbies = estudiante.hobby.split(",");
console.log(listaDeHobbies.length);
const tieneMasDeUnHobby = listaDeHobbies.length > 1;

if(tieneMasDeUnHobby){
  console.log('Tiene más de un hobby')
} else {
  console.log('No tiene más de un hobby')
}
});
*/


  // Imprimir solo los estudiantes que tienen edad para manejar (Metodo sort)

/** listaDeEstudiantes.forEach((student) => {
  if (student.edad >= 18) {
    console.log(student);
  }
}); */

