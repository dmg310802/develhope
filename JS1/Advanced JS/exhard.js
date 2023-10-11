// Crear una función que acepte un número y un callback que calcule el cuadrado del número. espere 1 segundo
// Luego, usar una promesa para calcular el cubo del número y mostrar ambos resultados.


function func1(num1, callback) {
    setTimeout(()=> {
        const result = num1*num1;
        callback(result)
    },1000
    )
}

func1(3, 
   (cuadrado) => {
    console.log("cuadrado:", cuadrado);
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve (cuadrado * 5)
        },1000
        );
    });
    promise1.then((cubo) => console.log("cubo:", cubo)) 
});


// const func2 = function (num){
//     return num * 5;
// }

(async ()=> {
    const cuadrado = await new Promise((resolve) => {
        func1(5, (cuadrado) => {resolve(cuadrado);
        });
    });
    console.log("async cuadrado:", cuadrado);
})();

