// function add(num1,num2){
//   return num1 + num2;

// }

// const total = add(15,20);
// console.log(total);

//zodi num2 er valu deya na thake tahole evabe kora zete pare
// function add(num1,num2){
//   if(num2 == undefined){
//     num2 = 0;
//   }
//   return num1 + num2;

// }

// const total = add(15);
// console.log(total);


//evabeo kora jay
// function add(num1,num2){
//   num2 = num2 || 0;
   
//   return num1 + num2;

// }

// const total = add(15);
// console.log(total);


// function add(num1,num2){
//   num2 = num2 || 20;
   
//   return num1 + num2;

// }

// const total = add(15);
// console.log(total);

//using default value (ES6 )
function add(num1,num2 = 20){ //num2 = 20 eti hocche default parameter
   
  return num1 + num2;

}

const total = add(15);
console.log(total);