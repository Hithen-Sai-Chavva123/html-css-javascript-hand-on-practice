// // let a=434;
// // let b=64;
// // let c=a+b;
// // let v="rtryr";
// // let h=true;
// // const hi={
// //     name:"hithen",
// //     age:20,
// //     rate:5,
// //     age:30,

// // };

// // console.log(c);
// // console.log(hi);
// // console.log(hi.age+hi["age"]);
// // g="gdhgfhgdd"
// // console.log(g+c);
// // console.log(typeof(g));
// // const k={
// //     name:"ffhgff",
// //     age:20,
// //     rate:5
// // };
// // k["ji"]=true;

// // // arithematic operator
// // let y=90;
// // let x=80;
// // console.log(x+y,"add");
// // console.log(x-y,"sub");
// // console.log(x*y,"mul");
// // console.log(x/y);
// // console.log(x%y);
// // console.log(x**y);

// // console.log(x++);
// // console.log(++x);
// // console.log(--y);
// // console.log(y--);
// // //assignment operator
// // let j=0,p=1,m=1,n=1,r=2;
// // let s=8;
// // j+=8;
// // p-=8;
// // m%=9;
// // n*=8;//=== is used to comapre the value with it's type(ex:number,string)
// // r**=2;
// // console.log(j,p,m,n,r);
// //comparition operator
// // let c1=33;
// // let c2=33;
// // let c3=34;
// // console.log(c1==c2,c1==c3,c2!=c3,c1>c3,c3>c2,c3>=c2);
// //---------------------------------------------

// //console.log("enter the age:");
// // let age=prompt("enter the age:");
// // if(age>10 && age<20)
// // {
// //     console.log("age b/w 10 and 20");
// // }
// // else{
// //     console.log("age is not b/w 10 and 20");
// // }
// // age=prompt("enter the age:");
// // age=Number.parseInt(age);
// // switch(age){
// // case 10 :console.log("age is 10");
// //             break;
// // case 9:console.log("age is 9");
// //         break;
// // case 8:console.log("age is 8");
// //         break;
// // case 7: console.log("age is 7");
// //         break;
// // case 6:console.log("age is 6");
// //         break;
// // default:console.log("not b/w 10 and 6");
// // };     
// // -----------------------
// // if(age%2==0 && age%3==0)
// // {
// // alert("it is divisiable by 2 and 3");
// // }
// // else{
// //     alert("not divisible by 2 and 3");
// // }
// //-------------------------
// // if(age%2==0 || age%3==0)
// // {
// // alert("it is divisiable by 2 or 3");
// // }
// // else{
// //     alert("not divisible by 2 or 3");
// // }
// // ------------------------------
// // //----------------------------------------------
// // let age=prompt("enter the age");
// // let sum=0;sumof num
// // for(let i=0;i<=age;i++)
// // {
// //       sum+=i;
// // }
// // console.log(sum);
// // let fact=1;//factorial
// // for(let i=1;i<=age;i++)
// // {
// //       fact=fact*i;
// // }
// // if(fact==1||fact==0)
// // {
// //     fact=1;
// // }
// // console.log(fact,"factorial of number");
// // const objecxt={
// //     "hithen":92,
// //     "yogesh":91,
// //    " vekata anand":90
// // };
// // for(a of "objecxt")//for of loop 
// // {
// //     console.log(a);
// // }
// // for(a in objecxt)//for in loop o/p :keys
// // {
// //     console.log(a);
// // // }
// // n=Number.parseInt(age)
// // var i=0;
// // while(i<n)
// // {
// //     console.log(i);
// //     i++;
// // }
// // const pro={
// //     ramesh:89,
// //     nikl:78,
// //     vesh:56,yuck:67
// // };
// // for (let i=0;i<Object.keys(pro).length;i++)
// // {
// //     console.log(Object.keys(pro)[i]+"-"+pro[Object.keys(pro)[i]]);
// // }
// // for (let i in pro){
// //  console.log(i+"--"+pro[i]);
// // } 
// // let v=9;
// // let i;
// // while(v!=i)
// // {
// //     let i=prompt("enter the value");


// // }
// // console.log("correct no is enetered");
// // function mean(input1,input2,input3,input4,input5)
// // {

// //     let mean=(input1+input2+input3+input4+input5)/5;
// //     return mean;
// // }
// // let n=mean(12,23,34,45,56);
// // console.log(n);
// // let h="hithen sai\'";//escape sequenec \n,\t\b ,\" \'"
// // console.log(h)
// // console.log(h.length)//length()
// // console.log(h.toUpperCase())//touppercase
// // console.log(h.toLowerCase())//tolowercase
// // console.log(h.slice(2));//start to end including end character
// // console.log(h.slice(2,-1));//slice (start index,end index where it doesn't include last one )
// // let h1 ="chavva";
// // let y=(h.concat(h1,h));
// // console.log(y);
// // (h1.replace("ch","CH"));
// // //console.log(h1);
// // let g="      What are high resolution and bit-mapped displays used for?   ";
// // console.log(g.trim());
// // for (let i  of "string"){//string are immutable

// //     console.log(i);
// // }
// // let a="vfvfv";
// // let n="hfc}kjdhkdhc";
// // let s=`${a} is freind of ${n}`;//string interpolationand template literals
// // console.log(s);
// // // console.log("har\"".length);pro-1
// // // pro-3
// // const arr=[ 1,2,3,4,5,67,8];
// // for(let i=0;i<arr.length;i++)
// // {
// //  console.log(arr[i]);
// // }
// //aray are object //can store all type of value
// //we can change(mutable) the value of element in array and add the value in an arraywhere are immutable it cann't can changed
// const num=[1,7,3,9,5];
// // let b=num.toString()
// // console.log(b);//array to string 
// // let c=num.join(":","hithen")//add sepearstor and return a string 
// // console.log(c)
// // console.log(num.pop())//remove last element from original array and return poped element
// // console.log(num)
// // console.log(c)
// // console.log(num.push(7))//add  last element to original array and return length after adding the element
// // console.log(num)
// // console.log(num.shift())//remove first element to original array and return shift element
// // console.log(num)
// // console.log(num.unshift(1))//add first element to original array and return length
// // console.log(num)
// // delete num[0]
// // console.log(num.length ,num)//delete the value of the index but the length is same shows empty elementb
// // const hithen=[1,3,5,7,9]
// // let array=num.concat(hithen)
// // console.log(array)
// // let  compare=(a,b)=>{
// //     return b-a
// // }
// // num.sort(compare)//array is sort element alphabetically
// // console.log(num)
// // console.log(num.reverse())
// // num.splice(3,2,89,65,34,54)
// // console.log(num)
// for(let i=0;i<num.length;i++)
// {
    
// }
// 1. Variables and Data Types
// javascript
// Copy
// Edit
// let name = "John";  // String
// const age = 25;      // Number
// var isStudent = false;  // Boolean

// console.log(name, age, isStudent);
// 2. Functions
// javascript
// Copy
// Edit
// function greet(name) {
//     return `Hello, ${name}!`;
// }

// console.log(greet("Alice"));
// 3. Arrow Functions
// javascript
// Copy
// Edit
// const add = (a, b) => a + b;

// console.log(add(5, 3));
// 4. Conditionals
// javascript
// Copy
// Edit
// let num = 10;

// if (num > 0) {
//     console.log("Positive number");
// } else if (num < 0) {
//     console.log("Negative number");
// } else {
//     console.log("Zero");
// }
// 5. Loops
// javascript
// Copy
// Edit
// for (let i = 1; i <= 5; i++) {
//     console.log(`Iteration: ${i}`);
// }

// let count = 0;
// while (count < 3) {
//     console.log(`Count: ${count}`);
//     count++;
// }
// 6. Arrays
// javascript
// Copy
// Edit
// let fruits = ["Apple", "Banana", "Cherry"];

// fruits.push("Mango");  // Add item
// console.log(fruits);

// fruits.pop();  // Remove last item
// console.log(fruits);
// 7. Objects
// javascript
// Copy
// Edit
// let person = {
//     name: "Alice",
//     age: 30,
//     greet: function() {
//         return `Hi, I'm ${this.name}`;
//     }
// };

// console.log(person.greet());
// 8. Array Methods
// javascript
// Copy
// Edit
// let numbers = [1, 2, 3, 4, 5];

// let squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);  // [1, 4, 9, 16, 25]

// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);  // [2, 4]

// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);  // 15
// 9. Promises & Async/Await
// javascript
// Copy
// Edit
// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched successfully");
//         }, 2000);
//     });
// };

// fetchData().then(data => console.log(data));

// async function getData() {
//     let result = await fetchData();
//     console.log(result);
// }

// getData();
// 10. DOM Manipulation
// javascript
// Copy
// Edit
// document.getElementById("btn").addEventListener("click", function() {
//     document.getElementById("message").innerText = "Button Clicked!";
// });
// html
// Copy
// Edit
// <button id="btn">Click Me</button>
// <p id="message"></p>
// <script src="script.js"></script>
// Would you like more interactive examples or explanations on any specific topic? 🚀








// You said:
// and any this more
// ChatGPT said:
// Here are more hands-on JavaScript fundamental examples that will help you strengthen your skills:

// 11. Template Literals (String Interpolation)
// javascript
// Copy
// Edit
// let user = "Alice";
// let message = `Hello, ${user}! Welcome to JavaScript.`;
// console.log(message);
// 12. Destructuring Arrays & Objects
// javascript
// Copy
// Edit
// // Array Destructuring
// let colors = ["Red", "Green", "Blue"];
// let [firstColor, secondColor] = colors;
// console.log(firstColor, secondColor);  // Red Green

// // Object Destructuring
// let car = { brand: "Toyota", model: "Camry", year: 2022 };
// let { brand, model } = car;
// console.log(brand, model);  // Toyota Camry
// 13. Spread and Rest Operators
// javascript
// Copy
// Edit
// // Spread Operator (Copying Arrays)
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];
// console.log(arr2);  // [1, 2, 3, 4, 5, 6]

// // Rest Operator (Function Arguments)
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4));  // 10
// 14. Default Parameters in Functions
// javascript
// Copy
// Edit
// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
// }

// greet();  // Hello, Guest!
// greet("Alice");  // Hello, Alice!
// 15. SetTimeout and SetInterval
// javascript
// Copy
// Edit
// // setTimeout (Execute after delay)
// setTimeout(() => {
//     console.log("This message appears after 2 seconds");
// }, 2000);

// // setInterval (Execute repeatedly)
// let count = 0;
// let interval = setInterval(() => {
//     console.log(`Counter: ${count}`);
//     count++;
//     if (count > 5) clearInterval(interval);
// }, 1000);
// 16. Local Storage and Session Storage
// javascript
// Copy
// Edit
// // Local Storage (Data persists even after page reload)
// localStorage.setItem("username", "JohnDoe");
// console.log(localStorage.getItem("username"));  // JohnDoe

// // Session Storage (Data is cleared when session ends)
// sessionStorage.setItem("sessionUser", "Alice");
// console.log(sessionStorage.getItem("sessionUser"));  // Alice
// 17. Fetch API (AJAX Requests)
// javascript
// Copy
// Edit
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error:", error));
// 18. Try-Catch for Error Handling
// javascript
// Copy
// Edit
// try {
//     let num = 5;
//     if (num > 3) throw "Number is too large!";
// } catch (error) {
//     console.error("Caught an error:", error);
// } finally {
//     console.log("Execution completed.");
// }
