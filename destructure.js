const person = { name: 'Jack William', age: 17, job:'Facebook',gfName:'Ema', address: 'Mirpur',phone: 128363466}

// const gfName = person.gfName;
// const phone = person.phone;

const {address, phone, gfName, salary} = person; //object property = object name

// console.log(gfName,phone,salary,address);
// console.log(gfName,phone,salary,address);

//Array destructure

const friends = ['Amir khan','SRK','Salman Khan','Shakib Khan'];

const [chotoFriend, bestFriend, ...olderFriends] = friends;
console.log(chotoFriend, bestFriend);
console.log(olderFriends);