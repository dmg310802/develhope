
// Crea una función que acepte 
// un array de números 
// y un callback que calcule la suma 
// de los elementos del array.


const arrayNum = [2,3,1,5,6]


function sumArray(arrayNum, callback) {
    const res = arrayNum.reduce((acc,current)=> acc+current,0)
    callback(arrayNum,res);
}

const myFunc = (arr,result) => {
    const res2 = arr.map((numero) => numero + result)
    console.log(result);
}
    

sumArray(arrayNum, myFunc);