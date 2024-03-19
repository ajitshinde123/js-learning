// /Function with no arguments and no return value
console.log("======== step 1: ==========");
function name(){
    console.log("Angular Developer");
    console.log("Code Mind Technology");
}
name();

//2. Function with arguments and  return value 
console.log("======== step 2: =========="); 
function show( firstName,lastName,collegeName){
    firstName="Ajit";
console.log("First name:", firstName);
lastName="Shinde";
console.log("Last name:", lastName);
collegeName="KBP";
console.log("College name:", collegeName);
}
show();

console.log("======== step 3: ==========");
console.log("======== step 3A: ==========");
function swapvalues (arg1,arg2) {
   console.log("Before swap:",arg1,arg2);
  var temp =  arg1;
 arg1 = arg2;
 arg2 = temp
 console.log("After swap:",arg1,arg2);
}
swapvalues( "Virat","Anushka")

console.log("======== step 3B: ==========");
function swapvalues(num1,num2) {
    console.log("Before swap:",num1,num2);
    var temp = num1;
    num1=num2;
    num2=temp;
    console.log("After swap:",num1,num2);
}
swapvalues(1000,2000)

console.log("======== step 4: ==========");
function add(n1, n2, n3){
    console.log("Arguments: ", n1, n2, n3);
    var result = n1+n2+n3;
    console.log("Addition is: ", result);
}
add(10.23,600,40);
add(" Hello", " Good", " Morning")

console.log("======== Assignment 2: ==========");


