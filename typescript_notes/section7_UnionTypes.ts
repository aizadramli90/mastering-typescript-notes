// UNION TYPES
// Allow us to give a value a few different possible types.
// a union type can be created by using single pipe character '|' 

//example:
const guessAge = (age: number | string) => {
    return `Your age is ${age}.`
}

console.log(guessAge (34));             //both number and string can be accepted.
console.log(guessAge("Thirty four"))
//run tsc section7_UnionTypes.ts 
//run node section7_UnionTypes.js

//example 2

type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}

/* let coordinates: Point | Loc = {x:34, y: 323};
coordinates: {lat:2323.232, long: 2324.3535}; */

/* -------------------------------------------------------------- */

// USING UNION TYPES WITH FUNCTION
function printAge(age: number | string): void {
    console.log(`You are ${age} years old.`);
}
printAge(33);
printAge("34");

/* -------------------------------------------------------------- */
//TYPE NARROWING WITH UNION TYPES
// Doing a type check before working with a value. 
// as unions allow multiple types for a value, it's good to check what came through before working with it.
function calculateTax(price: number | string, tax: number) {
    if(typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
};

calculateTax(22, 1);
console.log(calculateTax("$55", 0.01));


/* -------------------------------------------------------------- */
// 40. UNION TYPES AND ARRAYS
// arrayVariable: (<type1> | <type2>) [] = []

const nums: number[] = [1,2,3,4,5]; //ordinary
const stuf: any[] = [3,4,6,232,66, "words", true]; //type to broad

// union types
const stuff2: (number| string)[] = [4,5,2, "words"] // 

const coords2 : (Point| Loc)[] = [];
coords2.push({lat: 323.424, long: 2324.121});
coords2.push({x: 23, y: 23});

/* -------------------------------------------------------------- */
// 41. LITERAL TYPES
// not just to strict the types of values, but it also used to allow certain values.
//example

function printStatus(status: "success" | "failure") {   //we determine only 2 values are acceptable
    console.log(`status is ${status}!`);
};

console.log(printStatus("success"));
//console.log(printStatus(false));    //Argument of type 'false' is not assignable to parameter of type '"success" | "failure"'.ts(2345)

//example:
let zero: 0 = 0;
zero = 0;
//zero = 2; //Type '2' is not assignable to type '0'.ts(2322)

//use custom type
type Days = 
   | "Monday"
   | "Tuesday" 
   | "Wednesday" 
   | "Thursday" 
   | "Friday" 
   | "Saturday" 
   | "Sunday";
;

//let today: Days = "Raya";   //Type '"Raya"' is not assignable to type 'Days'.ts(2322)

