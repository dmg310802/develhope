// Funcion que pasa 2 numeros y realice suma

function ejemplo(num1, num2, callback) {
    setTimeout(()=> {
        const sum = num1+ num2;
        callback(sum)
    },10000
    )
}

const func1 =  (sum) => [
    console.log(sum)
]

ejemplo(3,8,func1);