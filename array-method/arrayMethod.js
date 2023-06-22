const arr = [7, 8, 23, 45, 23, 54, 53, 45, 64, 86];

// pop method removes the last element from the array and returns a new length
// var length=arr.pop()
// console.log(length)
// console.log(arr)

// push  method push the element at the last in the array and returns a new length
// var element = arr.push(8)
// console.log(arr);
// console.log(element)

// shif method removes the first element from the array and returns the element as well as the new array
// And Change The orginal Array
// var element = arr.shift()
// console.log(element)
// console.log(arr)

// unshift Add The Element In The Begning and retuns the length of the array also muted the orginal array...
// var element = arr.unshift(5)
// console.log(element)
// console.log(arr)

// join will convert all the element of the array into string
// const joined = arr.join("")
// console.log(typeof joined)

// Spil;t Method Make An Array to Depends on The Seperator
// const change = "Hello, My , Love"
// const split =  change.split(",")
// console.log(split)

// const str = "Hello123World456How789AreYou";
// const split = str.split(/\D+/).filter(Boolean)
// const change = []
// for(let i=0; i<split.length; i++){
//     change.push(Number(split[i]))
// }
// console.log(change)

// Find Method in Javascript ?
// Find Method Basically works On The Condition And When The Condition Statisfy It Returns
// which ever element matches that condition it will return that

// const findNumber = arr.find((number) => number > 23)
// console.log(findNumber)

// Concat Method basically Combines the two array together

// let array = [32,43,54,65]
// let array2 = [56,54,423]

// console.log(array.concat(array2))

// const Person = {
//   name: "Jhon",
//   age: 30,
//   occupation: "Developer",
// };

// const keys = Object.values(Person);
// console.log(keys);

// const fruits = ['apple', 'Banana', 'Orange', 'Pineapple','Kewi']

// const sliced = fruits.slice(1,4);
// console.log(sliced)

// The slice() method is used to create a new array by extracting a portion of an existing array. It takes two optional parameters: the starting index (inclusive) and the ending index (exclusive) of the portion to be extracted.
// javascript

// const fruits = ['Apple', 'Banana', 'Orange', 'Pineapple','Kiwi']

// const sliced = fruits.slice(2);
// console.log(sliced)

// const fruit = ["Apple", "Banana", "Orange", "Pineapple", "Kiwi"];
// const ans = fruit.slice(1,2);
// console.log(ans);
// console.log(fruit);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const myBest = fruits.slice(-3, -1);
// console.log(myBest)

// const Person = {
//     name : "Amaan",
//     surname : "Khatri",
//     greet : function(){
//         console.log(`Hello ${this.name} you Are Doing Great ${this.surname}`)
//     }
// }

// Person.greet()

const bankAccount = {
  Balance: 1000,
  withdraw: function (amount) {
    if (amount > this.Balance) {
      console.log("Insufficent Balance");
    } else {
      this.Balance -= amount;
      console.log(`Amount Withdraw ${amount}`);
    }
  },
  deposit: function (amount) {
    this.Balance += amount;
    console.log(`${amount} Deposited`);
    console.log(`current balance ${this.Balance}`);
  },
};
// bankAccount.withdraw(400);
// bankAccount.deposit(500);

var car = {
  brand: "Toyota",
  model: "Camry",
};

console.log(car.hasOwnProperty("brand"));
console.log(car.hasOwnProperty("model"));
