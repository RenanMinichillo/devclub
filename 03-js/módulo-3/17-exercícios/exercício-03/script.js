const fizzBuzz = num => {
    const isDiv3 = num % 3 === 0;
    const isDiv5 = num % 5 === 0;

    if (isDiv3 && isDiv5) return 'FizzBuzz';
    else if (isDiv3) return 'Fizz';
    return isDiv5 ? 'Buzz' : `${num}`;
}

for (let i = 0; i < 100; i++) {
    console.log(fizzBuzz(i))
}