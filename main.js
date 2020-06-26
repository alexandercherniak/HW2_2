let n = +prompt('Количество чисел из ряда Фибоначчи: ');
let a = 0;
let b = 1;
for (let i = 1; i < n; i++) {
  c = b;
  b = a + b;
  a = c;
  console.log (a);
} 
