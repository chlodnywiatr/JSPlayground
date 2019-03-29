"use strict";

var variable;

function scopingIssue(){
  let variable = "I'm definitely let";
  console.log(variable);
  if(true){
    variable = "I'm var";
    console.log(variable);
  }
  console.log(variable); // returns I'm var;
}

scopingIssue();

function basicForLoop() {
  for(var i = 0; i < 8; i+=2) {
    continue;
  }
  console.log(i); // returns 8;
}

basicForLoop();

// freezing objects to prevent from changing
const object = {
  name: "Wojtek"
}

const object2 = {
  name: "Michal",
  age: 20
}

for (var prop in object2) {
  if (object2.hasOwnProperty(prop)) {
      console.log(`Property ${prop} has a value of: ${object2[prop]}`);
  }
}

function listArray(...numbers) {
  for (let number of numbers) {
    console.log(number);
  }
}

listArray(11, 12, 13);

Object.freeze(object);

function changeField() {
  let {name} = object; // deconstructing
  try {
    name = "Maciek";
  }
  catch(ex){
    console.log(`This field cannnot be changed`);
  }
  console.log(name);
}

changeField();
