/*
if ( expressions ){
    // if it evaluates to true, the code here gets executed

}

if ( expression){
    // if it evaluates to true, the code here gets executed

}
else{
    // if it evaluates to false, this gets executed instead

}
*/

let age = 18;
let name = "Alexander";

if ( age >= 21 ){
    console.log( name, "you are allowed to drink in the US!")
}
else{
    console.log(name, "you are not able to drink yet! wait a couple of years.")
}

console.log("this will always show because its outside of the condition")