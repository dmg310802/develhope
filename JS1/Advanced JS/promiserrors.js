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
.finally(console.log('Promise chain completed'))