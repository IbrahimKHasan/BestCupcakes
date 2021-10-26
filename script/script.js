$(document).ready(show_cupcakes);

var cup_cakes = [
  { name: "Chocolate", calories: "high", weight: "200gm" },
  { name: "Carrot", calories: "medium", weight: "150gm" },
  { name: "Banana", calories: "high", weight: "200gm" },
  { name: "Strawberry", calories: "low", weight: "160gm" },
  { name: "Peanut", calories: "medium", weight: "200gm" },
];
var tbody1 = document.getElementById("cupcake-table")
function show_cupcakes() {
  //write code that shows the cupcakes in the table as per the instructions
  for (i=0;i<=4;i++){
    var trElement = document.createElement("tr")
    tbody1.appendChild(trElement)
    var tdElement1 = document.createElement("td")
    trElement.appendChild(tdElement1)
    tdElement1.innerText=cup_cakes[i].name
    var tdElement2 = document.createElement("td")
    trElement.appendChild(tdElement2)
    tdElement2.innerText=cup_cakes[i].calories
    var tdElement3 = document.createElement("td")
    trElement.appendChild(tdElement3)
    tdElement3.innerText=cup_cakes[i].weight
    if (cup_cakes[i].calories=="high"){tdElement2.style.backgroundColor="red"}
    if (cup_cakes[i].calories=="medium"){tdElement2.style.backgroundColor="orange"}
    if (cup_cakes[i].calories=="low"){tdElement2.style.backgroundColor="green"}
  }
}

function validate() {
  //write code that validates the form
  nameFormat = /^[a-zA-Z0-9_$\.]{5,16}$/;
  var name = document.getElementById("name").value;
  var count = document.getElementById("num").value;
  var type = document.getElementById("Type").value;
  var time = document.getElementById("dTime").value;
  var aller = document.getElementById("Allergies").value;
  var nameM = name.match(nameFormat);
  document.getElementById("allerMessage").innerHTML = "Okay";
  document.getElementById("allerMessage").style.color = "rgb(15, 228, 15)";
  document.getElementById("Allergies").style.borderColor = "rgb(15, 228, 15)";
  //Name Validation
  if (nameM) {
    document.getElementById("nameMessage").innerHTML = "Okay";
    document.getElementById("nameMessage").style.color = "rgb(15, 228, 15)";
    document.getElementById("name").style.borderColor = "rgb(15, 228, 15)";
  } else {
    document.getElementById("nameMessage").innerHTML =
      "The name is required and must be at least five characters long and at most 16 characters long";
    document.getElementById("nameMessage").style.color = "red";
    document.getElementById("name").style.borderColor = "red";
  }
  //Counter Validation
  if (count >= 1 && count <= 15) {
    document.getElementById("countMessage").innerHTML = "Okay";
    document.getElementById("countMessage").style.color = "rgb(15, 228, 15)";
    document.getElementById("num").style.borderColor = "rgb(15, 228, 15)";
  } else {
    document.getElementById("countMessage").innerHTML =
      "The count is required and must be at least 1 and at most 15";
    document.getElementById("countMessage").style.color = "red";
    document.getElementById("num").style.borderColor = "red";
  }
  //Type Validation
  if (type !== "None") {
    document.getElementById("typeMessage").innerHTML = "Okay";
    document.getElementById("typeMessage").style.color = "rgb(15, 228, 15)";
    document.getElementById("Type").style.borderColor = "rgb(15, 228, 15)";
  } else {
    document.getElementById("typeMessage").innerHTML =
      "Pleas fill out the cupcake type";
    document.getElementById("typeMessage").style.color = "red";
    document.getElementById("Type").style.borderColor = "red";
  }
  //Delivery Validation
  if (time !== "None") {
    document.getElementById("timeMessage").innerHTML = "Okay";
    document.getElementById("timeMessage").style.color = "rgb(15, 228, 15)";
    document.getElementById("dTime").style.borderColor = "rgb(15, 228, 15)";
  } else {
    document.getElementById("timeMessage").innerHTML =
      "Pleas fill out the cupcake type";
    document.getElementById("timeMessage").style.color = "red";
    document.getElementById("dTime").style.borderColor = "red";
  }
  //Aller Validation
  if (type=="Chocolate" && aller=="Dairy Free"){
    document.getElementById("allerMessage").innerHTML = "The type of cake is not dairy free";
    document.getElementById("allerMessage").style.color = "red";
    document.getElementById("Allergies").style.borderColor = "red";
  }
  if (type=="Pecan" && aller=="Nut Free"){
    document.getElementById("allerMessage").innerHTML = "The pecan cake is not nut free";
    document.getElementById("allerMessage").style.color = "red";
    document.getElementById("Allergies").style.borderColor = "red";
  }
  if (time=="4:00 PM" && type=="Chocolate"){
    document.getElementById("timeMessage").innerHTML = "Unnfortunately This type of cake cannot be delivered at 4 PM";
    document.getElementById("timeMessage").style.color = "red";
    document.getElementById("dTime").style.borderColor = "red";
  }
  localStorage.setItem("user",name)
}

function show_storage() {
  //write code that shows the name from local storage
  var userName=localStorage.getItem("user")
  document.getElementById("welcome").innerHTML=`Welcome ${userName}`
}
