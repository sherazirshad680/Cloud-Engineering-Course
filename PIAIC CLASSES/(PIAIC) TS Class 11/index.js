"use strict";
// const enum USER_ROLES {
//   STUDENT = "Student",
//   TEACHER = "Teacher",
//   HEAD = "Head",
// }
let vals = ["a", "b", "c"];
const customarray = ["Abc", 10, "BCD"];
// const data: person = {
//   name: "Sheraz",
// //   run: (val) => val.length,
// };
let person1 = {
    name: "Sheraz",
    age: 21,
};
let person2 = {
    name: "Naveed Sarwar",
    age: 28,
    designation: "CEO Techloset",
};
// person1 = person2;
// console.log(person1);
// const data = await fetch("https://dummyjson.com/products");
// const resp = await data.json();
// console.log(resp);
// ---------------------------
// OOPs (Object Oriented Programming)
// class Human {
//   name: string = "";
//   age: number = 0;
//   constructor(_name: string, _age: number) {
//     this.name = _name;
//     this.age = _age;
//   }
// }
// const human = new Human();
// console.log(human, "Before updation");
// human.name = "Sheraz";
// human.age = 21;
// console.log(human);
// const human2 = new Human();
// human2.name = "Naveed Sarwar";
// human2.age = 21;
class Human {
    constructor(_name, _age) {
        this.name = "";
        this.age = 0;
        this.password = "test";
        this.name = _name;
        this.age = _age;
        this.password = "Parameter value";
    }
    get Password() {
        return this.password;
    }
    set updatepass(pass) {
        this.password = pass;
    }
}
