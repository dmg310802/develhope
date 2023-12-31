// Write a first promise that takes as parameter the variable isLogged . 
// If the variable is true, then we return a random number from the resolve, 
// otherwise we dispatch an error. 
// We write a second promise that takes a variable of type number as a parameter. 
// If the input parameter is greater than 0.5, in the resolve we must return the following data: {name: "John", age: 24}, 
// otherwise we must dispatch an error. Once this is done, try to chain the promises to eventually return the final object {name: "John", age: 24}



function Loggedin(isLogged) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isLogged === true) {
                resolve("Logged in");
            } else {
                reject(new Error("Not logged in"));
            }
        }, 500);
    })
}


function confirmNumber(randomNumber) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNumber > 0.5) {
                resolve('{name: "John", age: 24}')
            } else {
                reject(new Error("User not correct"))
            }
        }, 500);
    })
}


const isLogged = true;
let randomNumber = 0.6;


Loggedin(isLogged)
.then((val) => confirmNumber(randomNumber))
.then((obj) => console.log(obj))
.catch((err) => console.error(err))