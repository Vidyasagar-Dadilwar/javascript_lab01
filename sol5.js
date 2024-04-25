// Write a program to print table of 3 like below.
// 3*1=3=3
// 3*2=3+3=6
// 3*3=3+3+3=9
// .
// .
// .
// 3*10=3+3+3+3+3+3+3+3+3+3=30

for (let i = 1; i <= 10; i++) {
  const result = Array(i).fill(3).join("+");
  console.log(`3*${i}=${result}=${3 * i}`);
}