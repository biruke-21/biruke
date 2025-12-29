// dom manipolishn
console.log("hello biruke");
console.log(document);
document.title="my website";
//document .body.style.backgroundColor="blue";
//console.log(document.getElementById("1"));
function getAdd() {
            // Fetch the value of input with id val1
            const num1 = Number(document.getElementById("val1").value);
            // Fetch the value of input with id val2
            const num2 = Number(document.getElementById("val2").value);
            const add = num1 + num2;
            console.log(add);
            // Displays the result in paragraph using dom
            document.getElementById("result").innerHTML = "Addition : " + add;
            // Changes the color of paragraph tag with red
            document.getElementById("result").style.color = "red";
        } 
         document.getElementById("5").style.color =" black";
     document.getElementById("5").style.backgroundColor = "pink";
     document.getElementById("4").style.color = "white";
     document.getElementById("1").style.color = "white";
    let myElement=document.querySelectorAll(".red");
    console.log(myElement);
    myElement[0].className="blue";
for(let i=0;i<myElement.length;i++){
    const element=myElement[i];
   element.className="red";
 }
// //  console.log(myElement);
// // dom manipolution getElementById()
// const title=document.getElementById('main-heading');
// console.log(title);
// // getElementbyclassname()
// const listItem=document.getElementsByClassName('list-item');
// console.log(listItem);
// // getElementByIdtagename
// const listname=document.getElementsByTagName('li');
// console.log("listname");

const revalBtn=document.querySelector('.reval-btn');
const hiddencontent=document.querySelector('.hidden-content');
function revalcontent(){
  if(hiddencontent.classList.contains('reval-btn')){
    hiddencontent.classList.remove('reval-btn')
  } 
  else{
    hiddencontent.classList.add('reval-btn')
  } 
}
console.log(document.getElementById("numberList").firstElementChild);
console.log( document.getElementById("numberList").lastElementChild);
// alttering
var el=document.getElementById("5")
console.log(el);
el.className="red";
el.className.color="black";
var someParagraph = document.createElement("p"); // Corrected variable name
console.log(someParagraph);
someParagraph.textContent = "hey biruk are you fine today is the best day for you "; // Corrected property name (textContent)
document.body.appendChild(someParagraph);
someParagraph.style.color="red";
someParagraph.style.backgroundColor="#0056";
let bi = document.createElement("img");
console.log(bi); // Corrected to log 'bi'
bi.src = "   548x1186 (9).jpg"; // Corrected to use the 'src' property
document.body.prepend(bi);
numberList.setAttribute("class", "#0000");
numberList.setAttribute("name", "biruk");
function underl(){
  let el=document.querySelector("numberList");
  el.style.backgroundColor="red";
  el.style.Color="blue";
  el.style.padding="20px";
 el.style.width="100%";
}
underl();

function underl(){
  let el=document.querySelector("ul");
  el.style.backgroundColor="green";
  el.style.Color="blue";
  el.style.padding="20px";
 el.style.width="100%";
}
underl();
// javascript Event  
// when the the user click the that can change  in different form
// uI/windows Event
// key board evenet
// mouse event click,dbclick,mouseover,mouseout
// form event  
// loading event
//  cursor Event
  let btn=document.getElementById("btn1");
  let techparent=document.getElementById("btn1");
  btn1.onclick=changeColor;
    btn1.onclick=backgroundColor;

function changeColor(){
techparent.style.color="red"
techparent.style.backgroundColor="blue";
}
var formElement = document.getElementsByClassName("styled-form");
var submitButton = document.getElementsByClassName("submit-btn");
function bk(){
    if (formElement) {
        formElement.style.backgroundColor = "red"; 
    }
}
document.getElementById('enrollmentForm').addEventListener('submit', function(event) {

    event.preventDefault(); 
    const form = event.target;
    form.style.backgroundColor = '#1ba73cff'; // Light Green
    form.querySelector('h3').textContent = 'Enrollment Submitted! Thank You.';
   
    form.querySelector('.submit-btn').disabled = true;
});
var ek=document.getElementById("submit");
ek.onsubmit=formSubmitCheker;
function formSubmitCheker(){
   
}
// Change label color when "First Name" label is clicked
document.querySelector('label[for="fname"]').addEventListener('click', function() {
    this.style.color = '#0099ff'; // Example: set to blue
});

document.querySelector('.styled-form').addEventListener('submit', function(event) {
    let valid = true;

    // Select all required inputs
    const requiredInputs = this.querySelectorAll('input[required], select[required]');

    requiredInputs.forEach(function(input) {
        // Reset background (in case user tries again after error)
        input.style.backgroundColor = '';

        // Check for invalid or empty value
        if (!input.value || (input.type === 'email' && !input.value.match(/^\S+@\S+\.\S+$/))) {
            input.style.backgroundColor = '#e50c0cff'; // Light red for error
            valid = false;
        }
    });

    if (!valid) {
        event.preventDefault(); // Prevent submission
        alert('Please fill out all required fields correctly!');
    }
});
document.getElementById("kl").style.backgroundColor = "blue";
document.getElementById("df").style.backgroundColor = "green";
function changeColorKL() {
        // Targets the element by its ID "kl" and sets its background color
        document.getElementById("kl").style.backgroundColor = "lightblue";
    }

    function changeColorDF() {
        // Targets the element by its ID "df" and sets its background color
        document.getElementById("df").style.backgroundColor = "lightcoral";
    }
    var el=$("#btn1");
    console.log(el);

$("form").has("button").css("backgroundColor ","black");