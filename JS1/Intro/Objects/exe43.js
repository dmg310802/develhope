// Nested Object Ex43
const student = {
    id: 1,
    school: "Liceo",
    year: 3,
    personalData : {
        "name" : "Daniel",
        "surname" : "Martinez",
        "age": 24
    }
};

console.log(student["personalData"]);
console.log(student.personalData);