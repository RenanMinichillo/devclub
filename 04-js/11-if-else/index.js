const MIN_PASSING_GRADE = 6;
const SECRET_PASSWORD = "123456";

let grade = 9;

console.log(`GRADE: ${grade}`);
console.log("... IF ...");
if (grade > MIN_PASSING_GRADE) {
  console.log("Pass 🎉");
}

console.log("... IF-ELSE ...");
if (grade > MIN_PASSING_GRADE) {
  console.log("Pass 🎉");
} else {
  console.log("Fail 😭");
}

grade = 3;
console.log(`\nGRADE: ${grade}`);
console.log("... IF ...");
if (grade > MIN_PASSING_GRADE) {
  console.log("Pass 🎉");
}

console.log("... IF-ELSE ...");
if (grade > MIN_PASSING_GRADE) {
  console.log("Pass 🎉");
} else {
  console.log("Fail 😭");
}

let password = "123457";

console.log("\n... LOG IN ...");
if (password === SECRET_PASSWORD) {
  console.log("Logged in!");
} else {
  console.log("Wrong password, try again!");
}

password = "123456";
console.log("\n... LOG IN ...");
if (password === SECRET_PASSWORD) {
  console.log("Logged in!");
} else {
  console.log("Wrong password, try again!");
}
