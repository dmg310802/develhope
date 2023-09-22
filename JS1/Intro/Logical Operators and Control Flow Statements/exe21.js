// If statement Exe21 Password

let password = "passwo";

rightLength = Number(password.length) <= 6 && Number(password.length) >= 4;



if(rightLength === true) {
    console.log('Password length is correct');
} else {
    console.log('Password length is not correct');
}