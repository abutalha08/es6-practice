//array er vitor theke element gulo ber korar jonno threedots use kora hoy 

const ages = [11, 14, 16, 13, 17];
const ages2 = [15,18,20];
const ages3 = [25,23,30];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);
const allAges2 = [...ages,...ages2,9,...ages3];
console.log(allAges2);

//Another example

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business,minister,sochib);
console.log(maximum);

//uporer gulo alada variable e na theke jodi ekta array te thakto tahole

const takaPoisa = [850,550,350];
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);
