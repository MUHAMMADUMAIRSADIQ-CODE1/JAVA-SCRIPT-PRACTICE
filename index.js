// var age=Number(prompt("Enter your age in years" ));
// var now = new Date().getFullYear();
// var diff =now - age;
// console.log("Your Birth Year is =>",diff)



// var age = Number(prompt("Enter your age"));
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// var birthDate = new Date(birthYear,0,2);
// var cyear=new Date();
// console.log("current date:",cyear);
// console.log("100 years back,", birthDate);



// var now = new Date();
// console.log(now)
// now.setHours(now.getHours()-1)
// console.log("it was"+now)


// var months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// var now =new Date ().getMonth();
// document.write("CURRENT MONTH IS"+" " + months[now])

// var now = new Date().toString()
// var copy=now.slice(0,4)
// document.write(`Today is ${copy} `)


// const weeks = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ];
// var now = new Date().getDay();
// console.log(now)
// if( (weeks[now] ==  "Thursday") || (weeks == "Sunday")){
//     alert("it's funny Day")
// }
// else (
//     alert("Crazy Day")
// )



// var now = new Date().getDate();
// if (now<16){
//     alert("First Fifteen Days Of The Month")
// }
// else{
//     alert("Last Days Of The Month")
// }
// const fruits = ["banana", "green apple", "red apple", "red mango"];
// let s="mera red apple"
// console.log(fruits.find(word=>s.includes(word)))

// const numbers = [3, 7, 10, 15];

// const result = numbers.some(num => num > 8);

// console.log(result);



// const fruits = ["apple", "banana", "mango"];

// fruits.forEach(fruit => {
//   console.log(fruit);
// });


// const nums = [1, 2, 3, 4];
// nums.forEach(num =>console.log (num));

// const nums = [2, 4, 6];
// // 👉 map use karo
// // har number ko square kar
// console.log(nums.map(sq=>sq*sq))


// const nums = [5, 10, 15, 20];
// // 👉 sirf 10 se baray numbers nikaalo
// console.log(nums.filter(sq=>sq>10))


// 👉 check karo kya koi naam “Sara” hai
// const names = ["Ali", "Ahmed", "Sara"];
// console.log(names.some(some=>some==="Sara"))


// const fruits = ["banana", "apple", "mango"];
// // 👉 pehla fruit nikaalo jisme "an" ho
// console.log(fruits.map(an=>an.includes("an")))
// console.log(fruits.filter(an=>an.includes("an")))
// console.log(fruits.find(an=>an.includes("an")))
// console.log(fruits.some(an=>an.includes("an")))
