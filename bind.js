// Bind
/**
 * bind_.bind(function, object, *arguments) 
 * 
 * Bind a function to an object, meaning that whenever the function is called, 
 * the value of this will be the object. Optionally, pass arguments to the function 
 * to pre-fill them, also known as partial application. For partial application without 
 * context binding, use partial.
 */


const _ = require('underscore');

 class User {
   constructor(name) {
     this.name = name
   }
 };

const person = new User('Bob')

function aFunction (greeting)  {
   return `${greeting} ${this.name}`
 }

const bound  = _.bind(aFunction, person, 'Hi');

console.log(bound())