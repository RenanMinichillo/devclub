const user = {
  name: "Renan",
  age: 28,
  fullAddress: {
    address: "404 Not Found St",
    city: "Code Ville",
    postalCode: "314159",
    country: "Code Land"
  }
};

console.log(user);
console.log(user.name);
console.log(user.fullAddress);
console.log(user.fullAddress.address);

user.name = "Renan Minichillo";
console.log(user);
