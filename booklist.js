 var firstLI = document.querySelectorAll("a");
 /* firstLI[0].style.color="red"; */




 firstLI.forEach(function(element) {
   element.addEventListener("mouseover", function() {
     element.style.color = "red";
     console.log("over");
   });
   element.addEventListener("mouseout", function() {
     element.style.color = "black";
   });
 });


 let oneContent = document.getElementsByClassName("one");
 let twoContent = document.getElementsByClassName("two");
 let threeContent = document.getElementsByClassName("three");

 let oneButton = document.getElementById("feedback");
 let twoButton = document.getElementById("completed");
 let threeButton = document.getElementById("recommended");

 oneButton.addEventListener("click", function() {
   threeContent[0].style.display = "inline-block";
   twoContent[0].style.display = "none";
   oneContent[0].style.display = "none";
 });


 twoButton.addEventListener("click", function() {
   threeContent[0].style.display = "none";
   twoContent[0].style.display = "inline-block";
   oneContent[0].style.display = "none";
 });

 threeButton.addEventListener("click", function() {
   threeContent[0].style.display = "none";
   twoContent[0].style.display = "none";
   oneContent[0].style.display = "inline-block";


 });

 var contentArray = ["one", "two", "three"];
 var buttonArray = ["recommended", "completed", "feedback"];

 document.addEventListener("click", function(event) {
 	console.log(event.target);
   if (event.target.tagName !== "A" &&
   		event.target.className !== "inner" && 
      event.target.className !== "first inner"
   ) {
   	  threeContent[0].style.display="none";
   	  twoContent[0].style.display="none";
   	  oneContent[0].style.display="none";
   	  } 
 });
