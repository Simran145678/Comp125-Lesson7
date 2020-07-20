"use strict";

//IIFE- immediately invoked function expression
(function(){
function start()
{
let Simran = new objects.Student("Simran",23,"301088749");
Simran.saysHello();
Simran.Studies();
}

window.addEventListener("load",start);

})();