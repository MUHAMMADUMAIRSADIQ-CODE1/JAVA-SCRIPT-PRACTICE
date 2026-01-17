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




// const input = document.getElementById("search");
// const list = document.getElementById("list");

// const fruits = [
//     "Apple",
//     "Banana",
//     "Orange",
//     "Mango",
//     "Grapes",
//     "Pineapple"
// ];

// function showItems(items) {
//     list.innerHTML = "";

//     items.map(item => {
//         let li = document.createElement("li");
//         li.innerText = item;
//         li.style.listStyleType="circle";
//         list.appendChild(li);
//     });
// }

// //
// // showItems(fruits);

// input.addEventListener("input", () => {
//     let value = input.value.toLowerCase();

//     let filtered = fruits.filter(fruit =>
//         fruit.toLowerCase().includes(value)
//     );

//     showItems(filtered);
// });

// let todos = [];

// function addTodo() {
//     let input = document.getElementById("todoInput");
//     let text = input.value.trim();   // 👈 trim yahan use ho raha hai

//     if (text === "") return;

//     let todo = {
//         text: text,
//         done: false
//     };

//     todos.push(todo);
//     input.value = "";
//     renderTodos();
// }

// function toggleTodo(index) {
//     todos[index].done = !todos[index].done;
//     renderTodos();
// }

// function renderTodos() {
//     let list = document.getElementById("todoList");
//     list.innerHTML = "";

//     todos.map((todo, index) => {
//         let li = document.createElement("li");
//         li.innerText = todo.text;

//         if (todo.done) {
//             li.classList.add("done");
//         }

//         li.onclick = () => toggleTodo(index);
//         list.appendChild(li);
//     });
// }

// let a = document.querySelector("a");


// console.dir(a.href)

// let li = document.querySelectorAll("li");
// li.forEach((item, index) =>{if (index % 2 == 0) {
// item.classList.add("highlight")
// }})
// let li =document.querySelectorAll("ul li")
// console.dir(li)



// let input =document.querySelector("input");
// input.addEventListener("input",ev=>{
//     if(ev.data!==null && ev.data !==" "){
//      console.log(ev.data)
//     }

// })


// let sel = document.querySelector("select")

// sel.addEventListener("change",e=>{console.log(
//     e
// )})

// let div = document.querySelector("div");
// let h1 = document.querySelector("h1")
// window.addEventListener("keydown", e => {

//     if (e.key === " ") {
//         h1.textContent = `SPC`
//     }
//     else {
//         h1.textContent = e.key
//     }
// })



// let p =document.querySelector("p")
// let input = document.querySelector("input");
// let button = document.querySelector("button");
// button.addEventListener("click",()=>{
// input.click();
// // console.dir(input)
// })

// input.addEventListener("change",(e)=>{
//     let file=e.target.files[0]
//     console.log(file)
//    if(file){
//      button.innerText=file.name
//    }

// })
// // e.target.files[0].name


// let ul = document.querySelector("ul");
// ul.addEventListener("click",(e)=>{
// e.target.classList.toggle("lin") 
// })
// let span = document.querySelector("span")
// let inp = document.querySelector("input");
// inp.addEventListener("input", e => {
//   if (inp.value.length <= 20) {
//     span.textContent = `${inp.value.length}`
//   }
//   else {
//     inp.value=" "
//   }
// })
// let span = document.querySelector("span");
// let inp = document.querySelector("input");
// let max = 20;

// inp.addEventListener("input", () => {
//   if (inp.value.length > max) {
//     inp.value = inp.value.slice(0, max);
//     console.log(inp.value)
//   }
//   span.textContent = inp.value.length;
// });
// let input = document.querySelector("input");
// input.addEventListener("input",()=>{
// console.dir(input.value)
// })

// let a = 0;

// let btn1 = document.querySelector("#btn1"); // +
// let btn2 = document.querySelector("#btn2"); // -
// let h1 = document.createElement("h1");
// let c;
// h1.textContent = a;
// document.body.appendChild(h1);

// btn1.addEventListener("click", () => {
//   a++;
//   h1.textContent = a;
//   c=a
//   if(c%2==0){
//     h1.classList.add("e")
//     h1.classList.remove("f")
// }
// else{
//     h1.classList.add("f")
//     h1.classList.remove("e")
// }

// });

// btn2.addEventListener("click", () => {
//   if (a > 0) {
//     a--;
//     h1.textContent = a;
//     c=a
//     // console.log(c)
//   }
//  if(c%2==0){
//     h1.classList.add("e")
//     h1.classList.remove("f")
// }
// else{
//     h1.classList.add("f")
//     h1.classList.remove("e")
// }

// });
// console.log(c)


// let button =document.querySelector("button");
// let h1=document.querySelector("h1");
// console.dir(h1);
// button.addEventListener("click",()=>{
// h1.classList.toggle("d")
// })



// let a = 0;

// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");
// let h1 = document.createElement("h1");

// document.body.appendChild(h1);

// function updateUI() {
//     console.log(a)
//   h1.textContent = a;

//   if (a % 2 === 0) {
//     h1.classList.add("e");
//     h1.classList.remove("f");
//   } else {
//     h1.classList.add("f");
//     h1.classList.remove("e");
//   }
// }

// updateUI();

// btn1.addEventListener("click", () => {
//   a++;
//   updateUI();
// });

// btn2.addEventListener("click", () => {
//   if (a >1) {
//     a--;
//     updateUI();
//   }
// });




// let div =document.querySelector("div");
// div.className="u"
// console.dir(div.classList.add("um"))
// console.dir(div.classList.add("u"))
// // div.setAttribute("id", "box1",);
// // div.id="hsj"
// // div.className="u"
// // div.className="um"




// 🧠 Logic Rules (VERY IMPORTANT)

// 1️⃣ Start

// counter har 1 second mein +1 ho

// agar pehle se chal raha ho → dobara start na ho

// 2️⃣ Stop

// counter ruk jaye

// value wahi rahe

// 3️⃣ Reset

// counter = 0

// color update ho (even / odd logic reuse karo)


// let count =0;
// let a=null;
// let h1 =document.querySelector("h1");
// let btn1=document.querySelector(".btn1")
// // let btn2=document.querySelector(".btn2")
// function plus(){
// count++;
// h1.textContent=count;
// }
// btn1.addEventListener("click",()=>{
// if(a===null){
// plus()
//  a=setInterval(plus,100);
//  console.log(a)
// btn1.textContent=`Stop`
// }
// else{
//    clearInterval(a)
//    btn1.textContent=`Start`
//   a=null
// }
// })


// let button = document.querySelector("button");
// let input = document.querySelector("input");
// let ul = document.querySelector("ul");


// function todos() {
//   localStorage.setItem("todos", ul.innerHTML);
// }


// let savedTodos = localStorage.getItem("todos");
// if (savedTodos) {
//   ul.innerHTML = savedTodos;
// }


// function addLi() {
//   let li = document.createElement("li");
//   li.innerHTML = `
//     <span class="text">${input.value}</span>
//     <button class="del">Delete</button>
//   `;
//   ul.appendChild(li);
// }


// function clearInput() {
//   input.value = "";
// }


// ul.addEventListener("click", (e) => {


//   if (e.target.classList.contains("text")) {
//     e.target.classList.toggle("add");
//     todos();
//   }


//   if (e.target.classList.contains("del")) {
//     let li = e.target.closest("li");
//     let text = document.querySelector(".text");

//     if (text.classList.contains("add")) {
//       let ok = confirm("Are you sure");
//       if (ok) li.remove();
//     } else {
//       li.remove();
//     }

//     todos();
//   }
// });


// button.addEventListener("click", () => {
//   if (input.value) {
//     addLi();
//     clearInput();
//     todos();
//   }
// });





// second project:

// 🎯 Goal:

// Screen par number show ho

// + button se number increase ho

// - button se decrease ho

// number 0 se neeche na jaye
// let SelectedOpt = null;
// let isvalid = false;
// let sum = 0
// let p = document.querySelector("p");
// let btn = document.querySelector("button")
// let count = 0;
// let quiz = [
//     {
//         question: "1) JavaScript kis cheez ke liye use hoti hai?",
//         options: ["Styling", "Structure", "Logic", "Design"],
//         correct: "Logic"
//     },
//     {
//         question: "2) HTML ka full form kya hai?",
//         options: [
//             "Hyper Text Markup Language",
//             "High Text Machine Language",
//             "Hyper Tool Mark Language",
//             "Home Text Mark Language"
//         ],
//         correct: "Hyper Text Markup Language"
//     },
//     {
//         question: "3) CSS kis cheez ke liye use hoti hai?",
//         options: ["Logic", "Database", "Styling", "Server"],
//         correct: "Styling"
//     },
//     {
//         question: "4) JavaScript mein array ka index kis se start hota hai?",
//         options: ["0", "1", "-1", "2"],
//         correct: "0"
//     },
//     {
//         question: "5) DOM ka full form kya hai?",
//         options: [
//             "Document Object Model",
//             "Data Object Method",
//             "Document Oriented Model",
//             "Digital Object Model"
//         ],
//         correct: "Document Object Model"
//     },
//     {
//         question: "6) JavaScript mein function ka keyword kya hota hai?",
//         options: ["func", "function", "method", "define"],
//         correct: "function"
//     },
//     {
//         question: "7) CSS file ko HTML ke saath kaise link karte hain?",
//         options: ["<script>", "<style>", "<css>", "<link>"],
//         correct: "<link>"
//     },
//     {
//         question: "8) JavaScript mein variable declare karne ke liye kaunsa keyword use hota hai?",
//         options: ["int", "var", "string", "value"],
//         correct: "var"
//     },
//     {
//         question: "9) Kaunsa symbol JavaScript mein single-line comment ke liye use hota hai?",
//         options: ["<!-- -->", "/* */", "//", "**"],
//         correct: "//"
//     },
//     {
//         question: "10) JavaScript mein condition check karne ke liye kaunsa statement use hota hai?",
//         options: ["for", "if", "switch", "while"],
//         correct: "if"
//     }

// ];

// function update() {
//     SelectedOpt = null
//     p.innerHTML = " "
//     if (quiz.length - 1 < count) {
//         alert(`Your Score is ${sum}`)
//         alert("Quiz is completed")
//         count = 0
//         sum = 0
//     }
//     let a = quiz[count].question
//     p.innerHTML += `<h1>${a}</h1><br>`;

//     quiz[count].options.forEach(e => {
//         let label = document.createElement("label");
//         let input = document.createElement("input")
//         input.value = e;
//         input.type = "radio"
//         input.name = "option"
//         label.append(input, " " + e);
//         p.appendChild(label);
//         p.appendChild(document.createElement("br"))
//     });
// }
// p.addEventListener("click", e => {
//     SelectedOpt = e.target.value;
// })
// btn.addEventListener("click", () => {
//     if (SelectedOpt === null) return alert("please choose")
//     if (SelectedOpt === quiz[count].correct) {
//         sum++;
//     }
//     count++;
//     update();
// })
// update();


// let div=document.getElementsByTagName("div")
// console.log(div[0].getElementsByTagName("p")[1])



// let a= document.querySelector("div").spellcheck



// let count = 0;
// let div = document.querySelector(".under-class")
// let container = document.querySelector(".container")
// let p = document.createElement("p")
// container.appendChild(p)
// function updateUI() {
//     if (count <= 200) {
//         div.style.width = `${count}px`
//         p.innerText = `${Math.ceil((count / 200) * 100)}%`
//         count++;
//     }
// }
// setInterval(() => {
//     updateUI();
// }, 100);

// let firstimg = document.querySelector("#first-img")
// let secondimg = document.querySelector("#second-img")
// let thirdimg = document.querySelector("#third-img")
// let left = 0;
// let a = false;
// let c;
//  let bgX=0
// function carstart() {

//     // left++;
//     // firstimg.style.left = `${left}px`

//     bgX -= 3; // background opposite direction
//     document.body.style.backgroundPositionX = bgX + "px";


// }

// secondimg.addEventListener("click", () => {
//     if (a) return;
//     a = true
//     c = setInterval(() => {
//         carstart();
//     }, 16)
// })
// thirdimg.addEventListener("click", () => {
//     clearInterval(c)
//     a = false
// })


// let firstimg = document.querySelector("#first-img");   // car
// let secondimg = document.querySelector("#second-img"); // start
// let thirdimg = document.querySelector("#third-img");  // stop
// let backw = document.querySelector("#fifth-img");  // stop
// let frontw = document.querySelector(".front-wheel");
// let gameRunning = false;
// let intervalId = null;
// let angle = 0
// // background position
// let bgX = 0;

// // car position
// let carX = 200; // initial left position

// // car fixed position
// firstimg.style.left = carX + "px";
// // background changing

// let imagArr = ["https://i.pinimg.com/originals/b7/2a/36/b72a36cd7b88ba67875f4f71d8deb1a7.jpg",
//     "https://static.vecteezy.com/system/resources/previews/008/888/451/original/horizontal-view-of-asphalt-road-with-bike-lense-background-of-trees-and-green-grass-with-puddle-and-mountain-under-the-blue-sky-vector.jpg"
//     , "./img/Copilot_20260111_225601.png","./img/Copilot_20260111_230739.png"
// ]



// // GAME LOOP
// function gameLoop() {
//     // background move (road)
//     bgX -= 4;
//     document.body.style.backgroundPositionX = bgX + "px";

//     angle += 10
//     frontw.style.transform = `rotate(${angle}deg)`
//     backw.style.transform = `rotate(${angle}deg)`
// }

// // START BUTTON
// secondimg.addEventListener("click", () => {
//     if (gameRunning) return;

//     gameRunning = true;
//     intervalId = setInterval(gameLoop, 16); 
//     setInterval(() => {
//         if (gameRunning) {
//             let b = Math.round(Math.random() * 3)
//             console.log(b)
//             document.body.style.backgroundImage = `URL(${imagArr[b]})`
//         }
//     }, 5000);
// });

// // STOP BUTTON
// thirdimg.addEventListener("click", () => {
//     clearInterval(intervalId);
//     gameRunning = false;
// });
// window.addEventListener("click", (e) => {
//     console.log(e.x)
//     console.log(e.y)
//     if (e.x <= 904 && (e.y <= 110)) {
//         if (gameRunning) return;

//         gameRunning = true;
//         intervalId = setInterval(gameLoop, 16);
//     }
//     if ((e.x <= 904) && (e.y > 160 && e.y <= 193)) {
//         clearInterval(intervalId);
//         gameRunning = false;
//     }
// })



// function input(){
//     let input=document.querySelector("input").value
// var reverse = "";

// //     //       civic
//     for (let i = input.length - 1; i >= 0; i--) {

//   reverse += input[i];
// }
// // let p=document.querySelector("p")
// // console.log("reverse",reverse)

// // p.textContent=reverse
// console.log(reverse)
// console.log(input)
// input=reverse
// console.log(input)
// }





// setInterval

// red → green → yellow → red


// // let button = document.querySelector("button")
// // let redlight = document.querySelector(".red")
// // let yellowlight = document.querySelector(".yellow")
// // let greenlight = document.querySelector(".green")
// // let car = document.querySelector("#car")
// // let oneinterval = false;
// // let a = [redlight, yellowlight, greenlight]
// // let count = 0
// // let assign = 0;
// // let left = 0;
// // let assignleft;

// // function lightchanging() {
// //     a[assign].classList.remove("active")
// //     a[count].classList.add("active")
// //     assign = count
// //     count = (count + 1) % a.length
// // }
// // function lightwithcar() {
// //     if (redlight.getAttribute("class").includes("active")) {
// //         car.style.left = `${left}px`
// //     }
// //     else if (yellowlight.getAttribute("class").includes("active")) {
// //         if (left <= window.innerWidth-75) {
// //             left += 5;
// //             assignleft = left
// //             car.style.left = `${left}px`
// //         }
// //         else{
// //             left=0
// //         }
// //     }
// //     else if (greenlight.getAttribute("class").includes("active")) {
// //         if (left <= window.innerWidth-75) {
// //             left += 20;
// //             assignleft = left
// //             car.style.left = `${left}px`
// //         }
// //         else{
// //             left=0
// //         }
// //     }
// // }
// // setInterval(() => {
// //     lightwithcar();
// // }, 250);

// // button.addEventListener("click", () => {
// //     if (oneinterval) return;
// //     oneinterval = true
// //     setInterval(() => {
// //         lightchanging()

// //     }, 5000);
// // })




// let button = document.querySelector("button")
// let redlight = document.querySelector(".red")
// let yellowlight = document.querySelector(".yellow")
// let greenlight = document.querySelector(".green")
// let car = document.querySelector("#car")
// let oneinterval = false;
// let a = [redlight, yellowlight, greenlight]
// let count = 0
// let assign = 0;
// let left = 0;
// let assignleft;

// function lightchanging() {
//     a[assign].classList.remove("active")
//     a[count].classList.add("active")
//     assign = count
//     count = (count + 1) % a.length
// }
// window.addEventListener("keydown", (e) => {
//     console.log(e.key)
//     if (redlight.getAttribute("class").includes("active")) {
//         if (e.key === "Enter") {
//             car.style.left = `${left}px`
//         }
//     }
//     else if (yellowlight.getAttribute("class").includes("active")) {
//         if (e.key === "ArrowRight") {
//             if (left <= window.innerWidth - 75) {
//                 left += 5;
//                 assignleft = left
//                 car.style.left = `${left}px`
//             }
//             else {
//                 left = 0
//             }
//         }
//     }
//     else if (greenlight.getAttribute("class").includes("active")) {
//         if (e.key === "ArrowRight") {
//             if (left <= window.innerWidth - 75) {
//                 left += 20;
//                 assignleft = left
//                 car.style.left = `${left}px`
//             }
//             else {
//                 left = 0
//             }
//         }

//     }


// })
// // setInterval(() => {
// //     lightwithcar();
// // }, 250);

// button.addEventListener("click", () => {
//     if (oneinterval) return;
//     oneinterval = true
//     setInterval(() => {
//         lightchanging()

//     }, 5000);
// })



// let expensename = document.querySelector("#expense-name");
// let expenseamount = document.querySelector("#expense-amount");
// let button = document.querySelector("button");
// let ul = document.querySelector("ul");
// let span = document.querySelector("#total");
// let h3 = document.querySelector("h3");
// let expenses = [];
// function expenseAdd() {
//     let namevalue = expensename.value;
//     let amountvalue = expenseamount.value;
//     h3.textContent = ""
//     if (!namevalue && !amountvalue) return h3.textContent = `Plz Enter Expense !`;
//     if (amountvalue < 0) return h3.textContent = `Plz Enter Positive Amount !`;
//     if (!amountvalue) return h3.textContent = `Plz Enter Amount !`;
//     if (!namevalue || !isNaN(namevalue)) return h3.textContent = `Plz Enter Expense Name!`;
//     expenses.push({
//         name: namevalue,
//         amount: Number(amountvalue)
//     })
//     let li = document.createElement("li");
//     li.innerHTML = `<div>${namevalue} - Rs <h3>${amountvalue}</h3></div>
//     <button class="Dbt">Delete</button>`;
//     ul.appendChild(li)
//     expensename.value = "";
//     expenseamount.value = "";
// }
// function calculateTotal() {
//     let amountStore = 0;
//     expenses.forEach(e => amountStore += e.amount)
//     span.textContent = amountStore
// }
// function deletebtn() {
//     let dbt = document.querySelectorAll(".Dbt")
//     dbt.forEach((item, index) => {
//         item.addEventListener("click", (e) => {
//             e.target.parentElement.remove()
//             expenses.splice(index, 1)
//             calculateTotal()
//         })
//     })
// }

// button.addEventListener("click", () => {
//     expenseAdd();
//     calculateTotal()
//     deletebtn()
// })




















// new hai yai



// let expensename = document.querySelector("#expense-name");
// let expenseamount = document.querySelector("#expense-amount");
// let button = document.querySelector("button");
// let ul = document.querySelector("ul");
// let span = document.querySelector("#total");
// let h3 = document.querySelector("h3");
// let expenses = [];
// function expenseAdd() {
//     let namevalue = expensename.value;
//     let amountvalue = expenseamount.value;
//     h3.textContent = ""
//     if (!namevalue && !amountvalue) return h3.textContent = `Plz Enter Expense !`;
//     if (amountvalue < 0) return h3.textContent = `Plz Enter Positive Amount !`;
//     if (!amountvalue) return h3.textContent = `Plz Enter Amount !`;
//     if (!namevalue || !isNaN(namevalue)) return h3.textContent = `Plz Enter Expense Name!`;
//     expenses.push({
//         name: namevalue,
//         amount: Number(amountvalue)
//     })
//     let li = document.createElement("li");
//     li.innerHTML = `<div>${namevalue} - Rs <h3>${amountvalue}</h3></div>
//     <button class="Dbt">Delete</button>`;
//     ul.appendChild(li)
//     expensename.value = "";
//     expenseamount.value = "";
// }
// function calculateTotal() {
//     let amountStore = 0;
//     expenses.forEach(e => amountStore += e.amount)
//     span.textContent = amountStore
// }
// function deletebtn() {
//     let dbt = document.querySelectorAll(".Dbt")

//     dbt.forEach((item, index) => {
//         if (!item.dataset.listener) {
//             item.addEventListener("click", (e) => {
//                 let div = document.querySelector(".divfullpage");
//                 div.style.display = "flex"
//                 let btn1 = document.querySelector("#btn1")
//                 let btn2 = document.querySelector("#btn2")
//                 console.log(expenses)
//                 btn1.addEventListener("click", () => {
//                     console.log(expenses)
//                     div.style.display = "none"
//                     e.target.parentElement.remove()
//                     console.log("1", index)
//                     expenses.splice(index, 1)
//                     calculateTotal()
//                     console.log("hs", expenses)
//                 })
//                 btn2.addEventListener("click", () => {
//                     div.style.display = "none"
//                 })

//             })
//             item.dataset.listener = "true";
//         }
//     })
// }

// button.addEventListener("click", () => {
//     expenseAdd();
//     calculateTotal()
//     deletebtn()
// })












// let button = document.querySelector("button");

// let tasks = [
//     { id: 1, title: "HTML", status: "todo" },
//     { id: 3, title: "JS", status: "doing" }
// ];

// button.addEventListener("click", (e) => {
//     let id = e.target.closest(".task").dataset.id;
//     let task = tasks.find(t => t.id === id);
//     console.log(task)
// })

// let user = {
//   name: "Ali",
//   age: 20,
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   }
// };
// user.greet()
// // delete user.greet



// let user = {
//   name: "Ali",
//   greet: () => {
//     console.log(this.name);
//   }
// };
// user.greet()



// let studentRegister={
//     students:[],
//     collectstudents(name,age,gender,rollNO){
//         this.students.push({
//            name:name, 
//            age:age, 
//            gender:gender,
//            rollNO:rollNO
//         })
//     },
//     findStudent(name){
//      console.log(this.students.reduce(item=>item.name===name))
//     }
// }
// studentRegister.collectstudents("umair",20,"Male",489143)
// studentRegister.collectstudents("wejhgi",2,"feMale",48729143)
// studentRegister.collectstudents("umair",20,"Male",489143)
// studentRegister.findStudent("umair")
// let students = [
//   { name: "Ali", marks: 80 },
//   { name: "Ahmed", marks: 65 },
//   { name: "Sara", marks: 90 },
//   { name: "Zain", marks: 55 }
// ];


// students.forEach(student => {
//   console.log(student.name);
// });


// let toppers = students.forEach((student) => {if(student.marks > 70)console.log(student.name)});

// let sum=0;
// let total= students.forEach(item=>console.log(sum+=item.marks))
// let avg=sum/students.length;
// console.log("avg=>",avg)







let fruits = ["apple", "banana", "apple", "orange", "banana"];

let count = {};

fruits.forEach(fruit => {
    console.log(fruit)
  if (count.fruit) {
    console.log(count.fruit++);
  } else {
    count.fruit = 1;
  }
});

console.log(count);
