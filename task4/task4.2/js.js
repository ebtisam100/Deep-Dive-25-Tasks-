let fullname = "  Mohamed Yasser  ";

console.log("number of characters: " + fullname.length);

let newFullName = fullname.trim();

console.log("number of characters: " + newFullName.length);

console.log(fullname.toUpperCase());

console.log(fullname.toLowerCase());

console.log(newFullName.substring(0,7));

console.log(fullname.includes("mohamed"));

/////////////////

let fruits = ["apple" , "banana" , "mango"];

fruits.push("orange");
fruits.unshift("kiwi");
console.log(fruits);

fruits.shift();
fruits.pop();
console.log(fruits);

console.log("index of mango: " + fruits.indexOf("mango"));

console.log(fruits.map(
    function uppercase (ele){
        return ele.toUpperCase();
}));

console.log(fruits.filter(
    function StartWithB (ele){
        return ele.startsWith("B") || ele.startsWith("b");
}));

fruits.forEach(
    function print (ele){
         console.log(`fruit ${Number(fruits.indexOf(ele))+1} is ${ele}`);
});

/////////////

console.log(Math.floor(Math.random() * 10) + 1);

console.log("round 5.1 = " + Math.round(5.1));
console.log("round 5.6 = " + Math.round(5.6));
console.log("trunc 5.1 = " + Math.trunc(5.1));
console.log("trunc 5.6 = " + Math.trunc(5.6));
console.log("floor 5.1 = " + Math.floor(5.1));
console.log("floor 5.6 = " + Math.floor(5.6));
console.log("ceil 5.1 = " + Math.ceil(5.1));
console.log("ceil 5.6 = " + Math.ceil(5.6));

console.log("square root of 64 = " + Math.sqrt(64));

console.log("max number = " + Math.max(3 , 8 , 20 , 1));
console.log("max number = " + Math.min(3 , 8 , 20 , 1));

/////////////

let Age = 20;
console.log(Age == 20 ? "Adult" : "Minor");

////////////

let person = {
    name: "Ebtisam",
    age: 20,
    address: "eeeee",
    displayInfo: function(){
        console.log("name: " + this.name);
        console.log("age: " + this.age);
        console.log("address: " + this.address);
    },
    contact: {
        phone: 123456789,
        email: "eeee@eee",
        displayContactInfo: function(){
            console.log("phone: " + this.phone);
            console.log("email: " + this.email);
        },
    },
};

person.displayInfo();
person.contact.displayContactInfo();
person.address = "aaaaa";
console.log("new address: " + person.address);

/////////////

let { name , age  , contact:{phone}} = person;
console.log(name);
console.log(age);
console.log(phone);

let [first , second] = fruits;
console.log("first fruits element: " + first);
console.log("second fruits element: " + second);

//////////////

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];
console.log(arr3);

function add(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
console.log("3 numbers summation: " + add(1, 2, 3));
console.log("5 numbers summation: " + add(10, 20, 30, 40, 50));

////////////

let name2 = "Ahmed";
let age2 = 22;

console.log(`Hello ${name2}, you are ${age2} years old`);