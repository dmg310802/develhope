//Scope Ex 35
function canPlay() {
    let sport = " Football";
    
    if (true) {
        // block scope personName is limited here
    var personName = "Cosimo";
    }
    
    console.log(personName + sport);
    }
    
    canPlay();
    

// Alt solution

function canPlay2() {
    let sport2 = " Volleyball";
    
    if (true) {
        // block scope personName is limited here
    var personName2 = "Daniel";
    console.log(personName2 + sport2);
    }
    }
    
    canPlay2();
    