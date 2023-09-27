// function sayHello() {
//   console.log("hello");
// }
/*
for (let i = 1; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// for (i = 0; i < 9; i++) {
//   setTimeout(() => {
//     sayHello(), time;
//   });
// }

for (let i = 1; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
console.log("The loop is done!");

for (let i = 1; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
setTimeout(() => console.log("The loop is done!"), 1001);



for (let i = 1; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
setTimeout(() => console.log("The loop is done!"), 5001);


const endingNum = 5;
for (let i = 1; i < endingNum + 1; i++) {
  setTimeout(() => {
    console.log(i);
    if (i === endingNum) {
      console.log("The loop is done!");
    }
  }, i * 1000);
}


console.log("begin");
setTimeout(() => {
  console.log("good");
}, 3000);

function sayHello() {
  console.log("hello");
}
console.log("begin");
setTimeout("sayHello()", 3000);
*/

console.log("Where can I learn to code for free and get a developer job?");

//这一行表示，一旦过了 3ms，函数定义将被执行

setTimeout(codingCourse, 3000);

//函数定义

function codingCourse() {
  console.log("freeCodeCamp");
}
