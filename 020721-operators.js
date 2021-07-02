// //ternary operators:
// let points =110;
// let type = points>=90 ? 'GOLD' : 'SILVER';
// console.log(type);

// //////////////////////////////////////////
// //LOGICAL operators
//1-AND Operator
true && true
false && true
false && false 
let highscore = true;
let graduate = true;
let eligible = highscore && graduate;
console.log(eligible);

/////////////
//OR operator
//true || false = true
//false || false = false
let highscore = false;
let graduate = true;
let eligible = highscore || graduate;
console.log('ELIGIBLE',eligible);

//////////////////
//NOT operator
//!==
let highscore = false;
let graduate = true;
let eligible = highscore || graduate;
console.log('ELIGIBLE',!eligible);