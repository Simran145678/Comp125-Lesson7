"use strict";

//IIFE- immediately invoked function expression
(function()
{
// let Person=(function()
// {

    
//     Object.defineProperties(Person.prototype, "Name",  
//     {
//     get : function()
//     {
//         return this.m_name;
//     },
//     set: function(value)
//     {
//         this.m_name=value;
//     },
//     enumerable: false,
//     configurable: true
//     }
//     );

//     Object.defineProperties(Person.prototype, "Age",
//     {
//      get: function()
//      {
//     return this.m_age;
//      },
//      set: function(value)
//     {
//      this.m_age=value;
//     },
//     enumerable: false,
//     configurable: true


//     }
//     );


// //constructor
// function Person(name,age)
// {
//     this.Name=name;
//     this.Age=age;
// }
// Person.prototype.saysHello=function()
// {
//     console.log(`${this.Name} says Hello`);
// }


// return Person;

// }());
class Person{
    //Properties
    get Name()
    {
        return this.m_name;
    }
    set Name(value)
    {
        this.m_name=value;
    }

    get Age()
    {
        return this.m_age;
    }
    set Age(value)
    {
    this.m_age=value;
    }
    //constructors
     constructor(name,age)
     {
      this.Name=name;
      this.Age=age;
     }
    //methods
    saysHello()
    {
        console.log(`${this.Name} says hello!`)
    }
}

function start()
{
let Simran = new Person("Simran",23);
Simran.saysHello();
}


window.addEventListener("load",start);

})();