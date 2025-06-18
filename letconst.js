const hubby = "Elias Hossain";
//hubby = "Shakib Khan"; // const er khetre re assign korte parbo na
console.log(hubby);

const numbers = [12,45];
numbers[1]= 88;
 numbers.push(15);
 console.log(numbers);
 //array te const use korar somoy aray er element change korte pari.push korte pri kintu pura array ta ke change korte parbo na 

// numbers = ["Suuny","Salman","Ali"];

//object er khetreo Same.ekta kore element er valu update korte parbo.kintu pura object update korte parbo na.

const nayok = {name:"Shakib Khan", phone:43444};

//let
let patientName = "Rahim";
patientName = "Fatema khala";
console.log(patientName);
//let value change hoite dey.kintu const change hote dey na

//Scope e let,const er use
let sum = 0;
for (let i = 0; i <10; i++) {
       sum = sum + i;
}
console.log(i);
//var scope er baireo kaj kore.kintu let only scope er majhe kaj kore