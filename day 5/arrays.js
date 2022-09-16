
let names = ["Alex", "Martha","Roger","Ruben","Julie"];
//              0       1       2       3        4

// console.log(names[2]);
console.log( names.length );

//names[3] = "michael";

console.log(names);
names.push("michael")
names.push("Robert")
console.log( names );
names.pop();
console.log( names );
names.shift();
console.log( names );
names.unshift("logan");
console.log( names );

//take a look at the .splice() method

/*
for( let i = 0; i < names.length; i++ ){
    console.log( names[i] );
}
*/