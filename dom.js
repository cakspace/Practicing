// DOM manipulation---------------------

// const list1 = document.querySelector(".list1");
// console.log(list1);

// const list2 = list1.nextSibling.nextSibling;
// console.log(list2);

// const list3 = list2.nextSibling;
// list3.nextSibling.textContent = "fantastic";
// console.log(list3);

// const list4 = document.querySelector(".list4");
// list4.textContent = "four";

//---------------------------------------
// nodeValue
// textContent

// // const value = list1.nodeValue;         //need firstChild
// const value = list1.firstChild.nodeValue; //works!
// console.log(value); // just use textContent :)

//------------------------------------------
//getAttribute()
//setAttribute()

// const special = document.querySelector("#special");
// const showClass = special.getAttribute("class");
// console.log(showClass);

// const link = document.getElementById("link");
// const showLink = link.getAttribute("href");
// console.log(showLink);

// const item = link.nextSibling.nextSibling;
// item.setAttribute("class", "first");

// console.log(item);

//----------------------------------------------------
//classList
//className
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.querySelector("#third");

const className = first.className;
// console.log(className);

second.className = "colors";
second.className = "text";

//classList
const classes = third.classList;
//add class
// third.classList.add("colors");
// third.classList.add("text");
third.classList.add("colors", "text");
// ---classLst.remove  to remove classes
// ---classLst.contains  to check for classes

console.log(classes);
