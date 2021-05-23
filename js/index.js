// 1. Add a var , const, etc to selct a document class or IDtargetting html element and storing them inside variables using the queryselector. NOTE:javascript works in an arranged sequential manner
var firstContainer = document.querySelector(".first");
var prevBtn = document.querySelector(".previous");
var nextBtn = document.querySelector(".next");

// 2.Add an event listerner that tells the console to perform a partitular funtion. NOTE:CONSOLE LOG CAN BE ANYTHING.For the class list you can toggle, add, remove, it depends on the functionality that needs to be performed  first-conatiner click button function starts here
prevBtn.addEventListener("click", function () {
  console.log("click prev btn");
  firstContainer.classList.toggle("hide");
});

nextBtn.addEventListener("click", function () {
  console.log("click next btn");
  firstContainer.classList.toggle("hide");
});
//first-conatiner click button function ends here

var secondContainer = document.querySelector(".second");
var prevBtn2 = document.querySelector(".previous.secondPrev");
var nextBtn2 = document.querySelector(".next.secondNext");

// second-container click function starts here
prevBtn2.addEventListener("click", function () {
  console.log("click prev btn2");
  firstContainer.classList.toggle("hide");
});

nextBtn2.addEventListener("click", function () {
  console.log("click next btn2");
  firstContainer.classList.toggle("hide");
});
