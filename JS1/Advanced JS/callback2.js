// Starting from the previous exercise, we want to add to our function repeatHello, a clearInterval after 5 seconds, could you do that?

// The callback function must be an arrow function, can you also explain why? We use arrow function to ensure that it works within the scope of the repeatHello function.

function repeatHello(callback) {
    let int = setInterval(()=> {
        const sayingHello = `Hello`;
        callback(sayingHello)
    },1000
    )

    setTimeout(() => clearInterval(int),5000)
}


const print = (sayingHello) => [
        console.log(sayingHello)
   
]

repeatHello(print);