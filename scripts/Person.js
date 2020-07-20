"use strict";

//name of the namespace
let objects;
(function(objects)
{
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
objects.Person=Person;



}(objects || (objects={})));
