const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};

let freeze = Object.freeze(smartphone);

smartphone.price = 100;

console.log(smartphone);
