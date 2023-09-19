let nums = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
]

let prims = [

];

console.log(prims);

nums.forEach(num => {
    if (num === 2){
        prims.unshift(num);
    } else {
        if (num % 2 !== 0) {
            prims.unshift(num);
        } 
    }
    
});


console.log(prims);