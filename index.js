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
// const fruits = ["banana", "apple", "mango", "orange"];
// // 🟢 Q1 — map

// // 👉 har fruit ke length ka naya array banao
// let a=[];
// console.log(fruits.map(mein=>a.map(mein.length)
    
// ))


// let word = "apple";

// for (let ch of word) {
//   console.log(ch);
// }


// let word = "apple";

// let chars = word.split("");
// console.log(chars);
// // ["a", "p", "p", "l", "e"]

// let lengths = chars.map(ch => ch);
// // console.log(lengths)


// const fruits = ["banana", "apple", "mango"];
// let a=fruits.map(an=>an)
// console.log(a)
// console.log(fruits)

// let text = "apple mango banana";

// let arr = text.split(" ");

// console.log(arr);
// console.log(arr.join(" "));



// 1️⃣ words ka array banao
// 2️⃣ har word uppercase karo
// 3️⃣ wapas sentence banao

// let sen="mein umair hoon"
// console.log(sen)
// let arr =sen.split(" ")
// console.log(arr)
// let result=arr.map(upp=>upp.toUpperCase())
// console.log(result)
// let lastresult=result.join(" ");
// console.log(lastresult)


// const nums = [1, 2, 3, 4];
// console.log(nums.map(nums=>nums*2))


// const nums = [1, 2, 3, 4, 5, 6];
// // // 👉 sirf even numbers rakho

// console.log(nums.filter(num=>num%2===0))


// const nums = [3, 7, 9, 12];
// // 👉 check karo kya koi number 10 se bara hai?
// console.log(nums.some(num=>num>10))


// 👉 check karo kya sab numbers positive hain?

// const nums = [2, 5, 7, 1];
// console.log(nums.every(num=>num>=0))

// const nums = [1,2,3];

// const result = nums.forEach(n => {
//   console.log(n * 2);
// });

// console.log(result);
// // undefined




