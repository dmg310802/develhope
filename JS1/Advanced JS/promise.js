// Write a promise. 
// If the variable called number is greater than 10, 
// then it returns a resolve, otherwise it returns a reject. 
// Then manage the promise with then and catch in case of any reject.

// const number = 15;


const randomPromesa = new Promise((resolve,reject) => {
    const number = 15;
    if (number > 10) {
        resolve('Promise resolved');
    } else {
        reject('Promise rejected');
    }
})

randomPromesa
    .then((val) => console.log(val))
    .catch((err) => console.error(err))