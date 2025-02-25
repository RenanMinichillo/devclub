const numbers = [
    42, 17, 89, 5, 63, 28, 91, 34, 76, 12, 55, 8, 99, 23, 67, 31, 47, 82, 14, 60
  ];
  
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) max = num;
  }
  
  console.log(`O maior número é: ${max}`);