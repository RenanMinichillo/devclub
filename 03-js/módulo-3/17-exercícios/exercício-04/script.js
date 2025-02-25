const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % 2 === 0) return false;
    }
  
    return num !== 1;
  };
  
  for (let i = 1; i <= 15; i++) {
    console.log(`O número ${i} é primo ? ${isPrime(i)}`);
  }