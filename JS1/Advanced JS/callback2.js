// Starting from the previous exercise, we want to add to our function repeatHello, a clearInterval after 5 seconds, could you do that?

// The callback function must be an arrow function, can you also explain why?

function repeatHello(callback) {
    setInterval(()=> {
        const sayingHello = `Hello`;
        callback(sayingHello)
    },1000
    )
}


const print = (sayingHello) => [
        console.log(sayingHello)
   
]

repeatHello(print);