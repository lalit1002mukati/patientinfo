

function ValidationEvent() {
// Storing Field Values In Variables
var ffname = document.getElementById("fname").value;
var llname = document.getElementById("lname").value;
var agee = document.getElementById("age").value;
var phn = document.getElementById("phone").value;

if (ffname != '' && llname != '' && age != ''&& phn !='') {

if (isNaN(agee) || agee > 0 || agee <100)
{ 
if (phn.length == 10) {
alert("All field are correct and submit sucessfull");
return true;
} else {
alert("The mobile phone No. must be at least 10 digit long!");
return false;
}
} else {
alert("age must be valid number.....!");
return false;
}
}  else {
alert("All fields are required.....!");
return false;
}
}













