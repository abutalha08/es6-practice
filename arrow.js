// function doubleIt(num){
//   return num * 2;

// }

// const result = doubleIt(5);
// console.log(result);

//uporer funtion ta ke variable er moto kore declare korte pari

// const doubleIt = function(num){
//   return num * 2;
// }

// const result = doubleIt(6);
// console.log(result);

// arrow funtion 
//1..single parameter
 const doubleIt = num => num * 2 ; //num jehetu 1 ta parameter shehetu braket dileo honbe na dileo hobe
 const result = doubleIt(9);
 console.log(result);

 //2..more than 1 parameter
 const add = (x,y) => x + y ; // jehetu 2 ta parameter x,y shehetu braket dite hobe.
 const result2 = add(9,6);
 console.log(result2);

 //3..no parameter
 const give5 = () => 5;
 const result3 = give5();
 console.log(result3);

 //multiline statement
 const math = (x,y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
 }

 const result4 = math(8,6);
 console.log(result4);



