'use strict';

// Inheritance and the prototype chain
// Object from a constructor function 
const Person = function(firstName, birthYear){
    // this keyword is set to the object that is calling the method 

    this.firstName = firstName
    this.birthYear = birthYear

    // Never do this (don't create methods inside a constructor function because every instance which is created from this constructor function will carry it which is not efficient)

    // this.calcAge = function(){
    //     console.log(2023 - this.birthYear)
    // }

    // To solve the above problem use prototype inheritance 

}

const yeabsera = new Person('Yeabsera', 2000)
console.log(yeabsera)

// 1. New {} is created
// 2. function is called , this = {}
// 3. {} linked with a prototype (create the __proto__ and set it to the prototype property of the constructor function ) => this is called PROTOTYPE-INHERITANCE/DELEGATION 
// 4. function automatically return {}

const matilda = new Person('Matilda', 2000)
console.log(matilda)
const jack = 'jack'
console .log(yeabsera instanceof Person)
console.log(jack instanceof Person)

// Prototypes #1
console.log(Person.prototype)

Person.prototype.calcAge = function(){
    console.log(2023 - this.birthYear)
}

yeabsera.calcAge()

console.log('prototype of yeabsera or prototype-property of Person(constructor function)' , yeabsera.__proto__)

console.log(Person.__proto__)
console.log(Person.prototype.__proto__)
console.log(yeabsera.__proto__ === Person.prototype)

console.log(Person.prototype.isPrototypeOf(yeabsera))
console.log(Person.prototype.isPrototypeOf(jack))

Person.prototype.species = 'Homo Sapiens'
console.log(yeabsera.species)
console.log(yeabsera.hasOwnProperty('firstName'))
console.log(yeabsera.hasOwnProperty('species'))
console.log(yeabsera.__proto__.species)
console.log(yeabsera.prototype) // undefined
