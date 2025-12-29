console.log("biruke");
console.log("kebede");
console.log(4+7);
var d=38;
var t=47;
console.log(t+d);
let x="we are in the class of javascript"
console.log(x);
const laptopprice=20000;
console.log("laptopprice");
let discount=laptopprice*(10/20000);
let tax=laptopprice*(3/20000);
let finalprice= laptopprice-discount+tax;
console.log("this is "+finalprice);
var student ="biruk"
console.log(student);
d=485;
console.log(d);

let  num1=80;
let num2=60;
let result1;
let result2;
console.log(num1); 
result1=num1+num2;
console.log(result1);
result2=num1*num2;
console.log(result2); 
let division;
let sub;
division=num1/num2;
console.log(division);
sub=num1-num2;
console.log(sub);
console.log(1==1||2==2||3==4); 
console.log(6==6&&8==23||76==35);
let fname="biruk";
let lname="sew";
 fullname=fname+ " " +lname;
 console.log(fullname);
 //comparsion 
 console.log(sub>division)
console.log(sub==division)
console.log(sub!=division)
console.log(sub<division)
let s="9";
let y=7;
console.log(y!=s);
console.log(s==y);
//array it is important to grouped element
var myfirstArray=["biruk",39,"this is the class of js",2];
console.log( myfirstArray);
console.log(myfirstArray[1]);
console.log(myfirstArray[1]+myfirstArray[3]);
console.log(myfirstArray[1]*myfirstArray[3]);
console.log(myfirstArray[1]-myfirstArray[3]);
//Data structure is a way of organaxing data in the computer
 var c="biruk";
   c=56;
   console.log(c);
//algorithmic thinking and practice
//addation
//add two numbers that is intger 
function add(a,b){
  if (typeof a !="numbers"||typeof b!="numbers"){
    return " can only add numbers.please provide number values";
  }
  var c=a+b;
  return c;

}
var sum=add(5,28);
console.log(sum);
//area of triagle
function triArea(base,height){
  if (typeof base !== 'number' || typeof height !== 'number'){
    return "please inter the a number value";
  }
  else if (base<=0|| height <=0){
    return"please provide only positive number ";
  }
  else{
 return (base*height)/2;
  }
 
}
console.log(triArea(6,10));
console.log(triArea(6,5));
console.log(triArea(6,"he"));
//win get 3 point
// draw get 1 ponit
//losses get no point or 0
//footballpoint =winpoint*3+drawponit*1+lossesponit*0

 //function and condtional statment
 //function
 function abebe(){
console.log("abebe is the great");
console.log("hello abebe");
console.log("where are go");
let num1=90;
let num2=49;
console.log(num1+num2);
 }
 abebe();
 abebe();
 abebe();
 abebe();
 function biruk(){
 console.log("kal");
  console.log("lema");
   console.log("tagele");
    console.log(23*3);
 }
 biruk();
 //agument and parametr
 function kebede(a,b){
 console.log(a+b);
 }
 kebede(12,5);
 kebede(20,5);
 function laptopname(laptopname,price,discount){
    let tax=(price*4)/100;
    let total=price-discount+tax;
    console.log(laptopname +" laptopprice is $"+total); 
}
laptopname("HP",20000,1000);
laptopname("mac",50000,1200);
laptopname("apple",70000,1300);
//variable scoping
 function mycar(){
   var x="toyota";
   let y="tesla";
   const g="lambergien";
   console.log(x);
      console.log(y);

         console.log(g);
 }
 mycar();
    console.log(x);
       console.log(y);
   //console.log(g); const is not display out side the scope  
   //block statment
    if(true){
      const message=("hello");
      let mymessage="my class";
      var themessage= "selam new";
      console.log(message);
            console.log(mymessage);

                  console.log(themessage);

    }
    ///onsole.log(message); 
    // it does not work out side the scope except the var key word
          console.log(themessage);
  //arrow function
   const addArrow = (a, b) => {
  return a + b;
};
var arrow = () => {
  return "hey class are you fine";
}
console.log(arrow("hey class are you fine"));
//conditional statment
//if condition
let israining=true;
if(israining){
  console.log("take umbrella");
}
 if(9==9){
  console.log("the class of javascript")
 }
 let pass=50;
 let score=80;
if(score>=pass){
  console.log("passed");
}
if(score<pass){
  console.log("failed add the ocurse again");
}
// conditional function 
function check(pass,score){
  if(score>=pass){
    console.log("congraguation  you passed");
  }
  if(score<pass){
    console.log("sorry you failed");
  }
}
check(45,80);
check(50,49);
//if  else condition if the one condition is not fullfielled see the next condition 
if(score>=pass ){
console.log("you are passed");
}
else{
  console.log("you failed");
}
// switch statment
let dayOfWeek = "friday";

switch (dayOfWeek.toLowerCase()) {
  case "monday":
    console.log("It's the start of the week!");
    break;
  case "tuesday":
    console.log("Second day of the week.");
    break;
  case "wednesday":
    console.log("Hump day!");
    break;
  case "thursday":
    console.log("Almost the weekend.");
    break;
  case "friday":
    console.log("TGIF!");
    break;
  case "saturday":
  case "sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Invalid day.");
}
// for loops
for(i=1;i<=10;i++){
  console.log("hello");
}
for (let x = 1; x <= 10; x++) {
    console.log("Value of x:" + x);
}
  let f=4;
for (let i = 1; i <= 10; i++) {
  console.log(f* i); 
}
//object oriented data model
var student= {
  firstname:"biruk",
  lastname:"sew",
  dept:"software",
  group:1,
  day: 10-2-2026,
} ;
console.log(student);
console.log(student.firstname);
console.log(student.day);
var mycar={
  name:"lambergien",
  model:2024,
  weight:"870kg",
  color:"black",
  
  start: function(){
    return "start mycar" + this.name;
  },
  drive:function (){
  return"go forward";
},
brake:function(){
return "press on my car"+this.car;
},
stop:function(){
return "stop my car"+this.name;
},
};
console.log(mycar.name);
console.log(mycar.model);
console.log(mycar.weight);
console.log(mycar.color);
mycar.name="tesla";
console.log(mycar.name);
// object constractor
let chala={
  fistname:"chala",
  lastname:"man",
}
console.log(chala);
       function Car(carname, carmodel, carweight, carcolor) {
    this.name = carname;
    this.model = carmodel;
    this.weight = carweight;
    this.color = carcolor; // Changed 'carcolor' assignment
    // Removed duplicate 'this.name = carname;'
    
    this.start = function() {
        return "Start my " + this.name;
    };
    this.drive = function() {
        return "Go forward";
    };
    this.brake = function() {
        return "Stop my " + this.name;
    };
}
var toyota = new Car("Toyota", 2023, "780kg", "blueblack"); // Changed name to 'Toyota' for consistency, corrected arguments
console.log(toyota);
console.log(toyota.start());
console.log(toyota.brake());
console.log(toyota.drive());
console.log("Evangadi".split(""));
console.log("abebe beso bela".split(""));
console.log("hey guys are you fine".split(" "));
// algorithm
let smallCaseString = "hello world";
let upperCaseString = smallCaseString.toUpperCase();

console.log(upperCaseString); 
console.log(upperCaseString[0]); 
console.log(upperCaseString[6]); 
console.log(upperCaseString[8]);
console.log(upperCaseString[10]);  
function carNest(arry1, arry2) {
    console.log(arry1, arry2);

    if (!Array.isArray(arry1) || !Array.isArray(arry2)) {
        return "both values need to be array";
    }
    if (arry1.length === 0 || arry2.length === 0) {
        return false;
    }
    let arr1sorted = arry1.sort((x, y) => x - y);
    let arry2sorted = arry2.sort((x, y) => x - y); // Corrected variable name from arry2sort to arry2sorted

    let arr1min = arr1sorted[0];
    let arr2min = arry2sorted[0];
    let arr1max = arr1sorted[arry1.length - 1];
    let arr2max = arry2sorted[arry2.length - 1];
    // Check the nesting condition (arr1 is nested in arr2)
    if (arr2min < arr1min && arr2max > arr1max) {
        return true;
    } else {
        return false;
    }
}
console.log(carNest([12, 13, 56], [80, 46, 76]));
// Example 2: [12, 56] nested in [46, 190]? No (12 is too small). -> false
console.log(carNest([12, 18, 56], [97, 46, 76]));
// Example 3: Nested condition met: [46, 76] nested in [12, 80]? Yes (12 < 46 and 80 > 76). -> true
console.log(carNest([46, 76], [12, 80]));
// sort algorithm
function sorted(a) {
  let number = [...a]; // Copy array to avoid mutating original
  let checker = true;
  while (checker) {
    checker = false; // Assume sorted
    for (let i = 0; i < number.length - 1; i++) {
      if (number[i] > number[i + 1]) {
        // Swap
        [number[i], number[i + 1]] = [number[i + 1], number[i]];
        checker = true; // Found a swap, so not sorted
      }
    }
  }
  return number;
}

let test = [45, 23, 4, 6, 7];
let test1 = sorted(test);
console.log(test1); 
  // magic Array
  






  






   



